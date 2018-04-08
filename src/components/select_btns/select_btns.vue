<template>
	<div class='select_btns'>
		<div class='btns_wrapper'>
			<div class='btn positive' :class='{ active: selectType === 2 }' @click='selectRatings(2)'>{{ description.all }}<span class='num'>{{ ratings.length }}</span></div>
			<div class='btn positive' :class='{ active: selectType === 0 }' @click='selectRatings(0)'>{{ description.positive }}<span class='num'>{{ positive.length }}</span></div>
			<div class='btn negative' :class='{ active: selectType === 1 }' @click='selectRatings(1)'>{{ description.negative }}<span class='num'>{{ negative.length }}</span></div>
		</div>
		<div class='toggle_content' :class='{ active: onlyContent }' @click='toggleContent'>
			<i class='icon_check_circle'></i>
			<p class='text'>只看有内容的评价</p>
		</div>
	</div>
</template>

<script>
const ALL = 2;
const POSITIVE = 0;
const NEGATIVE = 1;
export default {
	props: {
		description: {
			type: Object,
			default(){
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
		},
		selectType: {
			type: Number,
			default: ALL
		},
		onlyContent: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		positive(){
			return this.ratings.filter(item => {
				return item.rateType === POSITIVE;
			})
		},
		negative(){
			return this.ratings.filter(item => {
				return item.rateType === NEGATIVE;
			})
		},
	},
	methods: {
		selectRatings(type){
			this.$emit('selectRatings', type)
		},
		toggleContent(){
			this.$emit('onlyContent')
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
			&.active
				background: rgb(0, 160, 220)
				color: #fff
		.negative
			background: rgba(147, 153, 159, 0.2)	
			&.active
				background: rgb(147, 153, 159)
				color: #fff	
	.toggle_content
		display: flex
		align-items: center
		height: 48px
		border-bottom: 1px solid rgba(7, 17, 27, 0.1)
		&.active
			.icon_check_circle
				color: rgb(0, 200, 80)
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