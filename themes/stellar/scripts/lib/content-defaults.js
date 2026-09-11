/* global hexo */
"use strict";

const {
  ConfigSchemaError,
  isPlainObject,
  valueType
} = require("./config-schema");

function requireContentConfig(stellarConfig, source = "_config.stellar.yml") {
  const article = stellarConfig?.article;
  const notebook = stellarConfig?.profiles?.notebook;
  if (isPlainObject(article) && isPlainObject(notebook)) {
    return { article, notebook };
  }
  const path = isPlainObject(article) ? "stellarConfig.profiles.notebook" : "stellarConfig.article";
  const actual = isPlainObject(article) ? notebook : article;
  throw new ConfigSchemaError([Object.freeze({
    code: "invalid_type",
    source,
    path,
    actualType: valueType(actual),
    expected: "normalized content defaults object",
    migration: null
  })]);
}

function articlePresentationDefaults(content) {
  return {
    style: content.article.style,
    paragraphIndent: content.article.paragraphIndent
  };
}

function articleFooterDefaults(content) {
  return {
    references: [],
    license: content.article.footer.license,
    share: content.article.footer.share,
    showTags: content.article.footer.showTags
  };
}

function collectionFooterDefaults(content) {
  return {
    ...articleFooterDefaults(content),
    share: []
  };
}

module.exports = {
  articleFooterDefaults,
  articlePresentationDefaults,
  collectionFooterDefaults,
  requireContentConfig
};
