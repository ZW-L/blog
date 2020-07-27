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

/**
 * 1.以 _ 开头的文件夹内的所有文档将会被忽略
 * 2.为文档添加默认的 frontmatter
 * 3.过滤不发布的文档
 * @param {array} pages
 * @returns {array}
 */
export const publishPost = pages => {
  return pages
    .filter(v => v.path[1] !== '_')
    .map(v => {
      const temp = initPage(v.frontmatter)
      v.frontmatter = temp
      return v
    })
    .filter(v => v.frontmatter.publish)
}

/**
 * 返回所有博文的标签的对象数组: [{ name: 'js', count: '10' }, ..]
 * @param {array} post 
 * @returns {array}
 */

export const getTags = post => {
  const ret = {}
  for (const p of post) {
    const { tags } = p.frontmatter
    for (const t of tags) {
      if (!ret.hasOwnProperty(t)) {
        ret[t] = 0
      }

      ret[t] += 1
    }
  }

  return ret
}
/* export const getTags = post => {
  return [...post.reduce((tags, current) => {
    for (const tag of current.frontmatter.tags) {
      tags.add(tag)
    }
    return tags
  }, new Set())]
} */


export const getPostOfTag = (post, tag) => {
  return post.filter(v => v.frontmatter.tags.includes(tag))
}
