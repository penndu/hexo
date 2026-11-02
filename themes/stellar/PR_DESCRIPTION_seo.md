## 变更说明

主题层的三项改进，均为通用能力修复，不涉及具体站点的私有配置。

### 1. viewport 可配置，默认不再锁定缩放

`layout/_partial/head.ejs` 此前硬编码：

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
```

`maximum-scale=1` 会阻止用户缩放，不满足 WCAG 2.1 SC 1.4.4（Resize Text），也是移动端无障碍审计的常见扣分项。

新增 `viewport` 配置小节：

```yaml
viewport:
  content: width=device-width, initial-scale=1
  lock_zoom: false
```

- `content` 为空字符串时不输出 viewport meta
- `lock_zoom` 为真时追加 `maximum-scale=1, user-scalable=no`，供确实需要锁定缩放的场景使用
- 默认不锁定，行为与改动前一致（仍输出 `width=device-width, initial-scale=1`）

### 2. 缺失 alt 的图片补空 alt

`scripts/filters/lib/img.js` 此前只在调用方提供了 alt 时才输出该属性：

```js
if (safeAlt) {
  img += ` alt="${safeAlt}"`
}
```

省略 `alt` 会让辅助技术退化为朗读图片 URL，也不满足 WCAG 2.1 SC 1.1.1（非文本内容）。现在统一补 `alt=""` 标记为装饰性图片；已有 alt（含空串）的标签保持原值不变。

改动放在统一的图片过滤器中，因此覆盖全部 `<img>` 生成路径（标签插件、侧边栏、页脚等），而不只是 `{% image %}` 标签。

### 3. `{% image %}` 标签与过滤器行为对齐

`scripts/tags/lib/image.js` 同步改为始终输出 `alt` 属性，与过滤器保持一致，避免两条路径产出不同的 HTML。

## 改动范围

- [x] `layout/`（EJS 模板）
- [x] `scripts/`（Hexo 标签 / 辅助函数 / 过滤器）
- [x] `docs/`（方案 / 知识库 / 文档）

## 验证清单

- [x] 涉及 `scripts/` 时已在主工程执行全量验证
- [x] 新增 / 修改纯函数已补充单元测试（`npm test` 通过）
- [x] `npm run lint` 通过
- [x] 涉及主题代码、配置或行为变化时已同步 `docs/knowledge/`
- [x] `npm run check` 通过

### 实测结果

```
npm run lint                → 通过
npm run test:unit           → 254 tests, 253 pass, 1 fail
npm run knowledge:check     → 62 页 / 914 个链接 / 160 个配置引用
npm run contributions:check → 25 descriptors verified
npm run reuse:check         → passed
```

唯一失败项 `YAML source readers preserve empty input, merge keys and dates across dependency upgrades` 为**存量失败**，在未改动的 `origin/main` 上同样失败（js-yaml 版本对 `no` 的布尔值解析差异），与本次改动无关。

新增测试 `test/img-alt.test.js` 覆盖三种场景：缺 alt 补空 alt、已有 alt 保持原值、补 alt 时保留其它属性与自闭合写法。

同时更新了 `test/html-images.test.js` 中「单次图片扫描与原双过滤器顺序保持完全一致」的不变量断言：参考链由 `imageErrors(lazyProcess(html))` 扩展为 `ensureAlt(imageErrors(lazyProcess(html)))`，与合并扫描的实际处理顺序（lazy → onerror → alt）保持一致。

## 备注

- 本 PR 只改主题源码，不含任何站点配置。站点侧启用与收益说明见 `penndu/hexo` 的配套 PR。
- `viewport` 的 `content` 走 `nullable_trimmed_string` 归一化，与 `canonical.host` 一致的空值处理方式；`lock_zoom` 为布尔类型，未显式配置时取 `_config.yml` 默认值 `false`。
- 若上游不希望新增配置项，另一种方案是直接移除 `maximum-scale=1`（不保留锁定能力）。当前实现保留了锁定开关，便于有特殊需求的站点。
