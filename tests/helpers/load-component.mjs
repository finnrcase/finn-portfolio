import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const require = createRequire(import.meta.url);

// Use the existing TypeScript compiler to exercise the real TSX renderer without
// adding a test framework, JSX loader, or browser dependency.
export function loadComponent(name) {
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

