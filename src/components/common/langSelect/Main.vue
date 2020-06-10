<template>
  <el-dropdown trigger="click" @command="setLanguage" class="international">
    <div>
      <i class="iconfont icon-ziyuan international-icon"></i>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="zh" :disabled="language === 'zh'">中文</el-dropdown-item>
      <el-dropdown-item command="en" :disabled="language === 'en'">English</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
export default {
  name: 'qLangSelect',
  computed: {
    language () {
      return this.$store.getters.language
    }
  },
  methods: {
    setLanguage (lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('SetLanguage', lang)
      this.$message({
        message: 'switch language success',
        type: 'success'
      })
    }
  }
}
</script>
<style scoped>
.international-icon {
  font-size: 22px;
  cursor: pointer;
}
.el-dropdown {
  color: #5a5e66;
}
</style>
