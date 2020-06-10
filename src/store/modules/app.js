// app相关(导航菜单状态)
import { getStore, setStore } from '@/utils/store'
const app = {
  state: {
    language: getStore('language') || 'zh',
    sidebar: {
      opened: getStore('sidebarIsOpened') === 'ture' || true,
      withoutAnimation: false
    },
    device: 'desktop'
  },
  mutations: {
    TOGGLE_SIDEBAR: state => { // 切换侧边栏菜单状态
      state.sidebar.opened = !state.sidebar.opened
      if (state.sidebar.opened) {
        setStore('sidebarIsOpened', true)
      } else {
        setStore('sidebarIsOpened', false)
      }
    },
    // 中英文切换
    SET_LANGUAGE: (state, language) => {
      state.language = language
      setStore('language', language)
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      setStore('sidebarIsOpened', false)
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    },
    SetLanguage ({ commit }, language) {
      commit('SET_LANGUAGE', language)
    },
    CloseSideBar ({ commit }, { withoutAnimation }) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    // 切换设备
    ToggleDevice ({ commit }, device) {
      commit('TOGGLE_DEVICE', device)
    }
  }
}
export default app
