<template>
	<div class="rat">
		<div class="rat-header">
			<div class="rat-headContent">
				<div class="head-num">
					3.9
				</div>
				<div class="head-text">
					综合评分
				</div>
				<div class="head-rat">
					高于周边商家69.2%
				</div>
			</div>
			<div>
				<star :size="24" :score="4.0"></star>
			</div>
		</div>
	</div>
</template>
<script>
	import star from '../components/star.vue'
	export default {
		components:{
			star
		}
	}
</script>
<style scoped>
	.rat{
		
	}
	.rat-headContent{
		width:42%;
		margin: 10px 5px;
		border-right: 1px solid rgba(7,17,27,0.2);
	}
	.head-num{
	    font-size: 32px;
    	color: rgb(256,139,16);
	}
	.head-text{
		font-size:18px;
		color:rgb(7,17,27);
		font-weight:700;
	}
	.head-rat{
		color: rgba(7,17,27,0.1);
		font-size:15px;
	}
</style>