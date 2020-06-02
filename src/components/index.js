import Vue from 'vue'

// 自动扫描common文件夹下的.js结尾的文件
const componentContext = require.context('./common', true, /\.js$/)

const components = []
componentContext.keys().forEach(context => {
  const config = componentContext(context)

  if (config.default) { // 添加单个组件进components数组
    components.push(config.default)
  } else { // 添加多个组件进components数组
    Object.values(config).forEach(component => {
      components.push(component)
    })
  }
})

// 遍历注册全局组件
components.forEach(component => {
  Vue.component(component.name, component)
})
