<template>
	<div class='food' v-show='isShow' ref='food'>
		<div class='wrapper'>
			<div class='info_wrapper'>
				<img width='100%' height='auto' :src='food.image'>
				<div class='info'>
					<h3 class='name'>{{ food.name }}</h3>
					<p class='sell_count'>月售{{ food.sellCount }}份<span class='rating'>好评率{{ food.rating }}%</span></p>
					<p class='price'>{{ food.price | formatePrice }}<span class='old_price' v-if='food.oldPrice'>{{ food.oldPrice | formatePrice }}</span></p>
				</div>
				<span class='btn'>加入购物车</span>
			</div>
			<gutter />
			<div class='introduct'>
				<h3 class='title'>商品介绍</h3>
				<p class='text'>{{ food.info }}</p>
			</div>
			<gutter />
			<div class='ratings'>
				<select-btns :ratings='food.ratings' v-show='food' :description='description' :select-type='selectType' :only-content='onlyContent' @selectRatings='selectRatings' @onlyContent='toggle'></select-btns>
			</div>
			<div class='back' @click='hide'>
				<i class='icon_arrow_lift'></i>
			</div>
		</div>
	</div>
</template>

<script>
const ALL = 2;
const POSITIVE = 0;
const NEGATIVE = 1;
import BScroll from 'better-scroll'
import gutter from '~/gutter/gutter'
import selectBtns from '~/select_btns/select_btns'
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
		selectBtns
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
  			width: 74px
  			height: 24px
  			text-align: center
  			line-height: 24px
  			background: rgb(0, 160, 220)
  			color: rgb(255, 255, 255)
  			border-radius: 10px			
  			font: 
  				size: 10px
  				weight: 400
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
  	.back
  		position: absolute
  		left: 10px
  		top: 10px
  		.icon_arrow_lift
  			font-size: 20px
  			color: rgb(255, 255, 255)		
</style>