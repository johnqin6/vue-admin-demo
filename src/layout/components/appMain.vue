<template>
  <div class="app-main main-bg">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
.app-main {
  position: relative;
  padding: 20px;
}
</style>
