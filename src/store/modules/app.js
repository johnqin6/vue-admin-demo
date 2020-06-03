// app相关(导航菜单状态)
const app = {
  state: {
    sidebar: {
      opened: sessionStorage.getItem('sidebarIsOpened') === 'ture' || true
    }
  },
  mutations: {
    TOGGLE_SIDEBAR: state => { // 切换侧边栏菜单状态
      state.sidebar.opened = !state.sidebar.opened
      if (state.sidebar.opened) {
        sessionStorage.setItem('sidebarIsOpened', true)
      } else {
        sessionStorage.setItem('sidebarIsOpened', false)
      }
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    }
  }
}
export default app
