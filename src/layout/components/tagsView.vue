<template>
  <div class="tags-view-container">
    <q-scroll-pane class="tags-view-wrapper" ref="scrollPane">
      <!-- contextmenu: 右键菜单事件 -->
      <router-link ref="tag" class="tags-view-item"
        :class="isActive(tag) ? 'active' : ''"
        :to="tag.path"
        @contextmenu.prevent.native="openMenu(tag, $event)"
        v-for="tag in Array.from(visitedViews)"
        :key="tag.path">
          {{ generateTitle(tag.title)}}
          <span class="el-icon-close" @click.prevent.stop="closeSelectedTag(tag)"></span>
      </router-link>
    </q-scroll-pane>

    <!-- 右键菜单列表 -->
    <ul class="contextmenu" v-show="visible"
      :style="{ left: left + 'px', top: top + 'px'}">
      <li @click="closeSelectedTag(selectedTag)">{{ $t('tagsView.close') }}</li>
      <li @click="closeOthersTags">{{ $t('tagsView.closeOthers') }}</li>
      <li @click="closeAllTags">{{ $t('tagsView.closeAll') }}</li>
    </ul>
  </div>
</template>
<script>
import { generateTitle } from '@/utils/i18n'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      visible: false,
      top: 0,
      left: 0,
      selectedTag: {}
    }
  },
  computed: {
    ...mapGetters(['visitedViews'])
  },
  watch: {
    $route () {
      this.addViewTags()
      this.moveToCurrentTag()
    },
    visible (newVal) {
      if (newVal) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    }
  },
  mounted () {
    this.addViewTags()
  },
  methods: {
    generateTitle,
    generateRoute () {
      if (this.$route.name) {
        return this.$route
      }
      return false
    },
    isActive (route) {
      return route.path === this.$route.path
    },
    // 增加一个视图标签
    addViewTags () {
      const route = this.generateRoute()
      if (!route) {
        return false
      }
      this.$store.dispatch('addVisitedViews', route)
    },
    // 移动当前标签页
    moveToCurrentTag () {
      const tags = this.$refs.tag
      this.$nextTick(() => {
        for (const tag of tags) {
          if (tag.to === this.$route.path) {
            this.$refs.scrollPane.moveToTarget(tag.$el)
            break
          }
        }
      })
    },
    // 关闭选择的标签页
    closeSelectedTag (view) {
      this.$store.dispatch('delVisitedViews', view).then(views => {
        if (this.isActive(view)) {
          const latestView = views.slice(-1)[0]
          if (latestView) {
            this.$router.push(latestView.path)
          } else {
            this.$router.push('/')
          }
        }
      })
    },
    // 关闭其他标签页
    closeOthersTags () {
      this.$router.push(this.selectedTag.path)
      this.$store.dispatch('delOthersViews', this.selectedTag).then(() => {
        this.moveToCurrentTag()
      })
    },
    // 关闭全部标签页
    closeAllTags () {
      this.$store.dispatch('delAllViews')
      this.$router.push('/')
    },
    // 打开菜单
    openMenu (tag, e) {
      this.visible = true
      this.selectedTag = tag
      this.left = e.clientX
      this.top = e.clientY
    },
    closeMenu () {
      this.visible = false
    }
  }
}
</script>
<style lang="less" scoped>
.tags-view-container {
  .tags-view-wrapper {
    height: 34px;
    border-bottom: 1px solid #d8dce5;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
    .tags-view-item {
      position: relative;
      display: inline-block;
      height: 26px;
      padding: 0 8px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      background-color: #fff;
      color: #495060;
      font-size: 12px;
      margin: 4px 0 0 5px;
      &:first-of-type {
        margin-left: 15px;
      }
      &.active {
        border-color: #42b983;
        background-color: #42b983;
        color: #fff;
        &::before {
          content: '';
          position: relative;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-right: 2px;
          background-color: #fff;
        }
      }
    }
  }
}
.contextmenu {
  position: absolute;
  padding: 5px 0;
  margin: 0;
  background-color: #fff;
  z-index: 100;
  list-style-type: none;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #333;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
  li {
    padding: 7px 16px;
    margin: 0;
    cursor: pointer;
    &:hover {
      background-color: #eee;
    }
  }
}
</style>
<style lang="less">
.tags-view-wrapper {
  .tags-view-item {
    .el-icon-close {
      width: 16px;
      height: 16px;
      vertical-align: 2px;
      border-radius: 50%;
      text-align: center;
      transition: all .3s cubic-bezier(.645, .045, .355, 1);
      transform-origin: 100% 50%;
      &:before {
        display: inline-block;
        transform: scale(.6);
        vertical-align: -3px;
      }
      &:hover {
        background-color: #b4bccc;
        color: #fff;
      }
    }
  }
}
</style>
