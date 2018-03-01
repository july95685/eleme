<template>
	<div class="star">
		<ratingSelect></ratingSelect>
	</div>
</template>
<script>
	import ratingSelect from '../components/rating-select.vue'
	export default{
		props:{
			size:{
				type:Number
			},
		},
		components:{
			ratingSelect
		}
	}
</script>
<style>
	.star{

	}
</style>