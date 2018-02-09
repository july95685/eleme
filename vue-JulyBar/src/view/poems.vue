<template>
	<div>
		<div class="lofter-header">
    	  <div class="header-link">
    	  	<router-link to="/goods/page">日志</router-link>
	      	<router-link to="/goods/list">目录</router-link>
    	  </div>
		</div>
		<div>
			this is header
		</div>
	    <router-view/>
	
		
	</div>
</template>
<script>
  import poem  from '../components/poem.vue'
  export default {
  	data() {
    	return {
	      poems: [{
	  				'title':'a'
	  			},{
	  				'title':'b'
	  			}],
	      poetries: [],
	      test:"12"
	    }
	},
	components:{
		poem
	},
  	route:{
		data(){
			console.log(123);
	  		return {
	  			poems: [{
	  				'title':'a'
	  			},{
	  				'title':'b'
	  			}],
	  			poetries: [],
	  			test:"123"
	  		}
	  	},
  	}
  }
</script>
<style>
.lofter-header{
    height: 82px;
    margin-bottom: 30px;
    background-color:rgba(0,0,0,0.7);
    display:flex;
}
.header-link{
	height:100%;
	margin-top:35px;
}
.header-link a{
	display:inline-block;
	height: 47px;
    margin: 0 0 0 30px;
    line-height: 24px;
    text-decoration:none;
    color:#999;
}
.header-link a.router-link-active{
	color:#FFF;
}
</style>