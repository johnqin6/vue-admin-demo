/**
 * 设置多语言标题
 * @param {string} title
 * @retrun title
 */
export function generateTitle (title) {
  console.log(this)
  // $t :this method from vue-i18n, inject in @/lang/index.js
  const hasKey = this.$te('route.' + title)
  const translatedTitle = this.$t('route.' + title)
  if (hasKey) {
    return translatedTitle
  }
  return title
}

/**
 * 设置主题颜色
 * @param {string} color
 * @retrun color
 */
export function generateSkinColor (color) {
  // $t :this method from vue-i18n, inject in @/lang/index.js
  const hasKey = this.$te('skin.' + color)
  const translatedColor = this.$t('skin.' + color)
  if (hasKey) {
    return translatedColor
  }
  return color
}
