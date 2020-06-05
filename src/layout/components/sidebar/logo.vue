<template>
  <div class="logo flex_center">
    <transition name="fade">
      <span v-if="isCollapse"
        class="logo_title is-bold"
        :class="{'is-text': !type, 'is-img': type}">
        <template v-if="type">
          <img :src="website.logo" width="40" height="40">
        </template>
        <template v-else>
          {{ website.logo }}
        </template>
      </span>
    </transition>

    <transition-group name="fade">
      <template v-if="!isCollapse">
        <span class="logo_title isbold" key="1">{{website.title}}</span>
        <!-- <span class="logo_subtitle" key="2">{{website.author}}</span> -->
      </template>
    </transition-group>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  props: ['isCollapse'],
  computed: {
    ...mapGetters(['website']),
    type: function (val) {
      return this.website.logo.indexOf('static') !== -1
    }
  }
}
</script>
<style lang="less" scoped>
.logo {
  position: relative;
  height: 50px;
  line-height: 50px;
  background-color: #3a3f51;
  color: #fdfdfd;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  overflow: hidden;
  box-sizing: border-box;
}
.logo_title {
  padding: 0 5px 0 0;
  color: #42b983;
  &.is-bold {
    font-weight: 700;
  }
}
.is-text {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.is-img {
  position: absolute;
  top: 10px;
  left: 10px;
}
.logo_subtitle {
  padding-top: 5px;
  font-size: 16px;
}

.fade-enter-active {
  transition: opacity 2s;
}
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
