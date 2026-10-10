/*!
 * dusays-head-fix.js —— <head> 补丁（Hexo after_render 过滤器）
 *
 * 部署位置：/root/hexo/scripts/dusays-head-fix.js
 *   ⚠️ 是 Hexo 根目录的 scripts/，不是 source/scripts/
 *   （本 repo 是 source 层内容，所以这个文件要么手动放服务器，要么在
 *     .gitea/workflows 里加一行 cp 自动同步过去）
 *
 * 作用：不改主题源码，在构建产物生成后直接改 HTML —— 主题升级不会丢补丁。
 *
 * 修什么：viewport 里的 maximum-scale=1
 *   根因：Stellar 2.0.0 的 layout/_partial/head.ejs:204 是硬编码
 *        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
 *        主题没有配置开关能关掉它；去掉后才允许用户双指缩放（无障碍要求）。
 *
 * 不修什么（这些不属于这一层）：
 *   - 首页/归档/分类/标签的 meta description：站点配置里已有，取的是
 *     _config.yml 的 description 字段（实测 2026-10-07 存在），改文案请改那里。
 *   - canonical：Stellar 的 canonical.host 默认 null（不生成），
 *     在主题配置里设 host 即可，不需要过滤器。
 */

hexo.extend.filter.register('after_render:html', function (str, data) {
  /* 线上 HTML 有压缩版（属性不带引号）和常规版两种写法，两条都要命中 */
  str = str.replace(
    /<meta\s+name=["']?viewport["']?\s+content=("[^"]*maximum-scale[^"]*"|'[^']*maximum-scale[^']*'|[^\s>]*maximum-scale[^\s>]*)[^>]*>/gi,
    '<meta name="viewport" content="width=device-width, initial-scale=1">'
  );

  return str;
});
