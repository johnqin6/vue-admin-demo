<template>
  <svg :class="svgClass" aria-hidden="true" @click="click">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<script>
export default {
  name: 'qSvgIcon',
  props: {
    name: {
      type: String,
      required: true
    },
    className: {
      type: String
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.name}`
    },
    svgClass () {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
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
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
