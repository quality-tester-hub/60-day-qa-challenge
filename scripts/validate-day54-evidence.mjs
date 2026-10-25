import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const day54Dir = path.join(
  repoRoot,
  "Module-4-Security_Testing_&_Vulnerabilities",
  "Day-54-gruyere.appspot",
);
const evidenceDir = path.join(day54Dir, "Evidence");
const reportsDir = path.join(day54Dir, "Defects_&_Bugreports");
const expectedLogs = [
  "01-stored-xss-test.log",
  "02-csrf-control-review.log",
  "03-idor-access-control.log",
];
const requiredText = new Map([
  ["01-stored-xss-test.log", ["ASSESSMENT: Stored Cross-Site Scripting (XSS)", "OBSERVED BEHAVIOR:", "script execution did not occur"]],
  ["02-csrf-control-review.log", ["ASSESSMENT: Cross-Site Request Forgery (CSRF) Controls", "Request method: GET", "Cross-origin behavior was not tested"]],
  ["03-idor-access-control.log", ["ASSESSMENT: Insecure Direct Object References (IDOR)", "Authenticated session: Account A", "private canary", "RESULT:"]],
]);

const log = (message) => console.log(`[Day 54 evidence] ${message}`);

try {
  const evidenceEntries = (await readdir(evidenceDir)).sort();
  assert.deepEqual(
    evidenceEntries,
    expectedLogs,
    "Evidence directory must contain exactly the three approved .log files",
  );
  log(`PASS: exactly ${expectedLogs.length} category-specific .log files are present`);

  for (const [fileName, phrases] of requiredText) {
    const contents = await readFile(path.join(evidenceDir, fileName), "utf8");
    for (const phrase of phrases) {
      assert.ok(contents.includes(phrase), `${fileName} is missing required evidence field: ${phrase}`);
    }
    log(`PASS: ${fileName} contains required test and result fields`);
  }

  const reportEntries = await readdir(reportsDir);
  assert.deepEqual(
    reportEntries,
    ["01-gruyere-vulnerability-assessment.md"],
    "Defects_&_Bugreports must contain exactly the requested assessment report",
  );
  const day54Readme = await readFile(path.join(day54Dir, "README.md"), "utf8");
  const portfolioReadme = await readFile(path.join(repoRoot, "README.md"), "utf8");
  const report = await readFile(path.join(reportsDir, reportEntries[0]), "utf8");
  for (const fileName of expectedLogs) {
    assert.ok(day54Readme.includes(fileName), `Day 54 README does not link ${fileName}`);
    assert.ok(report.includes(fileName), `Assessment report does not link ${fileName}`);
    assert.ok(portfolioReadme.includes(fileName), `Portfolio README does not link ${fileName}`);
  }
  assert.ok(day54Readme.includes(reportEntries[0]), "Day 54 README does not link the assessment report");
  assert.ok(portfolioReadme.includes("Day-54-gruyere.appspot/README.md"), "Portfolio README does not link the Day 54 README");
  log("PASS: all evidence and report links are present");

  assert.ok(!evidenceEntries.some((name) => /\.(png|jpe?g|gif|webm|mp4)$/i.test(name)));
  log("PASS: no screenshot or video artifacts are present in the Day 54 Evidence directory");
  log("Validation completed successfully");
} catch (error) {
  console.error(`[Day 54 evidence] FAIL: ${error.message}`);
  process.exitCode = 1;
}
