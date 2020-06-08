import { urlParam2Obj } from '@/utils/util'

const userMap = {
  admin: {
    code: 0,
    roles: ['admin'],
    token: 'admin',
    introduction: '超级管理员',
    avatar: '../assets/logo.png',
    name: 'Super Admin'
  },
  editor: {
    code: 0,
    roles: ['editor'],
    token: 'editor',
    introduction: '普通用户',
    avatar: '../assets/logo.png',
    name: 'Normal Editor'
  }
}

export default {
  loginByUsername: config => {
    const { username } = JSON.parse(config.body)
    return userMap[username]
  },
  getUserInfo: config => {
    // console.log(config)
    const { token } = urlParam2Obj(config.url)
    if (userMap[token]) {
      return userMap[token]
    } else {
      return false
    }
  },
  logout: () => {
    return {
      code: 0,
      Message: 'success'
    }
  }
}
