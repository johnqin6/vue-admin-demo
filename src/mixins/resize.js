import store from '@/store'

const { body } = document
const WIDTH = 900
const RATIO = 3

export default {
  computed: {
    device () {
      return this.$store.state.app.device
    },
    sidebar () {
      return this.$store.state.app.sidebar
    }
  },
  watch: {
    $route (route) {
      if (this.device === 'mobile' && this.sidebar.opened) {
        store.dispatch('CloseSideBar', { withoutAnimation: false })
      }
    }
  },
  beforeMount () {
    window.addEventListener('resize', this.resize)
  },
  methods: {
    isMobile () {
      const rect = body.getBoundingClientRect()
      return rect.width - RATIO < WIDTH
    },
    resize () {
      if (!document.hidden) {
        const isMobile = this.isMobile()
        store.dispatch('ToggleDevice', isMobile ? 'mobile' : 'desktop')

        if (isMobile) {
          store.dispatch('CloseSideBar', { withoutAnimation: true })
        }
      }
    }
  }
}
