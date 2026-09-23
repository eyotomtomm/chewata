import { test } from "node:test";
import assert from "node:assert/strict";
import { seasonTotal, formatETB } from "./sports.ts";

test("seasonTotal", () => {
  assert.equal(seasonTotal([]), 0);
  assert.equal(seasonTotal(["basketball"]), 7000);
  assert.equal(seasonTotal(["basketball", "running"]), 10000);
  // duplicates must not double-charge
  assert.equal(seasonTotal(["basketball", "basketball"]), 7000);
  // unknown ids are ignored, never charged
  assert.equal(seasonTotal(["curling"]), 0);
  assert.equal(seasonTotal(["curling", "padel"]), 7000);
});

test("formatETB", () => {
  assert.equal(formatETB(7000), "7,000 ETB");
  assert.equal(formatETB(0), "0 ETB");
});
