## 背景

dusays.com 上线 894 篇文章、900+ 页面后，实测发现一批长期存在的 SEO 与性能问题。本 PR 做站点级（配置层）修正，主题层改动在配套 PR `penndu/hexo-theme-stellar#feature/seo-accessibility-fixes`。

## 审计发现的问题

| # | 问题 | 实测数据 | 影响 |
|---|---|---|---|
| 1 | **全站无 canonical** | 首页/文章/归档/分类/标签/about/friends 七类页面全部缺失 | `/posts/891/` 与 `/posts/891/index.html` 等变体重复竞争同一篇文章的权重信号 |
| 2 | **sitemap 混入 197 个薄标签页** | 1114 个 URL 里 197 个是 `/tags/xxx/`，绝大多数只有 1 篇文章 | 稀释抓取预算，薄页无独立内容价值 |
| 3 | **sitemap lastmod 全部等于构建日** | 1114 条 lastmod 一律为 `2026-11-01` | 搜索引擎无法据此判断内容新鲜度 |
| 4 | **JSON-LD 的 sameAs 为空数组** | `author.sameAs` / `publisher.sameAs` 均为 `[]` | 实体归属信号缺失 |
| 5 | **归档/分类/标签/404 页在 sitemap 里** | 但主题层已把这三页标记 `noindex,follow` | robots 设定与 sitemap 提交自相矛盾 |
| 6 | **about/friends 无独立 description** | 与首页共用站点简介 | 搜索结果摘要不准确 |
| 7 | **robots.txt 指向 301 后的地址** | 声明 `baidusitemap.xml`，实际已 301 到 `sitemap.xml` | 多一跳，且对已迁移地址重复声明 |

## 本次修改

**`_config.stellar.yml`**
- `canonical.host` 由 `null` 改为 `dusays.com`，`allowed_hosts` 补 `dusays.com` / `www.dusays.com`
- `structured_data.same_as` 填入公开主页（GitHub / Gitea / Mattermost）

**`_config.yml`**
- `sitemap.tags: false` —— 排除薄标签页
- `sitemap.categories: false` —— 分类页同为 `noindex,follow`，与 robots 设定一致
- `updated_option` 由 `mtime` 改为 `date` —— lastmod 反映真实发布日期

**`source/archives|categories|tags/404`**
- front-matter 加 `sitemap: false`

**`source/about|friends/index.md`**
- 补各自的 `description`

**`source/robots.txt`**
- 移除已 301 的 `baidusitemap.xml` 声明，保留 `sitemap.xml`

## 效果验证

本地 `hexo generate` 全量构建（1911 页）后实测：

| 指标 | 改前 | 改后 |
|---|---|---|
| sitemap URL 数 | 1114 | **904** |
| 含薄标签页 | 197 个 | **0** |
| sitemap lastmod | 全部等于构建日 | 反映真实发布日期（如 posts/891 → `2026-10-04`） |
| canonical 覆盖 | 0 | **首页/文章/归档/分类/标签/about/friends 全部覆盖** |
| JSON-LD sameAs | `[]` | 3 个公开主页 |
| about/friends description | 共用站点简介 | 各自独立 |

改后 sitemap 仅保留 894 篇文章 + 10 个可收录独立页（about / friends / 7bu / fcircle / mianze / says / sffw / shuoshuo / yinsi / 首页），与各页 robots 设定完全一致。

## 验证方式

- `rm -rf public db.json && npx hexo generate` 全量构建通过，无报错
- 逐页检查 canonical / description / robots / JSON-LD 输出
- 主题层改动另见配套 PR，本 PR 不改主题代码（仅同步 `themes/stellar/` 下的 vendored 副本）

## 备注

- 本 PR 只改配置与 front-matter，不改任何文章正文，不影响现有 URL 结构
- `canonical` 启用后，`/posts/891/` 与 `/posts/891/index.html` 会统一指向前者；站点现有 rewrite 已将 `/数字/`、`/archives/数字/` 301 到 `/posts/数字/`，方向一致
- 配套的主题 PR 已推 `penndu/hexo-theme-stellar` 的 `feature/seo-accessibility-fixes` 分支，合并后 `themes/stellar/` 的副本需再同步一次
