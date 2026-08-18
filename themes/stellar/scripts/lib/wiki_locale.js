'use strict';

const { pageLanguage } = require('./language_path');

function wikiData(theme, page, context) {
  const wiki = theme && theme.wiki;
  if (!wiki) return { shelf: [], tree: {}, all_pages: [], all_tags: {} };
  const lang = pageLanguage(page, context);
  return (wiki.locales && wiki.locales[lang]) || wiki;
}

function wikiProject(theme, id, page, context) {
  return wikiData(theme, page, context).tree[id];
}

module.exports = { wikiData, wikiProject };
