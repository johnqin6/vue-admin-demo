<template>
  <el-button v-bind="$attrs">
    <i>{{icon}}</i>
  </el-button>
</template>
<script>
export default {
  name: 'qButton',
  props: {
    icon: String
  }
}
</script>
