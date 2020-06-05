<!-- 侧边栏导航 -->
<template>
  <!--
    el-scrollbar 自定义滚动组件 是element隐藏的组件，文档没有，但可以直接使用
    可传递的相关属性：
    - native: Boolean, true: 不显示el的bar, false: 显示el模拟的滚动条
    - wrapStyle: {}, 外层盒子的样式
    - wrapClass: {}, 外层盒子的class
    - viewClass: {}, 内层盒子的class
    - viewStyle: {}, 内层盒子的样式
    - noresize: Boolean, 如果 container尺寸不会发生变化，最好设置他来优化性能
    - tag: String, 所用标签，默认是div
  -->
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <logo :isCollapse="isCollapse"></logo>
    <el-menu
      mode="vertical"
      default-active="$route.path"
      :show-timeout="200"
      background-color="#3a3f51"
      text-color="#fff"
      active-text-color="#42b983"
      :collapse="isCollapse">
      <sidebar-item
        :routes="permission_routers"
      ></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import Logo from './logo'
export default {
  components: {
    SidebarItem,
    Logo
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['sidebar', 'permission_routers']),
    isCollapse () {
      return !this.sidebar.opened
    }
  },
  mounted () {
    console.log(this.$route.path)
  },
  methods: {
  }
}
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
