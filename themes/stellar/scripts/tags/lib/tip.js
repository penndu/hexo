/**
 * tip.js v1.0 | https://github.com/xaoxuu/hexo-theme-stellar/
 * 格式与官方标签插件一致使用空格分隔，中括号内的是可选参数（中括号不需要写出来）
 *
 * {% tip 词句 pop:注解内容 %}
 */

'use strict'

module.exports = ctx => function(args) {
  args = ctx.args.map(args, ['pop'], ['text'])
  const escapeHTML = require('hexo-util').escapeHTML
  const pop = escapeHTML(args.pop || '')
  const inner = ctx.render.renderSync({text: args.text || '', engine: 'markdown'})
    .split('\n').join('')
    .replace(/<\/?p>/g, '')
  var el = ''
  el += `<span class="tag-plugin tip" tabindex="0">`
  el += `<span class="tip-text">${inner}</span>`
  el += `<span class="tip-bubble" role="tooltip">${pop}</span>`
  el += '</span>'
  return el
}
