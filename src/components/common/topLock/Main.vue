<template>
  <span>
    <el-tooltip effect="dark" content="锁屏" placement="bottom">
      <i class="iconfont icon-suoping" @click="handleLock"></i>
    </el-tooltip>
    <el-dialog title="设置锁屏密码" :visible.sync="isVisible" width="30%" append-to-body>
      <el-form :model="form" ref="form" label-width="80px">
        <el-form-item label="锁屏密码" prop="password" :rules="rules">
          <el-input v-model="form.password" placeholder="请输入锁屏密码"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleSetLock">确 定</el-button>
      </span>
    </el-dialog>
  </span>
</template>
<script>
import { mapGetters } from 'vuex'
import { isEmpty } from '@/utils/validate'
export default {
  name: 'qTopLock',
  data () {
    return {
      isVisible: false,
      form: {
        password: ''
      },
      rules: [
        { required: true, message: '锁屏密码不能为空' }
      ]
    }
  },
  computed: {
    ...mapGetters(['lockPassword'])
  },
  methods: {
    handleLock () {
      if (isEmpty(this.lockPassword)) {
        this.isVisible = true
        return false
      }
      this.$store.commit('SET_LOCK')
      setTimeout(() => {
        this.$router.push({ path: '/lock' })
      }, 100)
    },
    handleSetLock () {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$store.commit('SET_LOCK_PASSWD', this.form.password)
          this.handleLock()
        }
      })
    }
  }
}
</script>
<style scoped>
</style>
