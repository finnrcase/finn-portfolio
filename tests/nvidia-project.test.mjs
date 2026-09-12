import assert from "node:assert/strict";
import test from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { projects } from "../data/projects.ts";
import { loadComponent } from "./helpers/load-component.mjs";

test("ongoing NVIDIA research renders inline with no links or results metrics", () => {
  const project = projects.find((item) => item.slug === "nvidia-demand-shocks-cross-firm-return-predictability");
  assert.ok(project);
  assert.equal(project.date, "07/2026 - Present");
  assert.equal(project.status, "In Progress");
  assert.equal(project.presentation, "inline");
  assert.deepEqual(project.links, []);
  assert.deepEqual(project.pdfs, []);
  assert.deepEqual(project.metrics, []);
  const { ProjectCard } = loadComponent("project-card");
  const html = renderToStaticMarkup(createElement(ProjectCard, { project }));
  assert.doesNotMatch(html, /<a\b|\bhref=|https?:\/\/|github|repository|View Project/i);
  assert.match(html, /<details\b/);
  assert.match(html, /07\/2026 - Present/);
  assert.match(html, /In Progress/);
  assert.match(html, /day 1 through day 10/);
  assert.match(html, /look-ahead bias, data leakage, survivorship bias, multiple testing, and overfitting/);
  assert.match(html, /A null result is a valid research outcome/);
});
