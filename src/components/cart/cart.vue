<template>
	<div class='cart'>
		<div class='icon_wrapper'>
			<div class='icon_inner'>
					<i class='icon_shopping_cart'></i>
			</div>
		</div>
		<div class='price'>
			<p class='total_price'>{{ totalPrice | formatePrice }}</p>
			<p class='delivery'>另需配送费{{ seller.deliveryPrice | formatePrice }}元</p>
		</div>
		<div class='count'></div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			totalPrice: 0,
			seller: {}
		}
	},
	mounted(){
		this.$http.get('/api/seller').then(res => {
			this.seller = res.body.seller
		})
	},
	filters: {
		formatePrice(val){
			return `￥${val}`
		}
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
	background: rgba(7, 17, 27, 0.95)
	.icon_wrapper
		flex: 0 0 auto
		width: 80px
		padding: 12px
		box-sizing: border-box
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
		.delivery
			font-size: 10px		
</style>