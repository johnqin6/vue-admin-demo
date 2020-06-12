<!--数字滚动组件二次封装-->
<template>
  <span></span>
</template>
<script>
import { CountUp } from 'countup.js'

export default {
  name: 'qCountUp',
  props: {
    start: {
      type: Number,
      default: 0
    },
    end: {
      type: Number,
      required: true,
      default: 0
    },
    decimals: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 2
    },
    options: {
      type: Object,
      default () {
        return {}
      }
    },
    callback: {
      type: Function,
      default: () => {}
    }
  },
  data () {
    return {
      c: null
    }
  },
  watch: {
    end (newVal) {
      if (this.c && this.c.update) {
        this.c.update(newVal)
      }
    }
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
    this.c = null
  },
  methods: {
    init () {
      if (!this.c) {
        this.c = new CountUp(
          this.$el,
          this.end
          // this.decimals,
          // this.duration,
          // this.options
        )
        this.c.start(() => {
          this.callback(this.c)
        })
      }
    }
  },
  start (callback) {
    if (this.c && this.c.start) {
      this.c.start(() => {
        callback && callback(this.c)
      })
    }
  },
  pauseResume () {
    if (this.c && this.c.pauseResume) {
      this.c.pauseResume()
    }
  },
  reset () {
    if (this.c && this.c.reset) {
      this.c.reset()
    }
  },
  update (newEndVal) {
    if (this.c && this.c.update) {
      this.c.update(newEndVal)
    }
  }
}
</script>
<style scoped>
</style>
