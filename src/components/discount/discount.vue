<template>
	<div class='discount'>
		<ul class='type_wrapper' :class='category'>
			<li v-for='(item, index) in supports' class='text'><span class='img' :class='types[supports[index].type]'></span>{{ item.description }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		supports: {
			type: Array
		},
		category: {
			type: String
		}
	},
	data(){
		return {
			types: ['decrease', 'discount', 'special', 'invoice', 'guarantee']
		}
	}
}	
</script>

<style lang='sass' scoped>
@import '../../styles/image'
.discount 
	.overlay
		.text
			display: flex
			align-items: center
			font-size: 12px
			margin-bottom: 12px
			&:last-child
				margin-bottom: 0
			@each $classname in decrease, discount, special, invoice, guarantee
				.#{$classname}
					@include image(#{$classname}_2)	
			.img
				display: inline-block
				width: 16px
				height: 16px
				margin-right: 6px
				background-size: 16px 16px
				background-position: left center
				background-repeat: no-repeat
	.seller_page
		.text
			display: flex
			align-items: center
			height: 49px
			border-top: 1px solid rgba(7, 17, 27, 0.1)
			font-size: 12px
			@each $classname in decrease, discount, special, invoice, guarantee
				.#{$classname}
					@include image(#{$classname}_4)
			.img
				display: inline-block
				width: 16px
				height: 16px
				margin-right: 6px
				background-size: 16px 16px
				background-position: left center
				background-repeat: no-repeat
</style>