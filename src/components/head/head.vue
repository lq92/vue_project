<template>
	<div class='head'>
		<div class='seller_info'>
			<div class='avatar'>
				<img class='img' :src='seller.avatar' />
			</div>
			<div class='info_wrapper'>
				<div class='brand'>
					<h1>{{ seller.name }}</h1>
				</div>
				<div class='delivery'>
					{{ seller.description }}/{{ seller.deliveryTime }}分钟送达
				</div>
			</div>
		</div>
	</div>
</template>

<script>
const ERR_NO = 0;
export default {
	data(){
		return {
			seller: {
				avatar: ''
			}
		}
	},
	created(){
		this.$http.get('/api/seller').then(res => {
      this.seller = res.body.seller
    })
	}
}	
</script>

<style scoped lang='sass'>
@import '../../styles/image.sass'
.head
	width: 100%
	height: 134px
	.seller_info
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
</style>