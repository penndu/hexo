"use strict";

const { test } = require("node:test");
const assert = require("node:assert/strict");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { CONTRIBUTIONS } = require("../scripts/lib/contribution-registry");
const { heroEffectDefinitions } = require("../scripts/lib/hero-effect-registry");

test("registered browser modules load and export the runtime mount entry", async () => {
  for (const contribution of CONTRIBUTIONS) {
    if (contribution.entry.type !== "browser-module") continue;
    const file = path.join(__dirname, "../source", contribution.entry.path);
    const module = await import(pathToFileURL(file).href);
    assert.equal(typeof module.mount, "function", contribution.id);
  }
});

test("registered Hero effect modules export the shared renderer contract", async () => {
  for (const effect of heroEffectDefinitions()) {
    const file = path.join(__dirname, "../source", effect.module);
    const module = await import(pathToFileURL(file).href);
    assert.equal(typeof module.createRenderer, "function", effect.id);
  }
});
