<template>
	<div class='seller' ref='seller_wrapper'>
		<div class='container'>
			<div class='test' v-if='seller !== null'>
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
						<div class='section_right' @click='collect'>
							<div v-if='collection' class='favorite'>
								<i class='icon_favorite icon_active'></i>
								<span class='text_active text'>已收藏</span>
							</div>
							<div v-else class='favorite'>
								<i class='icon_favorite'></i>
								<span class='text'>收藏</span>
							</div>
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
				<div class='notice'>
					<h2 class='name'>公告与活动</h2>
					<p class='text'>{{ seller.bulletin }}</p>
					<div class='discount_wrapper'>
						<discount :supports='seller.supports' :category='seller_page'></discount>
					</div>
				</div>
				<gutter></gutter>
				<div class='pics'>
					<h2 class='name'>商家实景</h2>
					<div class='pic_wrapper' ref='pic_wrapper'>
						<div class='item_wrapper'>
							<img v-for='item in seller.pics' class='item' :src='item' width='120' height='90'>
						</div>
					</div>
				</div>
				<gutter></gutter>
				<div class='info'>
					<h2 class='name'>商家信息</h2>
					<ul class='item_wrapper'>
						<li v-for='item in seller.infos' class='item'>{{ item }}</li>
					</ul>
				</div>
			</div>	
		</div>	
	</div>
</template>

<script>
import BScroll from 'better-scroll'

import gutter from '~/gutter/gutter'
import score from '~/score/score'
import discount from '~/discount/discount'
export default {
	props: {
		seller: Object
	},
	data(){
		return {
			seller_page: 'seller_page',
			collection: JSON.parse(localStorage.getItem('collection')),
			sellerCopy: {}
		}
	},
	components: {
		gutter,
		score,
		discount
	},
	updated() {
		this.$nextTick(() => {
			this._initScroll()
		})
	},	
	methods: {
		collect(){
			localStorage.setItem('collection', !JSON.parse(localStorage.getItem('collection')))
			this.collection = this._collection()
		},
		_collection(){
			return !!JSON.parse(localStorage.getItem('collection'));
		},
		_initScroll(){
			new BScroll(this.$refs.pic_wrapper, { scrollX: true }).refresh()
			new BScroll(this.$refs.seller_wrapper, { click: true }).refresh()
		}
	}
}	
</script>

<style lang='sass' scoped>
@import '../../assets/style.css'
.seller
	height: 492px
	overflow: hidden
	.description
		display: flex
		flex-direction: column
		.name_wrapper
			display: flex
			justify-content: space-between
			padding: 18px 0
			margin: 0 18px
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
				.favorite
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
					.icon_active
						color: rgb(240, 20, 20)	
					.text_active
						color: rgb(77, 85, 93)			
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
	.notice
		font-size: 12px
		color: rgb(7, 17, 27)
		padding: 0 18px
		.name
			font: 
				size: 14px
				weight: 400
			margin: 18px 0 9px	
		.text
			padding: 0 12px
			font-size: 12px
			color: rgb(240, 20, 20)	
			line-height: 24px
			margin-bottom: 16px
		.discount_wrapper
			padding: 0 12px	
	.pics
		padding: 0 0 18px 18px
		.name
			font: 
				size: 14px
				weight: 400
			color: rgb(7, 17, 27)
			margin: 18px 0 9px
		.pic_wrapper
			width: 100%
			overflow: hidden
			.item_wrapper
				display: flex
				width: 504px
				.item
					margin-right: 6px
					&:last-child
						margin-right: 0
	.info
		padding: 0 18px
		font-size: 12px
		color: rgb(7, 17, 27)
		.name
			font: 
				size: 14px
				weight: 400
			margin: 18px 0 9px
		.item_wrapper
			.item
				height: 48px
				line-height: 48px
				padding: 0 12px	
				border-top: 1px solid rgba(7, 17, 27, 0.1)
</style>

