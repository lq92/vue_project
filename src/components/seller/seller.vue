<template>
	<div class='seller'>
		<div class='description'>
			<div class='name_wrapper'>
				<div class='section_left'>
					<h2 class='name'>{{ seller.name }}</h2>
					<div class='score_wrapper'>
						<score :size='36' :score='seller.score'></score>
						<span class='rating_count'>({{ seller.ratingCount }})</span>
						<span class='sell_count'>月售{{ seller.sellCount }}单</span>
					</div>
				</div>
				<div class='section_right'>
					<i class='icon_favorite'></i>
					<span class='text'>收藏</span>
				</div>
			</div>
			<div class='bottom_wrapper'>
				<div class='min_price'>
					<p>起送价</p>
					<p class='item'><span class='item_inner'>{{ seller.minPrice }}</span>元</p>
				</div>
				<div class='delivery_price'>
					<p>商家配送</p>
					<p class='item'><span class='item_inner'>{{ seller.deliveryPrice }}</span>元</p>
				</div>
				<div class='delivery_time'>
					<p>平均配送时间</p>
					<p class='item'><span class='item_inner'>{{ seller.deliveryTime }}</span>分钟</p>
				</div>
			</div>
		</div>
		<gutter></gutter>
		<div class='notice'></div>
		<gutter></gutter>
		<div class='pics'></div>
		<gutter></gutter>
		<div class='info'></div>
	</div>
</template>

<script>
import gutter from '~/gutter/gutter'
import score from '~/score/score'
export default {
	data(){
		return {
			seller: {}
		}
	},
	components: {
		gutter,
		score
	},
	mounted(){
		this.$http.get('/api/seller').then(res => {
			this.seller = res.body.seller
		})
	}
}	
</script>

<style lang='sass' scoped>
@import '../../assets/style.css'
.seller
	.description
		display: flex
		flex-direction: column
		.name_wrapper
			display: flex
			justify-content: space-between
			padding: 18px
			border-bottom: 1px solid rgba(7, 17, 27, 0.1)
			.section_left
				.name
					font: 
						size: 14px
						weight: 400
					color: rgb(7, 17, 27)	
				.score_wrapper
					display: flex
					margin-top: 9px
					.rating_count, .sell_count
						font: 
							size: 10px
							weight: 400
						color: rgb(77, 85, 93)	
					.rating_count
						margin: 0 12px 0 8px
			.section_right
				display: flex
				flex-direction: column
				align-items: center
				.icon_favorite
					font-size: 18px
					color: rgba(147, 153, 159, 0.4)	
					margin: 3px 0 6px
				.text
					font-size: 10px
					color: rgb(147, 153, 159)					
		.bottom_wrapper
			display: flex
			padding: 18px 0
			color: rgb(147, 153, 159)
			font: 
				size: 10px
				weight: 400
			.min_price, .delivery_price, .delivery_time
				display: flex
				flex-direction: column
				align-items: center
				width: 33.33%
				.item
					color: rgb(7, 17, 27)
					margin-top: 8px
					.item_inner
						font-size: 24px
			.delivery_price
				border: 1px solid rgba(7, 17, 27, 0.1)
					top: 0
					bottom: 0			
</style>