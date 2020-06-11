<template>
  <div class="scroll-container" ref="scrollContainer"
    @wheel.prevent="onScroll"
    >
    <div class="scroll-wrapper" ref="scrollWrapper" :style="{ left: left + 'px'}">
      <slot></slot>
    </div>
  </div>
</template>
<script>
const padding = 15

export default {
  name: 'qScrollPane',
  data () {
    return {
      left: 0
    }
  },
  methods: {
    onScroll (e) {
      const eventDelata = e.wheelDelta || -e.deltaY * 3
      const $container = this.$refs.scrollContainer
      const $containerWidth = $container.offsetWidth
      const $wrapper = this.$refs.scrollWrapper
      const $wrapperWidth = $wrapper.offsetWidth

      if (eventDelata > 0) {
        this.left = Math.min(0, this.left + eventDelata)
      } else {
        if ($containerWidth - padding < $wrapperWidth) {
          if (this.left >= -($wrapperWidth - $containerWidth + padding)) {
            this.left = Math.max(this.left + eventDelata, $containerWidth - $wrapperWidth - padding)
          }
        } else {
          this.left = 0
        }
      }
    },
    moveToTarget (target) {
      const container = this.$refs.scrollContainer
      const containerWidth = container.offsetWidth
      const targetLeft = target.offsetLeft
      const targetWidth = target.offsetWidth

      if (targetLeft < -this.left) {
        this.left = -targetLeft + padding
      } else if (
        targetLeft + padding > -this.left && targetLeft + targetWidth < -this.left + containerWidth - padding
      ) {

      } else {
        this.left = -(targetLeft - (containerWidth - targetWidth) + padding)
      }
    }
  }
}
</script>
<style lang="less" scoped>
.scroll-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  .scroll-wrapper {
    position: absolute;
  }
}
</style>
