import themeArray from './themeArray'

export const global = {
  /**
   * 切换主题
   * @param {*} themeVal
   */
  changeTheme (themeVal) {
    const cssArray = themeArray
    for (let i = 0, len = cssArray.length; i < len; i++) {
      const itemPath = 'static/theme/' + themeVal.toLowerCase() + '/' + cssArray[i].toLowerCase() + '.css'

      loadCss(itemPath)
    }
    localStorage.setItem('themeValue', themeVal)

    function loadCss (path) {
      const head = document.getElementsByTagName('head')[0]
      const link = document.createElement('link')
      link.href = path
      link.rel = 'stylesheet'
      link.type = 'text/css'
      head.appendChild(link)
    }
  }
}
