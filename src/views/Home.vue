<template>
  <div class="home">
    <q-button icon="232"></q-button>
    <q-font-icon name="edit" size="23" @click="handleClick"></q-font-icon>
    <q-font-icon name="icon-mima" prefix="iconfont"></q-font-icon>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  methods: {
    handleClick (e) {
      console.log(e)
    }
  }
}
</script>
