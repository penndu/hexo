/**
 * wiki v1 | https://github.com/xaoxuu/hexo-theme-stellar/
 */

const { configuredLanguages, languagePath } = require('../lib/language_path')

hexo.extend.generator.register('wiki', function (locals) {
  const { site_tree, wiki } = hexo.theme.config
  var ret = []
  for (const language of configuredLanguages(hexo)) {
    const view = wiki.locales && wiki.locales[language.code]
    if (!view || Object.keys(view.tree).length === 0) continue
    ret.push({
      path: languagePath(language.code, site_tree.index_wiki.base_dir, hexo),
      layout: ['index_wiki'],
      data: {
        layout: 'index_wiki',
        lang: language.code,
        wiki_language: language.code,
        menu_id: site_tree.index_wiki.menu_id,
        filter: false
      }
    })
    if (view.all_tags) {
      for (let id of Object.keys(view.all_tags)) {
        let tag = view.all_tags[id]
        ret.push({
          path: tag.path,
          layout: ['index_wiki'],
          data: {
            layout: 'index_wiki',
            lang: language.code,
            wiki_language: language.code,
            menu_id: site_tree.index_wiki.menu_id,
            filter: true,
            tagName: tag.name,
            title: tag.name
          }
        })
      }
    }
  }
  return ret
})
