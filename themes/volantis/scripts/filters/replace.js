/* global hexo */

'use strict';

// 注册 after_render:html 过滤器，用于替换文本
hexo.extend.filter.register('after_render:html', function(data) {
  // 检查主题配置中是否有 replace 配置项
  if (hexo.theme.config.replace) {
    // 遍历 replace 配置项数组
    hexo.theme.config.replace.forEach((e) => {
      // 将替换规则按 " => " 分割为源字符串和目标字符串
      const [a, b] = e.split(" => ");
      // 使用正则表达式全局替换 data 中的文本
      data = data.replace(new RegExp(a, "g"), b);
    });
  }
  return data;
}, 999999999999);