<template>
	<div>
		<div style="display:flex;">
	      <router-link to="/goods">Goods</router-link>
	      <router-link to="/comment">comment</router-link>
	    </div>
		<v-head :seller="seller"></v-head>
		<div class="router">
		  <router-link to="/comment/shangpin">商品</router-link>
	      <router-link to="/comment/pingjia">评价</router-link>
	      <router-link to="/comment/shangjia">商家</router-link>
		</div>
		<router-view/>
	</div>
</template>
<script>
  import vHead from '../components/v-head.vue'
  export default {
  	props: ['poems'],
  	components:{
		vHead
	},
  	data() {
    	return {
	      test:"123-1",
	      seller:{
	      	avator:"/static/img/test.33e3afc.jpg"
	      }
	    }
	},
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
  display: block;
  width:50%;
}
a.router-link-active
{
  color: red;
}
.router{
	display:flex;
	padding:12px;
	border-bottom: 1px solid #e3e3e3;
}
.router a{
	color:#000;
	text-decoration:none;
}
.router a.router-link-active
{
  color: red;
}
</style>