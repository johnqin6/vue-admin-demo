import { isEmpty } from '@/utils/validate'

/**
 * 存储localStorage
 * @param {*} params
 */
export const setStore = (params) => {
  const { name, content, type } = params
  const obj = {
    dataType: typeof (content),
    content: content,
    type: type,
    dateTime: new Date().getTime()
  }
  if (type) window.sessionStorage.setItem(name, JSON.stringify(obj))
  else window.localStorage.setItem(name, JSON.stringify(obj))
}

/**
 * 获取存储的内容
 * @param {*} params
 */
export const getStore = params => {
  const { name } = params
  let obj = {}
  let content
  obj = window.localStorage.getItem(name)
  if (isEmpty(obj)) obj = window.sessionStorage.getItem(name)
  if (isEmpty(obj)) return
  obj = JSON.parse(obj)
  if (obj.dataType === 'string') {
    content = obj.content
  } else if (obj.dataType === 'number') {
    content = Number(obj.content)
  } else if (obj.dataType === 'boolean') {
    /* eslint-disable */
    content = eval(obj.content)
  } else if (obj.dataType === 'object') {
    content = obj.content
  }
  return content
}

/**
 * 删除指定存储
 * @param {*} params 
 */
export const removeStore = params => {
  const { name } = params
  window.localStorage.removeItem(name)
  window.sessionStorage.removeItem(name)
}

/**
 * 获取全部本地存储信息
 * @param {*} params 
 */
export const getAllStore = params => {
  const list = []
  const { type } = params
  for (let i = 1; i <= window.sessionStorage.length; i++) {
    if (type) {
      list.push({
        name: window.sessionStorage.key(i),
        content: getStore({
          name: window.sessionStorage.key(i),
          type: 'session'
        })
      })
    } else {
      list.push({
        name: window.localStorage.key(i),
        content: getStore({
          name: window.sessionStorage.key(i)
        })
      })
    }
  }

  return list
}

/**
 * 清除全部本地存储
 * @param {*} params 
 */
export const clearStore = params => {
  const { type } = params
  if (type) {
    window.sessionStorage.clear()
    return
  }
  window.localStorage.clear()
}
