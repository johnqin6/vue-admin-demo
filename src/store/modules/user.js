import { setStore, getStore, removeStore } from '@/utils/store'
const user = {
  state: {
    name: '',
    avatar: '',
    isLock: getStore({
      name: 'isLock'
    }) || false,
    lockPassword: getStore({
      name: 'lockPassword'
    }) || ''
  },
  mutations: {
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_LOCK: (state, action) => {
      state.isLock = true
      setStore({
        name: 'isLock',
        content: state.isLock,
        type: 'session'
      })
    },
    SET_LOCK_PASSWD: (state, lockPassword) => {
      state.lockPassword = lockPassword
      setStore({
        name: 'lockPassword',
        content: state.lockPassword,
        type: 'session'
      })
    },
    CLEAR_LOCK: (state, action) => {
      state.isLock = false
      state.lockPassword = ''
      removeStore({
        name: 'lockPassword'
      })
      removeStore({
        name: 'isLock'
      })
    }
  }
}

export default user
