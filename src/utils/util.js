
/**
 * 动态插入css
 * @param {string} url
 */
export const loadStyle = url => {
  const link = document.createElement('link')
  link.type = 'text/css'
  link.rel = 'stylesheet'
  link.href = url
  const head = document.getElementsByTagName('head')[0]
  head.appendChild(link)
}

/**
 * 设置浏览器头部标题
 * @param {string} title
 */
export const setTitile = title => {
  title = title ? `${title}` : 'VueAdmin'
  window.document.title = title
}
