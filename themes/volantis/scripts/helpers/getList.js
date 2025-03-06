// yml string to list
// yml 太烂了

// 注册 getList 辅助函数，用于将输入转换为列表
hexo.extend.helper.register('getList', function (list) {
  // 如果输入为空，则返回空数组
  if (!list) return [];
  // 如果输入是字符串，则将其包裹在数组中返回
  if (typeof list === "string") {
    return [list];
  }
  // 否则，将输入解构为数组返回
  return [...list];
});