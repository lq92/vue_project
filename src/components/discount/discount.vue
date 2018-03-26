<template>
	<div class='discount'>
		<ul class='type_wrapper'>
			<li v-for='(item, index) in supports' class='text'><span class='img' :class='types[supports[index].type]'></span>{{ item.description }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		supports: {
			type: Array
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
	.type_wrapper
		.text
			display: flex
			align-items: center
			font-size: 12px
			margin-bottom: 12px
			&:last-child
				margin-bottom: 0
			.decrease
				@include image('decrease_2')
			.discount
				@include image('discount_2')
			.special
				@include image('special_2')
			.invoice
				@include image('invoice_2')
			.guarantee
				@include image('guarantee_2')
			.img
				display: inline-block
				width: 16px
				height: 16px
				margin-right: 6px
				background-size: 16px 16px
				background-position: left center
				background-repeat: no-repeat
</style>