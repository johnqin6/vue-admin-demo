<template>
  <div class="layout" :class="classObj">
    <sidebar class="sidebar-container"></sidebar>
    <div class="app-container">
      <nav-bar></nav-bar>
      <app-main></app-main>
    </div>
  </div>
</template>
<script>
import { appMain, sidebar, navBar } from './components'
export default {
  name: 'layout',
  components: {
    appMain,
    sidebar,
    navBar
  },
  computed: {
    sidebar () {
      return this.$store.state.app.sidebar
    },
    classObj () {
      return {
        hideSidebar: !this.sidebar.opened
      }
    }
  }
}
</script>
