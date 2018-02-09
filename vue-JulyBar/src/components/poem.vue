<template>
	<div>
		{{test}}
		<div v-for="poem of poems">
			{{poem.title}}
		</div>
		<div class="c-poem">
			 <div class="ui grid" v-show="poem.author">
			 	
			 </div>
		</div>
	</div>
	
</template>
<script>
  export default {
  	props: ['poems'],
  	data() {
    	return {
	      test:"123-1",
	    }
	},
  }
</script>
<style>

</style>