<template>
  <div class="q-icon" @click="click">
    <svg
      :width="size"
      :height="size"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      aria-hidden="true"
      class="svg-icon"
    >
      <use :xlink:href="'#' + name" :fill="color" />
    </svg>
  </div>
</template>
<script>
export default {
  name: 'qSvgIcon',
  props: {
    name: String,
    size: {
      type: [Number, String],
      default: 14
    },
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
<style scoped>
.q-icon {
  display: inline-block;
}
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
