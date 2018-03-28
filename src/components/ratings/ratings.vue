<template>
	<div class='ratings'>
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
		<div class='container'></div>
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
.ratings
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
</style>