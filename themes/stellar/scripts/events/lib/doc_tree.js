/**
 * doc_tree.js v2 | https://github.com/xaoxuu/hexo-theme-stellar/
 *
 * Wiki 文档树构建入口：委托 scripts/lib/doc_tree.js 的纯函数，
 * 保持 ctx.theme.config.wiki 输出结构与旧实现一致。
 */

'use strict';

const { buildWikiTree } = require('../../lib/doc_tree');
const { configuredLanguages } = require('../../lib/language_path');

module.exports = ctx => {
  const options = {
    data: ctx.locals.get('data'),
    pages: ctx.locals.get('pages'),
    shelf: ctx.locals.get('data').wiki || [],
    siteTree: ctx.theme.config.site_tree,
    context: ctx
  };
  const locales = {};
  for (const item of configuredLanguages(ctx)) {
    locales[item.code] = buildWikiTree(Object.assign({}, options, { language: item.code }));
  }
  const defaultLanguage = configuredLanguages(ctx)[0]?.code;
  ctx.theme.config.wiki = Object.assign({}, locales[defaultLanguage] || buildWikiTree(options), { locales });
};
