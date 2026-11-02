'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { load } = require('cheerio');

const { ensureAltAttribute } = require('../scripts/filters/lib/img');

test('缺少 alt 的图片补上空 alt，标记为装饰性图片', () => {
  const out = ensureAltAttribute('<img src="https://res.xaox.cc/a.webp">');
  const image = load(out, null, false)('img');
  assert.equal(image.attr('alt'), '');
  assert.equal(image.attr('src'), 'https://res.xaox.cc/a.webp');
});

test('已有 alt 的图片保持原值不变', () => {
  const withText = ensureAltAttribute('<img src="https://res.xaox.cc/a.webp" alt="架构图">');
  assert.equal(load(withText, null, false)('img').attr('alt'), '架构图');

  const withEmpty = ensureAltAttribute('<img src="https://res.xaox.cc/a.webp" alt="">');
  assert.equal(load(withEmpty, null, false)('img').attr('alt'), '');
});

test('补 alt 时保留其它属性与自闭合写法', () => {
  const out = ensureAltAttribute('<img class="lazy" data-src="https://res.xaox.cc/a.webp" width="100">');
  const image = load(out, null, false)('img');
  assert.equal(image.attr('alt'), '');
  assert.equal(image.attr('class'), 'lazy');
  assert.equal(image.attr('data-src'), 'https://res.xaox.cc/a.webp');
  assert.equal(image.attr('width'), '100');

  assert.equal(ensureAltAttribute('<img/>'), '<img alt=""/>');
});
