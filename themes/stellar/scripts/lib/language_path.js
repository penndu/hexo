'use strict';

function normalizePath(path) {
  let value = String(path || '').split(/[?#]/)[0];
  value = value.replace(/^\/+|\/+$/g, '');
  value = value.replace(/(^|\/)index\.html?$/i, '$1');
  return value.replace(/^\/+|\/+$/g, '') || '/';
}

function configuredLanguages(ctx) {
  ctx = ctx || {};
  const cfg = (ctx.theme && ctx.theme.language_switcher) ||
    (ctx.theme && ctx.theme.config && ctx.theme.config.language_switcher) || {};
  const siteLanguages = Array.isArray(ctx.config && ctx.config.language)
    ? ctx.config.language
    : [ctx.config && ctx.config.language || 'en'];
  const items = Array.isArray(cfg.items) && cfg.items.length > 0
    ? cfg.items
    : siteLanguages.map(function(code, index) {
      return { code: code, title: code, url: index === 0 ? '/' : '/' + code + '/' };
    });
  return items.filter(function(item) {
    return item && item.code;
  }).map(function(item, index) {
    return {
      code: String(item.code),
      title: item.title || String(item.code),
      url: item.url || (index === 0 ? '/' : '/' + item.code + '/'),
      available: item.available
    };
  });
}

function pathLanguage(path, ctx) {
  const languages = configuredLanguages(ctx)
    .map(function(item) { return item.code; })
    .sort(function(a, b) { return b.length - a.length; });
  const normalized = normalizePath(path);
  const segments = normalized === '/' ? [] : normalized.split('/');
  const first = segments[0] || '';
  const code = languages.find(function(item) {
    return item.toLowerCase() === first.toLowerCase();
  });
  return {
    code: code || null,
    key: (code ? segments.slice(1) : segments).join('/') || '/',
  };
}

function pageLanguage(page, ctx) {
  const detected = pathLanguage(page && page.path, ctx);
  if (detected.code) return detected.code;
  if (page && page.wiki_language) return String(page.wiki_language);
  if (page && page.lang) return String(page.lang);
  const languages = configuredLanguages(ctx);
  return languages.length > 0 ? languages[0].code : 'en';
}

function languagePath(code, path, ctx) {
  const languages = configuredLanguages(ctx);
  const item = languages.find(function(language) { return language.code === code; });
  const prefix = item && item.url ? normalizePath(item.url) : (languages[0]?.code === code ? '/' : code);
  const base = prefix === '/' ? '' : prefix;
  const normalized = normalizePath(path);
  return '/' + [base, normalized === '/' ? '' : normalized].filter(Boolean).join('/') + '/';
}

module.exports = {
  normalizePath,
  configuredLanguages,
  pathLanguage,
  pageLanguage,
  languagePath
};
