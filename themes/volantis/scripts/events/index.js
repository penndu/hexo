/* global hexo */

'use strict';

// 在生成之前的事件中执行一些操作
hexo.on('generateBefore', () => {
  // 合并配置
  require('./lib/config')(hexo);
  require('./lib/stellar-tag-utils')(hexo);
  require('./lib/render-stylus')(hexo);

  // 如果主题配置的 debug 为 "env"，则检查环境
  if (hexo.theme.config.debug === "env") {
    require('./lib/check-environment')(hexo);
  }
});

// 在 hexo 准备好之后的事件中打印主题信息
hexo.on('ready', () => {
  const { version } = require('../../package.json');
  const infoMessage = `
============================================================
  Volantis ${version}
  Docs: https://volantis.js.org/
  Repo: https://github.com/volantis-x/hexo-theme-volantis/
============================================================`;
  hexo.log.info(infoMessage);
});