<template>
  <!-- 仪表盘 -->
  <div class="dahboard">
    <q-github-corner></q-github-corner>
    <div class="item">
      <h4>数据展示</h4>
      <q-data-display :option="option"></q-data-display>
    </div>
    <div class="item">
      <h4>选项卡展示</h4>
      <q-data-tabs :option="easyDataOption"></q-data-tabs>
    </div>
    <div class="item">
      <h4>卡片展示</h4>
      <q-data-card :option="easyDataOption0"></q-data-card>
    </div>
    <div class="item">
      <h4>带数字的展示</h4>
      <q-data-icons :option="easyDataOption1"></q-data-icons>
    </div>
    <div class="item">
      <h4>简易展示</h4>
      <q-data-icons :option="easyDataOption2"></q-data-icons>
    </div>
  </div>
</template>
<script>
import { easyDataOption, easyDataOption0, easyDataOption1, easyDataOption2 } from '@/datas/data'
export default {
  name: 'dahboard',
  data () {
    return {
      easyDataOption,
      easyDataOption0,
      easyDataOption1,
      easyDataOption2,
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
