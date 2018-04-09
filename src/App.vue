<template>
  <div id="app">
    <v-head :seller='seller'></v-head>
    <div class='tab'>
      <router-link to='/goods'>商品</router-link>
      <router-link to='/ratings'>评价</router-link>
      <router-link to='/seller'>商家</router-link>
    </div>
    <transition name='switch-direction'>
      <keep-alive>
        <router-view :seller='seller' :goods='goods' :ratings='ratings' />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
const ERR_NO = 0;
import vHead from '~/head/head'
export default {
  name: 'App',
  data(){
    return {
      seller: null,
      goods: [],
      ratings: []
    }
  },
  components: {
    vHead
  },
  created(){
    this.$http.get('/api/goods').then(res => {
      this.goods = res.body.goods;
    })
    this.$http.get('/api/ratings').then(res => {
      this.ratings = res.body.ratings;
    })
    this.$http.get('/api/seller').then(res => {
      this.seller = res.body.seller;
    })
  }
}
</script>

<style lang='sass'>
@import './styles/reset.sass'
#app
  .tab
    display: flex
    justify-content: space-around
    align-items: center
    height: 40px
    border-bottom: 1px solid rgba(0, 0, 0, 0.1)
    a
      font: 
        size: 14px
        weight: 400
      color: #4d555d
      &.router-link-active
        color: #f00
  .switch-direction-enter, .switch-direction-leave-to
    transform: translateX(-100%)
  .switch-direction-leave-active, .switch-direction-enter-active
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0)
</style>
