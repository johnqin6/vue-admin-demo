<template>
  <span>
    <el-tooltip effect="dark" content="锁屏" placement="bottom">
      <i class="iconfont icon-suoping" @click="handleLock"></i>
    </el-tooltip>
    <el-dialog title="设置锁屏密码">

    </el-dialog>
  </span>
</template>
<script>
export default {
  name: 'qTopLock',
  data () {
    return {
      isVisible: false,
      form: {
        password: ''
      }
    }
  },
  methods: {
    handleLock () {

    }
  }
}
</script>
<style scoped>
</style>
