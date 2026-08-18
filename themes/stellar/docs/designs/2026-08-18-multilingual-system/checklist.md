---
title: Stellar 多语言内容体系检查清单
date: 2026-08-18
---

# 检查清单 / 验证记录

- [x] 主工程 `npm run g`（250 个页面生成，gulp minify 通过）
- [x] `npm run lint && npm test`（lint、依赖声明、130 项测试通过）
- [x] `python3 docs/knowledge/tools/verify.py`（硬事实核查通过；仅现存非阻断告警）
- [x] 首页 / 文章页 / Wiki 页语言入口（构建结果检查）
- [x] 有翻译版本页面的互链与 `hreflang`（helper 已覆盖）
- [x] 无翻译版本页面不产生错误互链（当前构建仅输出 zh-CN）
- [x] 语言切换器键盘可操作（原生 `<details>` / `<summary>`）
