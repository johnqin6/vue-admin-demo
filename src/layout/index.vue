<template>
  <div class="layout" :class="classObj">
    <div v-if="device === 'mobile' && sidebar.opened"
      class="drawer-bg" @click="clickOutside"></div>
    <sidebar class="sidebar-container"></sidebar>
    <div class="app-container">
      <nav-bar></nav-bar>
      <app-main></app-main>
    </div>
  </div>
</template>
<script>
import { appMain, sidebar, navBar } from './components'
import ResizeMixin from '@/mixins/resize'

export default {
  name: 'layout',
  mixins: [ResizeMixin],
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
        hideSidebar: !this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    clickOutside () {
      this.$store.dispatch('CloseSideBar', { withoutAnimation: false })
    }
  }
}
</script>
<style scoped>
.drawer-bg {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: .3;
  z-index: 999;
}
</style>
