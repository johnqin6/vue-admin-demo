<template>
  <el-tooltip effect="dark" placement="bottom">
    <div slot="content">
      <a :href="url" class="link" target="_blank">转到 Github</a>
    </div>
    <el-button class="btn-text can-hover" type="text" @click="handleClick">
      <i class="iconfont icon-github font_20"></i>
    </el-button>
  </el-tooltip>
</template>
<script>
export default {
  name: 'QGithub',
  data () {
    return {
      url: ''
    }
  },
  methods: {
    handleClick () {
      window.open(this.url)
    }
  }
}
</script>
<style scoped>
</style>
