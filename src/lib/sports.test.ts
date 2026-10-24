import { test } from "node:test";
import assert from "node:assert/strict";
import { seasonTotal, formatETB } from "./sports.ts";

test("seasonTotal", () => {
  assert.equal(seasonTotal([]), 0);
  assert.equal(seasonTotal(["basketball"]), 7500);
  assert.equal(seasonTotal(["basketball", "volleyball"]), 15000);
  // duplicates must not double-charge
  assert.equal(seasonTotal(["basketball", "basketball"]), 7500);
  // unknown or retired ids are ignored, never charged
  assert.equal(seasonTotal(["curling"]), 0);
  assert.equal(seasonTotal(["padel", "football"]), 7500);
});

test("formatETB", () => {
  assert.equal(formatETB(7500), "7,500 ETB");
  assert.equal(formatETB(0), "0 ETB");
});
