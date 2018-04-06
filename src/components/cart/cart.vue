<template>
	<div>
		<div class='cart'>
			<div class='icon_wrapper' @click='toggle'>
				<div class='icon_inner'>
						<i class='icon_shopping_cart' :class='{active: totalCount > 0}'></i>
						<div class='count' v-show='totalCount > 0'>{{ totalCount }}</div>
				</div>
			</div>
			<div class='price' @click='toggle'>
				<p class='total_price' :class='{active: totalPrice > 0}'>{{ totalPrice | formatePrice }}</p>
				<p class='delivery'>另需配送费{{ seller.deliveryPrice | formatePrice }}元</p>
			</div>
			<div class='settle' :class='{ active: this.totalPrice >= this.seller.minPrice }'>{{ settleBtn }}</div>
		</div>
		<div class='cart_info' v-show='isShow'>
			<div class='cart_info_wrapper'>
				<header>
					<span class='title'>购物车</span>
					<span class='clear' @click='clear'>清空</span>
				</header>
				<main ref='content_hook'>
					<div class='content'>
						<div class='item_wrapper' v-for='item in selectedFoods'>
							<p class='name'>{{ item.name }}</p>
							<p class='price'>{{ item.price | formatePrice }}</p>
							<div class='count_btn_wrapper'>
								<count-btn :food='item'></count-btn>
							</div>
						</div>
					</div>	
				</main>
			</div>
		</div>
		<div class='mask' v-show='isShow' @click='toggle'></div>
	</div>	
</template>

<script>
import countBtn from '~/count_btn/count_btn'
import BScroll from 'better-scroll'
export default {
	props: {
		selectedFoods: Array
	},
	data(){
		return {
			seller: {},
			isShow: false
		}
	},
	computed: {
		totalCount(){
			let count = 0;
			this.selectedFoods.forEach(item => {
				count += item.count
			})
			return count;
		},
		totalPrice(){
			let price = 0;
			this.selectedFoods.forEach(item => {
				price += item.count * item.price
			})
			return price
		},
		settleBtn(){
			if(this.totalPrice === 0){
				return `￥20起送`
			}else if(this.totalPrice < this.seller.minPrice){
				return `还差￥${this.seller.minPrice - this.totalPrice}起送`
			}else{
				return `去结算`
			}
		}
	},
	mounted(){
		this.$http.get('/api/seller').then(res => {
			this.seller = res.body.seller
		})
	},
	methods: {
		toggle(){
			if(this.selectedFoods){
				this.isShow = !this.isShow
				new BScroll(this.$refs.content_hook, { click: true })
			}
		},
		clear(){
			this.$emit('clearFoods')
		}
	},
	filters: {
		formatePrice(val){
			return `￥${val}`
		}
	},
	components: {
		countBtn
	}
}	
</script>

<style lang='sass' scoped>
@import '../../assets/style.css'
.cart
	display: flex
	width: 100%
	height: 48px
	position: fixed
	bottom: 0
	left: 0
	z-index: 50
	background: rgba(7, 17, 27, 0.95)
	.icon_wrapper
		flex: 0 0 auto
		width: 80px
		padding: 12px
		box-sizing: border-box
		position: relative
		.icon_inner
			display: flex
			justify-content: center
			align-items: center
			width: 56px
			height: 56px
			border-radius: 50%
			position: absolute
			top: -10px
			background: rgba(7, 17, 27, 0.95)
			.icon_shopping_cart
				display: inline-flex
				justify-content: center
				align-items: center
				width: 44px
				height: 44px
				background: rgba(255, 255, 255, 0.1)
				border-radius: 50%
				color: rgba(255, 255, 255, 0.4)
				font-size: 20px
				&.active
					background: rgb(0, 160, 220)
					color: rgb(255, 255, 255)
			.count
				position: absolute
				top: 0
				right: 0
				width: 24px
				height: 16px	
				color: rgb(255, 255, 255)	
				font: 
					size: 9px
					weight: 700
				text-align: center
				line-height: 16px
				border-radius: 6px
				box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4)	
				background: rgb(240, 20, 20)
	.price
		flex: 1 1 auto
		display: flex
		align-items: center
		width: 190px
		color: rgba(255, 255, 255, 0.4)
		.total_price
			font: 
				size: 16px
				weight: bold
			height: 24px
			line-height: 24px
			padding-right: 12px
			border-right: 1px solid rgba(255, 255, 255, 0.1)	
			margin-right: 12px
			&.active
				color: rgb(255, 255, 255)	
		.delivery
			font-size: 10px		
	.settle
		flex: 0 0 auto
		width: 105px
		height: 100%
		line-height: 48px
		text-align: center
		background: rgb(43, 51, 59)	
		font: 
			size: 12px
			weight: 700
		color: rgba(255, 255, 255, 0.4)		
		&.active
			background: rgb(0, 180, 60)
			color: rgb(255, 255, 255)
.cart_info	
	position: absolute
	left: 0
	bottom: 48px
	max-height: 235px
	width: 100%
	background: rgb(255, 255, 255)
	padding-bottom: 22px
	z-index: 45
	overflow: hidden
	.cart_info_wrapper
		header
			display: flex
			align-items: center
			justify-content: space-between
			width: 100%
			padding: 0 18px
			height: 40px
			background: rgb(243, 245, 247)
			border-bottom: 1px solid rgba(7, 17, 27, 0.1)
			box-sizing: border-box
			.title
				font-size: 14px
				color: rgb(7, 17, 27)
			.clear
				font: 
					size: 12px
					weight: 400
				color: rgb(0, 160, 220)	
		main
			display: flex
			flex-direction: column
			max-height: 195px
			overflow: hidden
			.item_wrapper
				display: flex
				justify-content: space-between	
				align-items: center
				margin: 0 18px
				height: 48px
				border-bottom: 1px solid rgba(7, 17, 27, 0.1)
				font: 
					size: 14px
					weight: 400
				color: rgb(7, 17, 27)	
				position: relative
				.price	
					font-weight: 700
					color: rgb(240, 20, 20)
					margin-right: 85px
				.count_btn_wrapper
					position: absolute
					right: 2px	
.mask
	position: fixed
	top: 0
	left: 0
	width: 100%
	height: 100%
	background: rgba(7, 17, 27, 0.6)		
	z-index: 40  
	backdrop-filter: blur(10px)
	overflow: hidden			
</style>