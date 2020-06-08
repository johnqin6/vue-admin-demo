<!--头部导航 -->
<template>
  <el-menu class="nav-bar">
    <div class="nav-left">
      <open-side-btn></open-side-btn>
      <q-breadcrumb></q-breadcrumb>
    </div>
    <div class="nav-right"></div>
  </el-menu>
</template>
<script>
import openSideBtn from './openSideBtn'

export default {
  components: {
    openSideBtn
  }
}
</script>
<style lang="less" scoped>
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 10px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, .05);
  transition: all .3s;
  .nav-left {
    flex: 1;
    display: flex;
    align-items: center;
  }
}
</style>
