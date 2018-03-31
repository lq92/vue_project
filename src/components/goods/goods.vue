<template>
	<div class='goods'>
		<div class='menu_wrapper' ref='menu_wrapper'>
			<ul class='menu'>
				<li class='item_wrapper' v-for='item in goods'>
					<div class='item'>
						<span v-if='item.type >= 0' :class='typeLists[item.type]'></span>
						<span class='text'>{{ item.name }}</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
	data(){
		return {
			goods: [],
			typeLists: [ 'guarantee', 'discount', 'special', 'decrease', 'invoice' ]
		}
	},
	mounted(){
		this.$http.get('/api/goods').then(res => {
			this.goods = res.body.goods
			new BScroll(this.$refs.menu_wrapper, { click: true })
		})
	}
}	
</script>

<style scoped lang='sass'>
@import '../../styles/image'
.goods
	.menu_wrapper
		height: 445px
		overflow: hidden
		.menu
			width: 80px
			padding: 0 12px
			background: rgb(243, 245, 247)
			.item_wrapper
				display: table
				width: 100%
				height: 54px
				box-sizing: border-box
				color: rgb(7, 17, 27)
				border-bottom: 1px solid rgba(7, 17, 27, 0.1)
				&:last-child
					border-bottom: 0
				.item
					display: table-cell
					vertical-align: middle
					font-size: 0
				@each $type in ( guarantee, discount, special, decrease, invoice)
					.#{$type}
						@include image(#{$type}_3)
						display: inline-block
						width: 12px
						height: 12px
						background-size: 12px 12px
						background-repeat: no-repeat
						vertical-align: middle	
						margin-right: 2px
					.text
						vertical-align: middle	
						font-size: 12px
						line-height: 14px
</style>