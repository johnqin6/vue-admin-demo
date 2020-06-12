<template>
  <div class="data-display">
    <el-row :span="24">
      <el-col v-for="(item, index) in data" :key="index" :span="span">
        <div class="item" :style="{ color: color }">
          <h5 class="count">
            <q-count-up :start="14" :end="item.count"></q-count-up>
          </h5>
          <span class="splitLine"></span>
          <p class="title">{{item.title}}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>

export default {
  name: 'qDataDisplay',
  props: {
    option: {
      option: {
        type: Object,
        default: () => {}
      }
    }
  },
  data () {
    return {
      span: this.option.span || 8,
      data: this.option.data,
      color: this.option.color || 'rgb(63, 161, 255)'
    }
  }
}
</script>
<style lang="less" scoped>
.data-display {
  .item {
    display: flex;
    align-self: center;
    flex-direction: column;
    margin: 5px 0;
    text-align: center;
  }
  .count {
    margin: 8px 0;
    font-weight: 700;
    font-size: 32px;
    color: #15a0ff;
  }
  .title {
    color: #999;
  }
  .splitLine {
    display: block;
    width: 24px;
    height: 1px;
    margin: 0 auto;
    background-color: #9b9b9b;
  }
}
</style>
