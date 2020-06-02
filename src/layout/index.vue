<template>
  <div class="layout">
    <sidebar class="sidebar-container"></sidebar>
    <div class="app-container">
      <app-main></app-main>
    </div>
  </div>
</template>
<script>
import { appMain, sidebar } from './components'
export default {
  name: 'layout',
  components: {
    appMain,
    sidebar
  }
}
</script>
<style lang="less" scoped>
.layout {
  display: flex;
  .sidebar-container {
    width: 200px;
    height: 100%;
    background-color: #ccc;
  }
}
</style>
