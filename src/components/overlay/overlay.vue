<template>
	<div class='overlay'>
		<div class='seller'>
			<h1 class='name'>{{ seller.name }}</h1>
			<div class='score_wrapper'>
				<score :size='48' :score='seller.score'></score>
			</div>
		</div>
		<div class='discount' v-if='seller.supports'>
			<discount :supports='seller.supports'></discount>
		</div>
		<div class='notice'></div>
	</div>
</template>

<script>
import score from '~/score/score'
import discount from '~/discount/discount'
export default {
	props: {
		seller: {
			type: Object
		}
	},
	components: {
		score,
		discount
	}
}	
</script>

<style scoped lang='sass'>
.overlay
	position: fixed
	width: 100%
	height: 100%
	background: rgba(7, 17, 27, 0.8)
	z-index: 99	
	.seller
		display: flex
		flex-direction: column
		align-items: center
		padding: 64px 0 30px
		box-sizing: border-box
		.name
			font: 
				size: 16px
				weight: 700
			margin-bottom: 19px	
		.score_wrapper	
</style>