<template>
	<div class='overlay' v-show='overlayShow'>
		<div class='seller'>
			<h1 class='name'>{{ seller.name }}</h1>
			<div class='score_wrapper'>
				<score :size='48' :score='seller.score'></score>
			</div>
		</div>
		<div class='discount' v-if='seller.supports'>
			<div class='title'>
				<span class='horizental'></span>
				<h2 class='text'>优惠信息</h2>
				<span class='horizental'></span>
			</div>
			<div class='supports_wrapper'>
				<discount :supports='seller.supports' :category='overlay'></discount>
			</div>
		</div>
		<div class='notice'>
			<div class='title'>
				<span class='horizental'></span>
				<h2 class='text'>商家公告</h2>
				<span class='horizental'></span>
			</div>
			<p class='description'>{{ seller.bulletin }}</p>
		</div>
		<div class='close'>
			<i class='icon_close' @click='closeSelf'></i>
		</div>
	</div>
</template>

<script>
import score from '~/score/score'
import discount from '~/discount/discount'
export default {
	props: {
		seller: {
			type: Object
		},
		overlayShow: {
			type: Boolean,
			default: false
		}
	},
	components: {
		score,
		discount
	},
	methods: {
		closeSelf(){
			this.$emit('close')
		}
	},
	data(){
		return {
			overlay: 'overlay'
		}
	}
}	
</script>

<style scoped lang='sass'>
@import '../../assets/style.css'
.overlay
	position: fixed
	width: 100%
	height: 100%
	background: rgba(7, 17, 27, 0.8)
	z-index: 99	
	padding: 0 36px
	box-sizing: border-box
	overflow: auto
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
			margin-bottom: 18px	
	.discount, .notice
		display: flex
		flex-direction: column
		.title
			display: flex
			align-items: center
			box-sizing: border-box
			.horizental
				flex: 1 1 auto
				display: inline-block
				height: 1px 
				background: rgba(255, 255, 255, 0.2)
			.text
				flex: 0 0 auto
				display: inline-block	
				margin: 0 11px
				font: 
					size: 14px
					weight: 700
		.supports_wrapper
			margin-top: 24px			
	.notice
		.title
			margin: 28px 0 23px
		.description
			font-size: 12px
			line-height: 24px
			padding: 0 12px
	.close
		display: flex
		justify-content: center
		.icon_close
			font-size: 19px
			color: rgba(255, 255, 255, 0.5)	
			position: absolute
			bottom: 40px
</style>

<style lang='sass'>
.supports_wrapper .type_wrapper
	margin-left: 12px
</style>

