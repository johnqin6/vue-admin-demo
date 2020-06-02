<template>
  <i class="icon"
    :class="[
      prefix,
      prefix + '-' + name,
      name
    ]"
    :style="{'fontSize': size + 'px', 'color': color }"
    @click="click"
  ></i>
</template>
<script>
export default {
  name: 'qFontIcon',
  props: {
    prefix: { // element自带icon图标，可不加前缀，其他图标库需视情况要不要加前缀
      type: String,
      default: 'el-icon'
    },
    name: String,
    size: [Number, String],
    color: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    click (e) {
      if (!this.disabled) this.$emit('click', e)
    }
  }
}
</script>
