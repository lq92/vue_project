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
		&.star24
			width: 62px
			.ON
				@include image('star24_on')
			.OFF
				@include image('star24_off')
			.HALF
				@include image('star24_half')
			.star
				width: 10px
				height: 10px
				background-size: 10px 10px
				background-repeat: no-repeat
		&.star36
			width: 100px
			.ON
				@include image('star36_on')
			.OFF
				@include image('star36_off')
			.HALF
				@include image('star36_half')
			.star
				width: 15px
				height: 15px
				background-size: 15px 15px
				background-repeat: no-repeat
		&.star48
			width: 184px
			.ON
				@include image('star48_on')
			.OFF
				@include image('star48_off')
			.HALF
				@include image('star48_half')
			.star
				width: 20px
				height: 20px
				background-size: 20px 20px
				background-repeat: no-repeat
</style>