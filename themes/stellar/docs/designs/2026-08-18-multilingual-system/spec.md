---
title: Stellar 多语言内容体系
date: 2026-08-18
status: 已实施
---

# 多语言内容体系方案

## 1. 问题与目标

为 issue #294 提供完整的语言入口，而不是只增加一个静态按钮。主题需要能够识别当前页面语言，关联同一翻译组的页面，并输出可访问且可被搜索引擎理解的语言链接。

## 2. 技术方案

- `language_switcher` 配置控制语言入口及各语言首页。
- 页面通过 URL 第一级语言前缀识别语言，去除前缀后的归一化路径作为翻译组 key。
- `language_versions()` helper 从 Hexo locals 中查找归一化路径相同、语言不同的页面和文章。
- 语言入口放在主导航菜单末尾，使用原生 `<details>`，无需新增客户端状态管理。
- head 中只输出已存在翻译页面的 `alternate hreflang`。
- Wiki 在构建阶段按语言生成独立的数据视图，项目列表、文档树、标签、相关内容和搜索索引只使用当前语言页面。
- Wiki 项目配置支持 `locales.{lang}` 覆盖；未覆盖的字段回退默认配置，当前语言有页面但无专属配置时仍显示项目。

## 3. 影响范围

- `scripts/helpers/language.js`
- `layout/_partial/sidebar/menu.ejs`
- `layout/_partial/head.ejs`
- `source/css/_components/sidebar/menu.styl`
- `scripts/lib/language_path.js`、`scripts/lib/doc_tree.js`、`scripts/generators/wiki.js`、`scripts/generators/search.js`
- Wiki 相关模板、`languages/*.yml`、`_config.yml`、知识库本地化文档

## 4. 验证方式

- 页面无需额外 front-matter 字段即可显示语言首页入口。
- 去除语言前缀后路径相同的页面互相链接。
- 无翻译版本时不输出错误的 `hreflang` 页面链接。
- `/wiki/` 与 `/en/wiki/` 的列表、侧栏、标签和搜索结果不混入其它语言页面。
- 主题构建和知识库核查通过。
