<!-- 切换侧边栏图标组件-->
<template>
  <div class="open-side-btn" @click="toggleOpened">
    <q-font-icon :name="iconName" size="30"></q-font-icon>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
const OPENED = 's-fold'
const UNOPEND = 's-unfold'

export default {
  computed: {
    ...mapGetters(['sidebar']),
    iconName () {
      return this.sidebar.opened ? OPENED : UNOPEND
    }
  },
  methods: {
    toggleOpened () {
      this.$store.dispatch('ToggleSideBar')
    }
  }
}
</script>
<style scoped>
</style>
