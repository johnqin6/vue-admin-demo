<template>
  <div class="lock-container flex_center pull-height">
    <div class="lock-form animated bounceInDown">
      <div class="animated">
        <h3 class="text-white">{{ name }}</h3>
        <el-input class="input-with-select animated"
          v-model="password"
          @keyup.enter.native="handleLogin"
          placeholder="请输入登录密码" type="password">
          <el-button slot="append" @click="handleLogin" >
            <i class="iconfont icon-kaisuo"></i>
          </el-button>
          <el-button slot="append" @click="handleLogout">
            <i class="iconfont icon-dengchu"></i>
          </el-button>
        </el-input>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'lock',
  data () {
    return {
      password: '',
      passwordError: false,
      pass: false
    }
  },
  computed: {
    ...mapState({
      name: state => state.user.name
    }),
    ...mapGetters(['lockPassword'])
  },
  methods: {
    handleLogout () {
      this.$confirm('是否退出系统，是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('LogOut').then(() => {
          this.$router.push({ path: '/login' })
        })
      }).catch(() => {
        return false
      })
    },
    handleLogin () {
      if (this.password !== this.lockPassword) {
        this.password = ''
        this.$message({
          message: '解锁密码错误，请重新输入',
          type: 'error'
        })
        this.passwordError = true
        setTimeout(() => {
          this.passwordError = false
        }, 1000)
        return false
      }
      this.pass = true
      setTimeout(() => {
        this.$store.commit('CLEAR_LOCK')
        this.$router.push('/dashboard/dashboard')
      }, 1000)
    }
  }
}
</script>
<style lang="less" scoped>
.lock-container {
  height: 100%;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url('../../assets/images/lockLogin.png');
    background-size: cover;
    z-index: -1;
  }
  .lock-form {
    width: 300px;
  }
}
</style>
