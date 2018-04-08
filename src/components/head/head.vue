<template>
	<div class='head'>
		<img class='bg' :src='seller.avatar'>
		<div class='seller_info'>
			<div class='avatar'>
				<img class='img' :src='seller.avatar' />
			</div>
			<div class='info_wrapper'>
				<div class='brand'>
					<h1 class='name'><span class='img'></span>{{ seller.name }}</h1>
				</div>
				<div class='delivery'>
					{{ seller.description }}/{{ seller.deliveryTime }}分钟送达
				</div>
				<div class='supports' v-if='seller.supports'>
					<p class='text'><span class='img'></span>{{ seller.supports[0].description }}</p>
				</div>	
			</div>
			<div class='count' v-if='seller.supports' @click='changeOverlay'>{{ seller.supports.length }}个<i class='icon_keyboard_arrow_right'></i></div>
		</div>
		<div class='notice' @click='changeOverlay'>
			<span class='img'></span>
			<p class='text'>{{ seller.bulletin }}</p>
			<i class='icon_keyboard_arrow_right'></i>
		</div>
		<overlay :seller='seller' :overlay-show='overlayShow' @close='closeOverlay'></overlay>
	</div>
</template>

<script>
const ERR_NO = 0;
import overlay from '~/overlay/overlay'
export default {
	data(){
		return {
			overlayShow: false
		}
	},
	props: {
		seller: {
			type: Object,
			default(){
				return {
					avatar: ''
				}
			}
		}
	},
	components: {
		overlay
	},
	methods: {
		changeOverlay(){
			this._toggle()
		},
		closeOverlay(){
			this._toggle()
		},
		_toggle(){
			this.overlayShow = !this.overlayShow
		}
	}
}	
</script>

<style scoped lang='sass'>
@import '../../styles/image'
@import '../../assets/style.css'
.head
	display: flex
	flex-direction: column
	width: 100%
	height: 134px
	background: rgba(7, 17, 27, 0.5)
	color: #fff
	position: relative
	overflow: hidden
	.bg
		position: absolute
		z-index: -1
		width: 100%
		height: 100%
		filter: blur(10px)
	.seller_info
		display: flex
		position: relative
		width: 100%
		height: 106px
		box-sizing: border-box
		padding: 24px 0 0 24px
		.avatar
			margin-right: 16px
			.img
				width: 64px
				height: 64px
				border-radius: 2px
		.info_wrapper
			flex: 0 0 auto
			.brand
				margin: 2px 0 8px
				.name
					display: flex
					align-items: center
					font:
						weight: 900
						size: 16px
					.img
						@include image('brand')
						background-position: left center
						background-repeat: no-repeat
						background-size: 30px 18px
						display: inline-block
						width: 30px
						height: 18px
						margin-right: 6px
			.delivery
				font: 
					size: 12px
					weight: 200			
			.supports
				margin-top: 10px
				.text
					display: flex
					align-items: center
					font-size: 10px
					.img		
						@include image('decrease_1')
						background-size: 12px 12px
						background-repeat: no-repeat
						margin-right: 4px
						display: inline-block
						width: 12px
						height: 12px
		.count
			display: flex
			align-items: center
			justify-content: center
			position: absolute
			right: 12px
			bottom: 15px	
			width: 43px
			height: 24px
			background: rgba(0, 0, 0, 0.2)		
			font-size: 10px	
			border-radius: 12px
	.notice
		display: flex
		align-items: center
		width: 100%
		height: 28px	
		padding: 0 12px
		box-sizing: border-box
		background: rgba(7, 17, 27, 0.2)
		.img
			flex: 0 0 auto
			@include image('bulletin')
			background-size: 22px 12px
			background-repeat: no-repeat
			background-position: left center
			display: inline-block	
			width: 22px
			height: 12px
			margin-right: 4px
		.text
			flex: 1 1 auto
			overflow: hidden
			text-overflow: ellipsis
			white-space: nowrap
			font-size: 10px	
</style>