<template>
	<div class='count_btn'>
		<i class='subtraction icon_remove_circle_outline'></i>
		<span class='num'>{{ 0 }}</span>
		<i class='addition icon_add_circle'></i>
	</div>
</template>

<script>
export default {

}	
</script>

<style lang='sass' scoped>
@import '../../assets/style.css'
.count_btn
	display: flex
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
</style>