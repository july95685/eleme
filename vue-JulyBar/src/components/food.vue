<template>
	<div class="food" v-show="foodFlag">
		<div class="food-content">
			<div class="image-header">
				<img :src="food.image"></img>
				<div class="close" @click="closeDialog()"> X </div>
			</div>
			<div class="content">
				<h1 class="food-title">{{food.name}}</h1>
				<div class="food-detail">
					<span class="sell-count">月售{{food.sellCount}}</span>
					<span class="rating">好评率{{food.rating}}%</span>
				</div>
				<div class="food-price">
					<span class="price">¥{{food.price}}</span>
					<span v-show="food.oldPrice" class="price-old">原价:¥{{food.oldPrice}}</span>
				</div>
			</div>
		</div>
		
	</div>
</template>
<script>
	export default{
		props:{
			food:{
				type:Object
			}
		},
		data(){
			return{
				foodFlag:false
			}
		},
		methods:{
			show(){
				console.log(this.food);
				this.foodFlag = true;
			},
			closeDialog(){
				this.foodFlag = false;
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
	.image-header{
		position:relative;
		width:100%;
		height:0;
		padding-top:100%;
	}
	.image-header img{
		position:absolute;
		top:0;
		left:0;
		height:100%;
		width:100%
	}
	.close{
	    font-size: 26px;
	    position: absolute;
	    top: 15px;
	    color: #FFF;
	    font-weight: 700;
	    left: 15px;
	}
</style>