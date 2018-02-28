<template>
	<div class="food" v-show="foodFlag">
		
	</div>
</template>
<script>
	export default{
		props:{
			'food'
		},
		data{
			return{
				foodFlag:true
			}
		}
	}
</script>
<style>
	.food{
		position:fixed;
		left:0;
		top:0;
		bottom:50px;
		z-index:30;
		width:100%;
		background:#FFF;
	}
</style>