<template>
	<div class='ratings' ref='ratings_wrapper'>
		<div class='container_wrapper'>
			<div class='section_top'>
				<div class='comprehensive'>
					<h2 class='score'>{{ seller.score }}</h2>
					<h3 class='text'>综合评分</h3>
					<p class='rank'>高于周边商家{{ seller.rankRate }}%</p>
				</div>
				<div class='score_container'>
					<div class='service'>
						<p class='text'>服务态度</p>
						<div class='score_wrapper'>
							<score :size='36' :score='seller.serviceScore'></score>
						</div>
						<span class='score_num'>{{ seller.serviceScore }}</span>
					</div>
					<div class='food'>
						<p class='text'>商品评分</p>
						<div class='score_wrapper'>
							<score :size='36' :score='seller.foodScore'></score>
						</div>
						<span class='score_num'>{{ seller.foodScore }}</span>
					</div>
					<div class='delivery'>
						<p class='text'>送达时间</p>
						<span class='time'>{{ seller.deliveryTime }}分钟</span>
					</div>
				</div>
			</div>
			<gutter></gutter>
			<div class='container'>
				<select-btns :ratings='ratings'></select-btns>
				<div class='ratings_wrapper'>
					<div class='ratings_item' v-for='item in ratings'>
						<div class='avatar_wrapper'>
							<img class='avatar' :src='item.avatar'>
						</div>
						<div class='rating'>
							<h3 class='name'>{{ item.username }}</h3>
							<div class='score_wrapper'>
								<score :size='24' :score='item.score'></score>
								<span class='delivery_time' v-if='item.deliveryTime'>{{ item.deliveryTime }}分钟送达</span>
							</div>
							<p class='text'>{{ item.text }}</p>
							<div class='recommend_wrapper' v-if='item.recommend.length > 0'>
								<i class='icon_thumb_up'></i>
								<span class='recommend' v-for='recommend in item.recommend'>{{ recommend }}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>	
	</div>
</template>

<script>
import gutter from '~/gutter/gutter'
import score from '~/score/score'
import selectBtns from '~/select_btns/select_btns'
import BScroll from 'better-scroll'
export default {
	data(){
		return {
			seller: {},
			ratings: []
		}
	},
	components: {
		gutter,
		score,
		selectBtns
	},
	mounted(){
		this.$http.get('/api/seller').then(res => {
			this.seller = res.body.seller
		})
		this.$http.get('/api/ratings').then(res => {
			this.ratings = res.body.ratings
		})
		new BScroll(this.$refs.ratings_wrapper, {})
	}
}	
</script>

<style lang='sass' scoped>
@import '../../assets/style.css'
.ratings
	height: 492px
	overflow: hidden
	.section_top
		display: flex
		padding: 18px 0
		.comprehensive
			flex: 0 0 auto
			width: 138px
			height: 70px
			border-right: 1px solid rgba(7, 17, 27, 0.1)
			box-sizing: border-box
			font-weight: 400
			text-align: center
			.score
				font-size: 24px
				color: rgb(255, 153, 0)	
				margin: 5px 11px
			.text
				font-size: 12px
				color: rgb(7, 17, 27)
			.rank
				font-size: 10px
				color: rgb(147, 153, 159)	
				margin-top: 8px
		.score_container
			flex: 1 1 auto
			margin-left: 25px
			.service, .food, .delivery	
				display: flex
				align-items: center
				font: 
					size: 12px
					weight: 400
				.text
					color: rgb(7, 17, 27)
					margin-right: 12px
			.service, .food		
				.score_num
					color: rgb(255, 153, 0)
					margin-left: 12px
			.service
				margin-top: 1px
			.food
				margin: 11px 0			
			.delivery
				margin-bottom: 3px
				.time
					color: rgb(147, 153, 159)	
	.container
		.ratings_wrapper
			.ratings_item
				display: flex
				padding: 18px 0
				margin: 0 18px	
				border-bottom: 1px solid rgba(7, 17, 27, 0.1)
				.avatar_wrapper
					flex: 0 0 auto
					margin-right: 11px
					.avatar
						width: 28px
						height: 28px
						border-radius: 50%
				.rating
					.name
						font: 
							size: 10px
							weight: 400
						color: rgb(7, 17, 27)	
						margin-top: 1px 
					.score_wrapper
						display: flex
						align-items: center
						font-size: 10px
						color: rgb(147, 153, 159)
						margin: 6px 0 8px
						.delivery_time
							margin-left: 8px
					.text
						font: 
							size: 12px
							weight: 400
						line-height: 18px
						color: rgb(7, 17, 27)		
						margin-bottom: 5px	
					.recommend_wrapper
						display: flex
						align-items: center
						flex-wrap: wrap
						.icon_thumb_up
							color: rgb(0, 160, 220)
							font-size: 10px	
							margin: 4px 8px 0 3px
						.recommend
							display: inline-block
							width: 64px
							height: 15px	
							text-align: center
							line-height: 15px
							font: 
								size: 9px
								weight: 400
							color: rgb(147, 153, 159)	
							text-overflow: ellipsis
							overflow: hidden
							white-space: nowrap
							border: 1px solid rgba(7, 17, 27, 0.1)
							border-radius: 2px
							margin-right: 8px
							margin-top: 4px
</style>