<template>
  <!-- 仪表盘 -->
  <div class="dahboard">
    <q-github-corner></q-github-corner>
    <div class="item">
      <h4>数据展示</h4>
      <q-data-display :option="option"></q-data-display>
    </div>
  </div>
</template>
<script>
export default {
  name: 'dahboard',
  data () {
    return {
      option: {
        span: 8,
        color: '#15a0ff',
        data: [
          { count: 1000, title: '日活跃数' },
          { count: 3000, title: '月活跃数' },
          { count: 20000, title: '年活跃数' }
        ]
      }
    }
  }
}
</script>
<style lang="less" scoped>
.item {
  margin-bottom: 16px;
}
</style>
