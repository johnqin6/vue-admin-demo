export default {
  language: state => state.app.language,
  device: state => state.app.device,
  name: state => state.user.name,
  token: state => state.user.token,
  avatar: state => state.user.token,
  roles: state => state.user.roles,
  browserHeaderTitle: state => state.user.browserHeaderTitle,
  sidebar: state => state.app.sidebar,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  website: state => state.common.website,
  isLock: state => state.user.isLock,
  lockPassword: state => state.user.lockPassword,
  isFullScreen: state => state.fullScreen.isFullScreen,
  errorLogs: state => state.errorLog.logs
}
