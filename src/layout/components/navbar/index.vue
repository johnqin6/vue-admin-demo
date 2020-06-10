<!--头部导航 -->
<template>
  <el-menu class="nav-bar">
    <div class="nav-left">
      <!-- 侧边框展开关闭按钮 -->
      <open-side-btn></open-side-btn>
      <!-- 面包屑 -->
      <q-breadcrumb></q-breadcrumb>
    </div>
    <div class="nav-right">
      <!-- 锁屏 -->
      <q-top-lock class="top-lock"></q-top-lock>
      <div class="ml_15">
        <q-github></q-github>
      </div>
      <!-- 全屏 -->
      <el-tooltip class="full-screen ml_15" effect="dark" content="全屏" placement="bottom">
        <q-full-screen></q-full-screen>
      </el-tooltip>
      <!-- 语言切换 -->
      <q-lang-select class="ml_15"></q-lang-select>
      <!-- 主题 -->
      <el-tooltip class="ml_15" effect="dark" content="主题" placement="bottom">
        <q-skin></q-skin>
      </el-tooltip>
      <!-- 账户 -->
      <el-dropdown class="avatar-container right-menu-item" trigger="click">
        <div class="avatar-wrapper">
          <img src="../../../assets/logo.png" class="user-avatar">
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>
              home
            </el-dropdown-item>
          </router-link>
          <a target="_blank" href="">
            <el-dropdown-item>
              github地址
            </el-dropdown-item>
          </a>
          <el-dropdown-item divided>
            <div @click="logout">退出</div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-menu>
</template>
<script>
import openSideBtn from './openSideBtn'

export default {
  components: {
    openSideBtn
  },
  methods: {
    logout () {
      this.$store.dispatch('LogOut').then(() => {
        location.reload()
      })
    }
  }
}
</script>
<style lang="less" scoped>
.full-screen {
  height: 20px;
}
.ml_15 {
  margin-left: 15px;
}
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 10px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, .05);
  transition: all .3s;
  .nav-left {
    flex: 1;
    display: flex;
    align-items: center;
  }
  .nav-right {
    display: flex;
    align-items: center;
    &:focus {
      outline: none;
    }
    .top-lock {
      display: inline-block;
      vertical-align: top;
      cursor: pointer;
    }
    .avatar-container {
      height: 50px;
      margin-right: 30px;
      .avatar-wrapper {
        position: relative;
        cursor: pointer;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          margin: 5px 0 5px 10px;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
