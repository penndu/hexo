#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { assertReleaseVersion, releaseNotes, validateVersionFiles } = require('../release');

function prepareReleaseMetadata(root) {
  const { version } = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
  assertReleaseVersion(version);
  validateVersionFiles(root);
  const notes = releaseNotes(fs.readFileSync(path.join(root, 'CHANGELOG.md'), 'utf8'), version);
  if (!notes) throw new Error(`CHANGELOG.md 中缺少版本 ${version} 的非空章节`);
  const npmTag = version.includes('-rc.') ? 'rc' : 'latest';
  return { version, notes, npmTag };
}

if (require.main === module) {
  const { version, notes, npmTag } = prepareReleaseMetadata(path.resolve(__dirname, '..'));
  fs.writeFileSync(process.env.RELEASE_NOTES_FILE, `${notes}\n`);
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `version=${version}\n`);
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `npm_tag=${npmTag}\n`);
}

module.exports = { prepareReleaseMetadata };
