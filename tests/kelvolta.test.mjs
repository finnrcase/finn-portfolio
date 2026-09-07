import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import ts from "typescript";
import { kelvoltaPublicExperience } from "../data/kelvolta.ts";
import { experience } from "../data/experience.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);

// Independent approved fixture: edits to the public source must not update this
// baseline without explicit user approval of the new public wording.
const approved = {
  company: "Kelvolta Inc.",
  role: "Technical Intern - AI & Data Science",
  location: "Redwood City, CA",
  startDate: "07/2026",
  endDate: "Present",
  bullets: [
    "Contributing to data analytics at Kelvolta, an energy technology company.",
    "Work includes exploratory analysis, prospect research, and performing analyses that explore the company’s future analytical capabilities.",
  ],
  tools: [],
  links: [],
};

// Use the existing TypeScript compiler to exercise the real TSX renderer without
// adding a test framework, JSX loader, or browser dependency.
function loadComponent(name) {
  const filename = resolve(root, "components", `${name}.tsx`);
  const { outputText } = ts.transpileModule(readFileSync(filename, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true,
    },
  });
  const compiled = { exports: {} };
  const localRequire = (specifier) =>
    specifier.startsWith("@/components/")
      ? loadComponent(specifier.slice("@/components/".length))
      : require(specifier);
  new Function("require", "module", "exports", outputText)(
    localRequire, compiled, compiled.exports,
  );
  return compiled.exports;
}

test("approved public copy is exact, has no extra fields, and cannot mutate", () => {
  assert.deepEqual(kelvoltaPublicExperience, approved);
  assert.equal(`${kelvoltaPublicExperience.startDate} - ${kelvoltaPublicExperience.endDate}`, "07/2026 - Present");
  for (const value of [kelvoltaPublicExperience, kelvoltaPublicExperience.bullets, kelvoltaPublicExperience.tools, kelvoltaPublicExperience.links]) {
    assert.ok(Object.isFrozen(value));
  }
  const entries = experience.filter((item) => /kelvolta/i.test(item.company));
  assert.equal(entries.length, 1);
  assert.strictEqual(entries[0], kelvoltaPublicExperience);
  assert.strictEqual(experience[0], kelvoltaPublicExperience);
});

test("the actual experience card renders only the approved copy", () => {
  const { ExperienceCard } = loadComponent("experience-card");
  const html = renderToStaticMarkup(createElement(ExperienceCard, { item: kelvoltaPublicExperience }));
  const text = html.replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&").replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">");
  assert.equal(text, `07/2026 - Present${approved.location}${approved.role}, ${approved.company}${approved.bullets.join("")}`);
  assert.equal((html.match(/<li\b/g) ?? []).length, 2);
  assert.doesNotMatch(html, /NDA|DO NOT EDIT|<img\b|<a\b|<script\b|<details\b|<dialog\b|\btitle=|\baria-label=|\bhidden\b/i);
});

test("public source files do not introduce separate or expanded company copy", () => {
  for (const directory of ["app", "components", "data"]) {
    for (const entry of readdirSync(resolve(root, directory), { recursive: true })) {
      if (!/\.(?:[cm]?[jt]sx?|json|mdx?)$/.test(entry)) continue;
      const relative = `${directory}/${entry}`;
      if (relative === "data/kelvolta.ts") continue;
      const source = readFileSync(resolve(root, relative), "utf8");
      assert.doesNotMatch(source, /Kelvolta\s+Inc\.|Technical Intern - AI & Data Science|Contributing to data analytics at Kelvolta|company’s future analytical capabilities/i, relative);
    }
  }
});
