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

