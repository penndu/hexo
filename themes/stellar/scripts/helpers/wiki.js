/* global hexo */
'use strict';

const { pageLanguage, languagePath } = require('../lib/language_path');
const { wikiData, wikiProject } = require('../lib/wiki_locale');

hexo.extend.helper.register('wiki_data', function(page) {
  return wikiData(hexo.theme.config, page || this.page, hexo);
});

hexo.extend.helper.register('wiki_project', function(id, page) {
  return wikiProject(hexo.theme.config, id, page || this.page, hexo);
});

hexo.extend.helper.register('wiki_index_url', function(page) {
  const themeConfig = hexo.theme.config;
  const lang = pageLanguage(page || this.page, { config: hexo.config, theme: { config: themeConfig } });
  return languagePath(lang, themeConfig.site_tree.index_wiki.base_dir, {
    config: hexo.config,
    theme: { config: themeConfig }
  });
});

module.exports = { wikiData, wikiProject };
