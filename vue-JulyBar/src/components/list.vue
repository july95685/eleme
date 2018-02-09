<template>
	<div>
		this is list
		<list-card></list-card>
	</div>
	
</template>
<script>
  import listCard from '../components/list-card'
  export default {
  	data() {
    	return {
	      test:"123-1",
	    }
	},
	components:{
		listCard
	}
  }
</script>
<style>

</style>