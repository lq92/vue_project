<template>
	<div class='goods'>
		<div class='menu_wrapper' ref='menu_wrapper'>
			<ul class='menu'>
				<li class='item_wrapper' v-for='item in goods'>
					<div class='item'>
						<span v-if='item.type >= 0' :class='typeLists[item.type]'></span>
						<span class='text'>{{ item.name }}</span>
					</div>
				</li>
			</ul>
		</div>
		<div class='goods_wrapper' ref='goods_wrapper'>
			<div class='goods_container'>
				<div class='food_wrapper' v-for='item in goods'>
					<h2 class='title'>{{ item.name }}</h2>
					<div class='food_list' v-for='food in item.foods'>
						<div class='icon'>
							<img width='57' height='57' :src='food.icon'>
						</div>
						<div class='info'>
							<h2 class='name'>{{ food.name }}</h2>
							<h3 class='des'>{{ food.description }}</h3>
							<h4 class='sell'>月售{{ food.sellCount }}份<span class='rating'>好评率{{ food.rating }}%</span></h4>
							<p class='price'>{{ food.price | formatePrice }}<span class='old_price' v-if='food.oldPrice'>{{ food.oldPrice | formatePrice }}</span></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
	data(){
		return {
			goods: [],
			typeLists: [ 'guarantee', 'discount', 'special', 'decrease', 'invoice' ]
		}
	},
	mounted(){
		this.$http.get('/api/goods').then(res => {
			this.goods = res.body.goods
			new BScroll(this.$refs.menu_wrapper, { click: true })
			new BScroll(this.$refs.goods_wrapper, { click: true })
		})
	},
	filters: {
		formatePrice(val){
			return `￥${val}`
		}
	}
}	
</script>

<style scoped lang='sass'>
@import '../../styles/image'
.goods
	display: flex
	.menu_wrapper
		flex: 0 0 auto
		height: 445px
		overflow: hidden
		.menu
			width: 80px
			padding: 0 12px
			background: rgb(243, 245, 247)
			.item_wrapper
				display: table
				width: 100%
				height: 54px
				box-sizing: border-box
				color: rgb(7, 17, 27)
				border-bottom: 1px solid rgba(7, 17, 27, 0.1)
				&:last-child
					border-bottom: 0
				.item
					display: table-cell
					vertical-align: middle
					font-size: 0
				@each $type in ( guarantee, discount, special, decrease, invoice)
					.#{$type}
						@include image(#{$type}_3)
						display: inline-block
						width: 12px
						height: 12px
						background-size: 12px 12px
						background-repeat: no-repeat
						vertical-align: middle	
						margin-right: 2px
					.text
						vertical-align: middle	
						font-size: 12px
						line-height: 14px
	.goods_wrapper
		flex: 1 1 auto
		height: 445px
		overflow: hidden
		.goods_container
			.food_wrapper
				display: flex
				flex-direction: column
				.title
					height: 26px
					line-height: 26px
					background: rgb(243, 245, 247)
					border-left: 2px solid rgb(217, 221, 225)
					color: rgb(147, 153, 159)
					font: 
						size: 12px
						weight: 400
					text-indent: 12px
					box-sizing: border-box									
				.food_list
					display: flex
					padding: 18px	0
					margin: 0 18px
					border-bottom: 1px solid rgb(217, 221, 225)
					&:last-child
						border-bottom: 0
					.icon
						flex: 0 0 auto
						width: 57px
						height: 57px
						border-radius: 2px
						overflow: hidden
						margin-right: 9px
					.info
						flex: 1 1 auto
						color: rgb(147, 153, 159)	
						.name
							font: 
								size: 14px
								weight: 400
							color: rgb(7, 17, 27)
							margin: 2px 0 9px
						.des
							font: 
								size: 10px
								weight: 400
							line-height: 14px	
						.sell
							font: 
								size: 10px
								weight: 400
							margin: 8px 0	6px
							.rating
								margin-left: 12px
						.price
							font: 
								size: 14px
								weight: 700
							color: rgb(240, 20, 20)
							.old_price
								font-size: 10px
								color: rgb(147, 153, 159)
								text-decoration: line-through
								margin-left: 8px	
</style>