<template>
  <div>
    <el-dropdown @command="handleCommandSkin" trigger="hover" class="eldropdown">
      <span class="el-dropdown-link lang">
        {{ $t('navbar.theme')}}
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="(item, index) in skins" :key="index" :command="item.name">
          {{ generateSkinColor(item.label) }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import { generateSkinColor } from '@/utils/i18n' // 国际化主题名字
import { global } from '@/global/global'

export default {
  name: 'qSkin',
  data () {
    return {
      skins: [
        { name: 'Blue', label: 'Blue' },
        { name: 'Green', label: 'Green' },
        { name: 'Red', label: 'Red' },
        { name: 'Purple', label: 'Purple' },
        { name: 'Default', label: 'Default' }
      ]
    }
  },
  methods: {
    generateSkinColor,
    handleCommandSkin (commad) {
      global.changeTheme(commad)
    }
  }
}
</script>
<style scoped>
.lang {
  color: #5a5e66;
  cursor: pointer;
}
.eldropdown {
  margin-right: 5px;
}
.skin {
  cursor: pointer;
}
</style>
