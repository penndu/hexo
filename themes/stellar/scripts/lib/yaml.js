"use strict";

const yaml = require("js-yaml");

// 主题配置与 Front Matter 保持 YAML 1.2 标量、日期及 << 合并键语义。
// js-yaml 5 的 load 拒绝空流；loadAll 让空文件/纯注释继续表示未配置。
//
// 实际解析此模块的 js-yaml 版本由 hexo 8（"js-yaml": "^4.1.0"）传递依赖
// 提供；stellar 在 themes/stellar/package.json 里写的 ^5.5.0 在 vendored
// 主题目录里不会在 hexo 站点安装时生效。两个版本需要原代码
// `CORE_SCHEMA + merge + timestamp` 的等价路径不相同：
//   - js-yaml 5：顶层导出 YAML11_SCHEMA（YAML 1.1 + merge + timestamp + ...）
//   - js-yaml 4：DEFAULT_SCHEMA = CORE_SCHEMA.extend({implicit:[timestamp, merge], ...}）
// `YAML11_SCHEMA ?? DEFAULT_SCHEMA` 一行搞定两版本兼容，不再 import 任何 tag。
const schema = yaml.YAML11_SCHEMA ?? yaml.DEFAULT_SCHEMA;

function loadYaml(source, options = {}) {
  const documents = yaml.loadAll(source, { ...options, schema });
  if (documents.length > 1) throw new yaml.YAMLException("expected a single document in the stream");
  return documents[0];
}

module.exports = { loadYaml };
