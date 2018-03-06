<template>
	<div class="food" v-show="foodFlag">
		<div class="food-content">
			<div class="image-header">
				<img :src="food.image"></img>
				<div class="close" @click="closeDialog()"> X </div>
			</div>
			<div class="food-cnt">
				<h1 class="food-title">{{food.name}}</h1>
				<div class="food-detail">
					<span class="sell-count">月售{{food.sellCount}}</span>
					<span class="rating">好评率{{food.rating}}%</span>
				</div>
				<div class="food-price">
					<span class="price">¥{{food.price}}</span>
					<span v-show="food.oldPrice" class="price-old">原价:¥{{food.oldPrice}}</span>
				</div>
				<div class="cartControl-wrapper">
					<cartControl :food = "food"></cartControl>
				</div>
				<div class="food-buy" v-show="!food.count || food.count == 0" @click="addFirstFood()">
					加入购物车
				</div>
			</div>
		</div>
		<splite v-show="food.info"></splite>
		<div class="food-info" v-show="food.info">
			<div class="info-title">商品介绍</div>
			<div class="info-content">{{food.info}}{{food.info}}</div>
		</div>

		<splite></splite>
		<div>
			<div class="info-title">商品评价</div>
			<ratingSelect :select-type="selectType" :ratings="food.ratings" :only-content="onlyContent" :desc="desc" @change-selecttype = "changeSelectType"></ratingSelect>
		</div>
	</div>
</template>
<script>
	import ratingSelect from '../components/rating-select.vue'
	import cartControl from '../components/cart-control.vue'
	import splite from '../components/splite.vue'
	import Vue from 'vue'
	export default{
		props:{
			food:{
				type:Object
			}
		},
		data(){
			return{
				foodFlag:false,
				selectType:2,
				onlyContent:true,
				desc:{
					all:"全部",
					positive:"推荐",
					negative:"吐槽"
				}
			}
		},
		methods:{
			show(){
				this.foodFlag = true;
				this.this = 2;
				this.onlyContent = true;
			},
			closeDialog(){
				this.foodFlag = false;
			},
			addFirstFood(event){
				Vue.set(this.food,'count',1);

			},
			changeSelectType(type){
				this.selectType = type;
			}
		},
	
		components:{
			cartControl,splite,ratingSelect
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
		overflow-y:scroll;
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
	.food-cnt{
		position:relative;
		padding: 10px;
	    width: 100%;
	    margin: 0;
	    text-align:left;
	}
	.food-title{
		line-height:16px;
		margin-bottom:8px;
		font-weight:700;
		font-size:16px;
		color:rgb(7,17,27);
	}
	.food-detail{
		margin-bottom:8px;
		line-height:15px;
		font-size:0
	}
	.food-detail .sell-count{
		font-size:15px;
		color:rgb(147,153,159);
	}
	.food-detail .rating{
		margin-left:14px;
		font-size:14px;
		color:rgb(147,153,159);
	}
	.cartControl-wrapper{
		position: absolute;
	    right: 52px;
	    bottom: 20px;
	}
	.food-buy{
		position: absolute;
	    right: 52px;
	    bottom: 20px;
	    z-index:30;
	    height:24px;
	    line-height:24px;
	    font-size:15px;
	    padding:0 12px;
	    border-radius:12px;
	    color:#FFF;
	    background:rgb(0,160,220);	
	}
	.food-info{

	}
	.info-title{
	    text-align: left;
	    font-size: 18px;
	    color: rgb(7,17,27);
	    font-weight: 700;
	    padding: 5px 0 0 15px;
	}
	.info-content{
		text-align: left;
	    font-size: 13px;
	    padding: 5px 15px 0 15px;
	}
	.rat-header{
		display:flex;
	}
</style>