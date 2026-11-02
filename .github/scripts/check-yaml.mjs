/**
 * 严格校验仓库内所有 YAML 文件。
 *
 * js-yaml 4 对重复映射键直接抛异常，而 js-yaml 3 会静默取最后一个值。
 * 本地若用旧版 js-yaml 构建，合并冲突残留的重复键会被悄悄吞掉，
 * 直到 CI 用新版 js-yaml 才暴露。统一用仓库锁定的 js-yaml 提前拦截。
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const IGNORED_DIRS = new Set(["node_modules", ".git", "public", "db.json"]);
const SCAN_EXT = new Set([".yml", ".yaml"]);

function collect(dir, found = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (IGNORED_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collect(full, found);
    } else if (SCAN_EXT.has(path.extname(entry.name))) {
      found.push(full);
    }
  }
  return found;
}

const files = collect(root);
const failures = [];

for (const file of files) {
  const relative = path.relative(root, file);
  try {
    yaml.load(fs.readFileSync(file, "utf8"), { filename: file });
  } catch (error) {
    const line = error.mark?.line != null ? error.mark.line + 1 : "未知";
    failures.push(`${relative}:${line} ${error.message}`);
  }
}

if (failures.length > 0) {
  console.error(`YAML 校验失败（${failures.length}/${files.length}）：`);
  for (const failure of failures) console.error(`  - ${failure}`);
  process.exit(1);
}

console.log(`YAML 校验通过：${files.length} 个文件`);
