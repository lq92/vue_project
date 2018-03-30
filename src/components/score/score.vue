<template>
	<div class='score'>
		<ul class='star_wrapper' :class='star_size'>
			<li class='star' v-for='item in results' :class='item'></li>
		</ul>
	</div>
</template>

<script>
const STAR_NO = 5;
const ON = 'ON';
const HALF = 'HALF';
const OFF = 'OFF';
export default {
	props: {
		score: Number,
		size: Number
	},
	computed: {
		star_size(){
			return `star${this.size}`;
		},
		results(){
			let result = [];
			let int = Math.floor(this.score);
			for(let i = 0; i < int; i++){
				result.push(ON);
			}
			if(this.hasFloat()){
				result.push(HALF);
			}
			while(result.length < STAR_NO){
				result.push(OFF)
			}
			return result;
		}
	},
	methods: {
		hasFloat(){
			return Math.floor((this.score * 2)) % 2 > 0;
		}
	}
}	
</script>

<style scoped lang='sass'>
@import '../../styles/image'
.score
	.star_wrapper
		display: flex
		justify-content: space-between	
@each $star, $star_width, $star_size in ( 24, 62px, 10px), (36, 100px, 15px), (48, 184px, 20px)
	.star#{$star}
		width: $star_width
		.ON
			@include image(star#{$star}_on)
		.HALF
			@include image(star#{$star}_half)
		.OFF
			@include image(star#{$star}_off)
		.star
			width: $star_size
			height: $star_size
			background-size: $star_size $star_size
			background-repeat: no-repeat
</style>