export default {
  name: state => state.user.name,
  sidebar: state => state.app.sidebar,
  permission_routers: state => state.permission.routers,
  website: state => state.common.website,
  isLock: state => state.user.isLock,
  lockPassword: state => state.user.lockPassword
}
