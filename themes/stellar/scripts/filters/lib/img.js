'use strict';

const { enrichImages } = require('../../lib/image-metadata');
const { mapImageTags } = require('../../lib/html-images');
const { processImgTag } = require('./img_lazyload');
const { addImageError, imageErrorHandler } = require('./img_onerror');

/**
 * 为缺少 alt 属性的 <img> 补上空 alt，标记为装饰性图片。
 *
 * 省略 alt 会让辅助技术退化为朗读图片 URL，也不满足 WCAG 2.1 SC 1.1.1
 * （非文本内容）。已有 alt 的标签保持原值不变。
 */
function ensureAltAttribute(imgTag) {
  if (/\balt\s*=/i.test(imgTag)) {
    return imgTag;
  }
  const selfClosing = /\/>$/.test(imgTag);
  const inner = imgTag.slice(4, selfClosing ? imgTag.length - 2 : imgTag.length - 1);
  return `<img alt=""${inner}${selfClosing ? "/>" : ">"}`;
}

/**
 * 对整篇 HTML 批量补 alt；只变换真实 <img> 标签，其余 HTML 原文保持不变。
 */
function ensureAlt(htmlContent) {
  if (typeof htmlContent !== 'string' || !/<img/i.test(htmlContent)) {
    return htmlContent;
  }
  return mapImageTags(htmlContent, ensureAltAttribute);
}

module.exports.processSite = function processSite(htmlContent, locals) {
  if (typeof htmlContent !== 'string' || !/<img/i.test(htmlContent)) {
    return htmlContent;
  }
  const handler = imageErrorHandler(this);
  const images = mapImageTags(htmlContent, imgTag => ensureAltAttribute(addImageError(processImgTag(imgTag), handler)));
  return enrichImages(images, this, locals);
};

module.exports.ensureAltAttribute = ensureAltAttribute;
module.exports.ensureAlt = ensureAlt;
