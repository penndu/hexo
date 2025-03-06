'use strict';

// 注册自定义标签 u，用于包裹文本为 <u> 标签
hexo.extend.tag.register('u', (args) => `<u>${args.join(' ')}</u>`);
// 注册自定义标签 emp，用于包裹文本为 <emp> 标签
hexo.extend.tag.register('emp', (args) => `<emp>${args.join(' ')}</emp>`);
// 注册自定义标签 wavy，用于包裹文本为 <wavy> 标签
hexo.extend.tag.register('wavy', (args) => `<wavy>${args.join(' ')}</wavy>`);
// 注册自定义标签 del，用于包裹文本为 <del> 标签
hexo.extend.tag.register('del', (args) => `<del>${args.join(' ')}</del>`);
// 注册自定义标签 kbd，用于包裹文本为 <kbd> 标签
hexo.extend.tag.register('kbd', (args) => `<kbd>${args.join(' ')}</kbd>`);
// 注册自定义标签 psw，用于包裹文本为 <psw> 标签
hexo.extend.tag.register('psw', (args) => `<psw>${args.join(' ')}</psw>`);