<template>
  <transition name='fadeIn'>
  	<div class='food' v-show='isShow' ref='food'>
  		<div class='wrapper'>
  			<div class='info_wrapper'>
  				<img width='100%' height='auto' :src='food.image'>
  				<div class='info'>
  					<h3 class='name'>{{ food.name }}</h3>
  					<p class='sell_count'>月售{{ food.sellCount }}份<span class='rating'>好评率{{ food.rating }}%</span></p>
  					<p class='price'>{{ food.price | formatePrice }}<span class='old_price' v-if='food.oldPrice'>{{ food.oldPrice | formatePrice }}</span></p>
  				</div>
  				<div class='btn'>
            <count-btn v-if='food.count' :food='food'></count-btn>  
            <div class='cart_text' @click='addToCart(food)' v-else>加入购物车</div>  
          </div>
  			</div>
  			<gutter />
  			<div class='introduct'>
  				<h3 class='title'>商品介绍</h3>
  				<p class='text'>{{ food.info }}</p>
  			</div>
  			<gutter />
  			<div class='ratings' v-if='food.ratings'>
  				<select-btns :ratings='food.ratings' v-show='food' :description='description' :select-type='selectType' :only-content='onlyContent' @selectRatings='selectRatings' @onlyContent='toggle'></select-btns>
          <div class='item' v-for='item in food.ratings' v-show='select(item)' v-if='food.ratings.length > 0'>
            <span class='time'>{{ item.rateTime }}</span>
            <p class='text'><i class='rate_type' :class='{icon_thumb_up: item.rateType === 0, icon_thumb_down: item.rateType === 1}'></i>{{ item.text }}</p>
            <div class='user'>
              <span class='user_name'>{{ item.username }}</span>
              <img class='avatar' :src='item.avatar'>
            </div>
          </div>
  			</div>
        <div class='no_ratings' v-else><h2>暂无评价</h2></div>
  		</div>
      <div class='back' @click='hide'>
        <i class='icon_arrow_lift'></i>
      </div>
  	</div>
  </transition>
</template>

<script>
const ALL = 2;
const POSITIVE = 0;
const NEGATIVE = 1;
import BScroll from 'better-scroll'
import gutter from '~/gutter/gutter'
import selectBtns from '~/select_btns/select_btns'
import countBtn from '~/count_btn/count_btn'
export default {
  data(){
    return {
      description: {
        all: '全部',
        positive: '推荐',
        negative: '吐槽'
      },
      selectType: ALL,
      onlyContent: false
    }
  },
	props: {
		food: Object,
		isShow: {
			type: Boolean,
			default: false
		}
	},
  methods: {
    hide(){
      this.$emit('hide')
    },
    selectRatings(type){
      this.selectType = type
    },
    toggle(){
      this.onlyContent = !this.onlyContent
    },
    select(item){
      if(this.onlyContent && !item.text){
        return false
      }
      if(this.selectType === ALL){
        return true
      }else{
        return this.selectType === item.rateType
      }
    },
    addToCart(food){
      this.$emit('addtocart')
    }
  },
	filters: {
		formatePrice(val){
			return `￥${val}`
		}
	},
	mounted() {
		new BScroll(this.$refs.food, { click: true })
	},
	components: {
		gutter,
		selectBtns,
    countBtn
	}
}	
</script>

<style lang='sass' scoped>
@import '../../assets/style.css'
.food
  position: fixed
  left: 0
  top: 0
  bottom: 48px
  z-index: 30
  width: 100%
  background: #fff
  .wrapper
  	display: flex
  	flex-direction: column
  	position: relative
  	.info_wrapper
  		position: relative
  		.info
	  		padding: 18px 0 25px 18px
	  		.name
	  			font: 
	  				size: 14px
	  				weight: 700
	  			color: rgb(7, 17, 27)	
	  		.sell_count
	  			font: 
	  				size: 10px
	  				weight: 400
	  			color: rgb(147, 153, 159)	
	  			margin: 8px 0 24px
	  			.rating
	  				margin-left: 12px
  			.price
  				font: 
  					size: 14px
  					weight: 700
  				color: rgb(240, 20, 20)
  				.old_price
  					font: 
  						size: 10px
  						weight: 400
  					color: rgb(147, 153, 159)
  					text-decoration: line-through
  					margin-left: 8px				
  		.btn
  			position: absolute
  			right: 18px
  			bottom: 18px
  	.introduct
  		padding: 18px
  		.title
  			font: 
  				size: 14px
  				weight: 400
  			color: rgb(7, 17, 27)
  			margin-bottom: 6px
  		.text
  			font-size: 12px
  			color: rgb(77, 85, 93)
  			line-height: 24px	  
  .ratings
    .item
      display: flex
      flex-direction: column
      padding: 16px 0 18px
      margin: 0 18px  
      position: relative
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      .time
        font: 
          size: 10px
          weight: 400
        color: rgb(147, 153, 159)  
      .text
        display: flex
        align-items: center
        font: 
          size: 12px
          weight: 400
        color: rgb(7, 17, 27) 
        margin-top: 11px
        line-height: 14px
        .rate_type
          font-size: 20px
          margin-right: 4px
          &.icon_thumb_down
            color: rgb(183, 187, 191)
          &.icon_thumb_up
            color: rgb(0, 160, 220)
      .user
        display: flex
        align-items: center
        position: absolute  
        top: 16px
        right: 18px
        font: 
          size: 10px
          weight: 400
        color: rgb(147, 153, 159) 
        .user_name
          margin-right: 7px
        .avatar
          width: 12px
          height: 12px
          border-radius: 50%  
  .no_ratings
    font-size: 20px
    color: rgba(7, 17, 27, 0.8)   
    text-align: center
    padding: 20px 0   
  .back
    position: absolute
    left: 10px
    top: 10px
    .icon_arrow_lift
      font-size: 20px
      color: rgb(255, 255, 255) 
  &.fadeIn-enter-active, &.fadeIn-leave-active
    transition: 0.5s all   
  &.fadeIn-enter, &.fadeIn-leave-to
    opacity: 0 
    transform: translateX(100%)
</style>
<style lang='sass'> 
.cart_text
  width: 74px
  height: 24px
  background: rgb(0, 160, 220) 
  color: rgb(255, 255, 255)
  line-height: 24px
  text-align: center
  font: 
    size: 10px
    weight: 400
  border-radius: 10px 
</style>