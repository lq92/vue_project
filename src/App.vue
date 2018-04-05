<template>
  <div id="app">
    <v-head></v-head>
    <div class='tab'>
      <router-link to='/goods'>商品</router-link>
      <router-link to='/ratings'>评价</router-link>
      <router-link to='/seller'>商家</router-link>
    </div>
    <router-view :seller='seller' :goods='goods' :ratings='ratings' />
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
    this.$http.get('/api').then(res => {
      if(res.body.ERR_NO === ERR_NO){
        let apiData = res.body.apiData;
        this.seller = apiData.seller;
        this.goods = apiData.goods;
        this.ratings = apiData.ratings;
      }
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
</style>
