/**
 * 以 xxxx-x-x 的格式返回日期字符串
 * @param {date} date
 * @returns {string} 
 */
export const formatDate = date => {
  const d = new Date(date)
  const year = d.getFullYear()
  const month = d.getMonth() + 1
  const day = d.getDate()

  return `${year}-${month}-${day}`
}

/**
 * 从 2017-1-1 起，1300 天内的日期毫秒数
 * @returns {number}
 */
export const randomDate = () => {
  const base = 1483200000000
  const date = base + Math.floor(Math.random() * 1200) * 1000 * 60 * 60 * 24
  return new Date(date).getTime()
}