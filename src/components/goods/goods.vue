<template>
	<div class='goods'>
		<div class='menu_wrapper' ref='menu_wrapper'>
			<ul class='menu'>
				<li class='item' v-for='item in goods'><span class='img'></span>{{ item.name }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			goods: []
		}
	},
	mounted(){
		this.$http.get('/api/goods').then(res => {
			this.goods = res.body.goods
		})
	}
}	
</script>

<style scoped lang='sass'>
.goods
	.menu_wrapper
		.menu
			width: 80px
			padding: 0 12px
			background: rgb(243, 245, 247)
			.item
				width: 100%
				height: 54px
				box-sizing: border-box
				font-size: 12px
				color: rgb(7, 17, 27)
				display: table
				vertical-align: middle
				border-bottom: 1px solid rgba(7, 17, 27, 0.1)
</style>