<template>
  <div id="app">
    <div class='tab'>
      <router-link to='goods'>商品</router-link>
      <router-link to='ratings'>评价</router-link>
      <router-link to='seller'>商家</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped lang='sass'>
#app
  .tab
    display: flex
    justify-content: space-around
    .router-link-active
      color: #f00
</style>
