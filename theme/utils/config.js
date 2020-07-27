/**
 * 初始化每个文档的配置项
 * @returns {object}
 */
export function initPage ({
  title = '',
  category = '',
  subCategory = '',
  tags = [],
  publish = true,
  createTime = new Date('2012-1-1'),
  updateTime = new Date('2012-1-1'),
}) {
  const obj = {}
  obj.title = title
  obj.category = category
  obj.subCategory = subCategory
  obj.tags = tags
  obj.publish = publish
  obj.createTime = createTime
  obj.updateTime = updateTime

  return obj
}