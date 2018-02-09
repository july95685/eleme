<template>
	<div>
		this is listcard
		<div class="listcard-content">
			<img src="../images/test.jpg">
		</div>
	</div>
	
</template>
<script>
  export default {
  	data() {
    	return {
	      test:"123-1",
	    }
	},
  }
</script>
<style>
.listcard-content{
	width:200px;
	height:400px;
	background:#ffd;
}
.listcard-content img{
	width:80%;
	height:160px;
}
</style>