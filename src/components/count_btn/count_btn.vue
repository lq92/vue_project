<template>
	<div class='count_btn'>
		<transition name='fade'>
			<i class='subtraction icon_remove_circle_outline' v-show='food.count > 0' @click='decrease'></i>
		</transition>
		<transition>
			<span class='num' v-show='food.count > 0'>{{ food.count }}</span>
		</transition>
		<i class='addition icon_add_circle' @click='increase'></i>
	</div>
</template>

<script>
export default {
	props: {
		food: Object
	},
	methods: {
		increase(){
			if(!this.food.count){
				this.$set(this.food, 'count', 1)
			}else{
				this.food.count++
			}
		},
		decrease(){
			this.food.count--;
		}
	}
}	
</script>

<style lang='sass' scoped>
@import '../../assets/style.css'
.count_btn
	display: flex
	position: relative
	.subtraction
		position: absolute
		left: -20px
	.subtraction, .addition
		font-size: 20px
		color: rgb(0, 160, 220)
	.num
		display: inline-block
		width: 28px
		height: 20px
		text-align: center
		line-height: 20px
		color: rgb(147, 153, 159)
		font: 
			size: 10px
			weight: 400
	.fade-enter-active, .fade-leave-active
		transition: all 0.6s
	.fade-enter, .fade-leave-to
		left: 0
</style>