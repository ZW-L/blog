function randomDate () {
  const base = 1483200000000
  // 从 2017-1-1 起，1300 天内的日期
  const date = base + Math.floor(Math.random() * 1200) * 1000 * 60 * 60 * 24
  return new Date(date).getTime()
}

