/* global hexo */

'use strict';

// 注册 after_post_render 过滤器，用于处理图片标签
hexo.extend.filter.register('after_post_render', function(data) {
  // 替换图片标签的正则表达式，将 <p><img> 标签替换为自定义的图片包装结构
  const imgRegex = /<p><img src="(.*?)" alt="(.*?)"\/><\/p>/g;
  const replacement = '<div class="img-wrap"><div class="img-bg"><img class="img" src="$1" alt="$2"\/><\/div><span class="image-caption">$2<\/span><\/div>';
  data.content = data.content.replace(imgRegex, replacement);
  return data;
});