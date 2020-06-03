<template>
  <div class="sidebar-item">
    <template v-for="item in routes">
      <!-- 二级导航且只有一个菜单 -->
      <router-link
        v-if="item.children && hasOneShowingChildren(item.children)
        && !item.children[0].children"
        :to="item.path + '/' + item.children[0].path"
        :key="item.children[0].name">
        <el-menu-item :index="item.path + '/' + item.children[0].path">
          <q-font-icon v-if="item.children[0].icon" :prefix="item.children[0].prefix" :name="item.children[0].icon"></q-font-icon>
          <span v-if="item.children[0].meta && item.children[0].meta.title" slot="title">
            {{ item.children[0].meta.title }}
          </span>
        </el-menu-item>
      </router-link>

      <!-- 多个子导航菜单 -->
      <el-submenu v-else :index="item.name || item.path"
        :key="item.name">
        <template slot="title">
          <q-font-icon v-if="item.icon" :prefix="item.prefix" :name="item.icon"></q-font-icon>
          <span v-if="item.meta && item.meta.title" slot="title">
            {{ item.meta.title }}
          </span>
        </template>

        <template v-for="child in item.children">
          <sidebar-item
            v-if="!child.hidden && child.children && child.children.length"
            :routes="[child]"
            :key="child.path">
          </sidebar-item>

          <router-link v-else
            :to="item.path + '/' + child.path" :key="child.name">
            <q-font-icon v-if="child.icon" :prefix="child.prefix" :name="child.icon"></q-font-icon>
            <span v-if="child.meta && child.meta.title" slot="title">
              {{ child.meta.title }}
            </span>
          </router-link>
        </template>
      </el-submenu>
    </template>
  </div>
</template>
<script>
export default {
  name: 'sidebarItem',
  props: {
    routes: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    hasOneShowingChildren (children) {
      const showingChildren = children.filter(item => {
        return !item.hidden
      })
      if (showingChildren.length === 1) {
        return true
      }
      return false
    }
  }
}
</script>
<style lang="less" scoped>
.sidebar-item {
  .el-menu-item {
    i {
      color: #fff;
    }
    span {
      margin-left: 5px;
    }
  }
}
</style>
