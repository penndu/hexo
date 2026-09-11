---
title: 错误页
domain: 内容系统
---

# 错误页

`layout/404.ejs` 渲染独立的 404 内容：错误插图、三语说明、返回首页按钮与可选评论区。模板将 `page.robots` 设为 `none`，评论默认关闭。

## 配置

```yaml
profiles:
  error:
    path: /404.html
    image: https://example.com/404.svg
    comments:
      enabled: false
      title: null
      id: null
      provider: null
      options: {}
    active_menu: post
    leftbar:
      widgets: [recent]
    rightbar:
      widgets: []
```

- `profiles.error.path` 决定生成路径。
- `active_menu` 与三个 Region 对象决定 Shell 布局。
- `profiles.error.image` 提供可空插图；设为 `null` 时不渲染图片。
- `profiles.error.comments.enabled` 默认为 `false`；设为 `true` 后继承全局评论 Provider。
- `title/id/provider/options` 可单独覆盖错误页的评论标题、线程、Provider 及其参数。

评论模型与 Runtime Manifest 使用同一份 `profiles.error.comments` 覆盖；禁用时不输出评论容器。404 canonical 由 head 层明确跳过，`robots: none` 保持 Hexo 页面字段语义。

## 本地化

模板通过 `__()` 消费 `page.error.what`、`page.error.why` 和 `page.error.action`，站点无需配置这些界面文案。

## 参考源码

- [layout/404.ejs](../../../layout/404.ejs)
- [_config.yml](../../../_config.yml)（`profiles.error`）
- [评论系统](../07-外部集成/comment-systems.md)
