<template>
	<div class='goods'>
		I'm goods
		<score :size='48' :score='5'></score>
	</div>
</template>

<script>
import score from '~/score/score'
export default {
	components: {
		score
	}
}	
</script>

<style scoped lang='sass'>
	
</style>