<template>
	<div class='select_btns'>
		<div class='btns_wrapper'>
			<div class='btn positive' :class='{ active: selectBtn }' @click='selectRatings'>{{ description.all }}<span class='num'>{{ ratings.length }}</span></div>
			<div class='btn positive' :class='{ active: selectBtn }' @click='selectRatings'>{{ description.positive }}<span class='num'>{{ positive.length }}</span></div>
			<div class='btn negative' :class='{ active: selectBtn }' @click='selectRatings'>{{ description.negative }}<span class='num'>{{ negative.length }}</span></div>
		</div>
		<div class='toggle_content'>
			<i class='icon_check_circle'></i>
			<p class='text'>只看有内容的评价</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		description: {
			type: Object,
			default: () => {
				return {
					all: '全部',
					positive: '满意',
					negative: '不满意'
				}
			}
		},
		ratings: {
			type: Array,
			default: () => {
				return []
			}
		}
	},
	data(){
		return {
			positive: [],
			negative: []
		}
	},
	mounted(){
		this.positive = this.ratings.filter(item => {
			return item.rateType === 0;
		})
		this.negative = this.ratings.filter(item => {
			return item.rateType === 1;
		})
	},
	computed: {
		selectBtn(){
			return true
		}
	},
	methods: {
		selectRatings(){

		}
	}
}	
</script>

<style lang='sass' scoped>
@import '../../assets/style.css'
.select_btns
	.btns_wrapper
		display: flex
		padding: 17px 0 18px
		margin: 0 18px
		border-bottom: 1px solid rgba(7, 17, 27, 0.1)
		.btn
			margin-right: 8px
			padding: 10px 12px
			font: 
				size: 12px
				weight: 400
			color: rgb(77, 85, 93)
			.num
				font-size: 8px
				margin-left: 4px	
			&:last-child
				margin: 0
		.positive, .negative
			border-radius: 2px		
		.positive
			background: rgba(0, 160, 220, 0.2)
		.negative
			background: rgba(147, 153, 159, 0.2)		
		.active
			background: rgb(0, 160, 220)
			color: #fff
	.toggle_content
		display: flex
		align-items: center
		height: 48px
		border-bottom: 1px solid rgba(7, 17, 27, 0.1)
		.icon_check_circle
			font-size: 20px
			color: rgb(183, 187, 191)
			margin: 0 6px 0 20px
		.text
			font: 
				size: 12px
				weight: 400
			color: rgb(147, 153, 159)		
</style>