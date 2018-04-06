<template>
	<div class='food'>
		<div class='wrapper'>
			<div class='info'>
				<img width='100%' height='auto' :src='food.image'>
				<h3 class='name'>{{ food.name }}</h3>
				<p class='sell_count'>月售{{ food.sellCount }}份<span>好评率{{ food.rating }}%</span></p>
				<p class='price'>{{ food.price }}<span class='old_price'>{{ food.oldPrice }}</span></p>
			</div>
			<div class='introduct'></div>
			<div class='ratings'></div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		food: Object
	}
}	
</script>

<style lang='sass' scoped>
.food
	position: absolute
	top: 0
	left: 0
	width: 100%
	height: 100%
	background: rgba(7, 17, 27, 0.6)		
	z-index: 80 
	backdrop-filter: blur(10px)
	overflow: hidden
	.wrapper
		display: flex
		flex-direction: column
		.info
</style>