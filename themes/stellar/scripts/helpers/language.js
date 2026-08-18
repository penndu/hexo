/* global hexo */
'use strict';

function themeConfig() {
  return (hexo.theme && hexo.theme.language_switcher) ||
    (hexo.theme && hexo.theme.config && hexo.theme.config.language_switcher) || {};
}

const {
  normalizePath,
  configuredLanguages,
  pathLanguage,
  pageLanguage,
  languagePath
} = require('../lib/language_path');

function asList(collection) {
  if (!collection) return [];
  if (Array.isArray(collection)) return collection;
  if (Array.isArray(collection.data)) return collection.data;
  if (typeof collection.toArray === 'function') return collection.toArray();
  return [];
}

function findTranslation(page, code, ctx) {
  if (!page) return null;
  const currentKey = pathLanguage(page.path, ctx).key;
  const pages = asList(hexo.locals.get('pages'));
  const posts = asList(hexo.locals.get('posts'));
  const all = pages.concat(posts);
  return all.find(function(item) {
    return item && item !== page &&
      pathLanguage(item.path, ctx).key === currentKey &&
      pageLanguage(item, ctx) === code;
  }) || null;
}

hexo.extend.helper.register('language_versions', function(page) {
  const ctx = this;
  const current = page || ctx.page;
  const languages = configuredLanguages(ctx);
  return languages.map(function(item) {
    const translation = findTranslation(current, item.code, ctx);
    return Object.assign({}, item, {
      current: pageLanguage(current, ctx) === item.code,
      page: translation,
      has_page: Boolean(translation || pageLanguage(current, ctx) === item.code),
      available: Boolean(translation || item.available || pageLanguage(current, ctx) === item.code),
      href: translation ? ctx.pretty_url(translation.path) : ctx.pretty_url(item.url)
    });
  });
});

hexo.extend.helper.register('language_switcher_enabled', function() {
  const cfg = themeConfig();
  return cfg.enable !== false && configuredLanguages(this).length > 1;
});

hexo.extend.helper.register('language_path', function(path, page) {
  const ctx = this;
  return languagePath(pageLanguage(page || ctx.page, ctx), path, ctx);
});
