<template>
	<div>
			<div class="shopcart">
		<div class="shop-content">
			<div class="shop-left">
				<div class="logo-wrapper">
					<div class="logo" :class="{'highLight':totleCount != 0}" @click="toggleList"> 
						<span>车</span>
					</div>
					<div class="num" v-show="totleCount > 0">{{totleCount}}</div>
				</div>
				<div class="shop-price" :class="{'highPrice':totleCount != 0}">
					¥{{totlePrice}}
				</div>
				<div class="shop-desc">
					另需配送费¥{{deliveryPrice}}元
				</div>
			</div>
			<div class="shop-right">
				<div class="pay" :class="{'highPay':paySet === '去结算'}">
					{{paySet}}
				</div>
			</div>
		</div>
		<div class="ball-container" v-if="false">
			<div v-for="ball in balls" >
				<transition name="drop" @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
					<div v-show="ball.show" class="ball">
						<div class="ball-inner"></div>
					</div>
				</transition>
			</div>
		</div>
		<transition name="shopcart">
			<div class="shopcart-list" v-show="listShow">
				<div class="list-header">
					<h1 class="shopcart-title">购物车</h1>
					<span class="shopcart-empty" @click="empty">清空</span>
				</div>
				<div class="list-content">
					<ul>
						<li v-for="food in selectFood">
							<span class="shopcart-name">{{food.name}}</span>
							<div class="shopcart-price">
								<span>{{food.price * food.count}}</span>
							</div>
							<div class="cartcontrol-wrapper">
								<cartcontrol :food="food"></cartcontrol>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</transition>
	</div>
	<div class="list-master" v-show="listShow" @click="closeListShow()"></div>
	</div>

</template>
<script>
	import cartcontrol from '../components/cart-control.vue'
	export default {
		props:{
			selectFood:{
				type:Array,
				default(){
					return [{
						price:10,
						count:3
					}];
				}
			},
			deliveryPrice:{
				type:Number,
				default:0
			},
			minPrice:{
				type:Number,
				default:0
			}
		},
		components:{
			cartcontrol
		},
		data(){
			return {
				balls:[{
					show:false
				},{
					show:false
				},{
					show:false
				},{
					show:false
				},{
					show:false
				}],
				dropBall:[],
				fold:true
			}
		},
		computed:{
			totlePrice(){
				let totle = 0;
				this.selectFood.forEach((food) => {
					totle = totle + food.price * food.count;
				})
				return totle;
			},
			totleCount(){
				let count = 0;
				this.selectFood.forEach((food) => {
					count = count + food.count;
				})
				return count;
			},
			paySet(){
				if(this.minPrice - this.totlePrice > 0){
					return '还差¥' + (this.minPrice - this.totlePrice) + '元起送';
				}else{
					return '去结算'
				}
			},
			listShow(){
				if(!this.selectFood.length){
					this.fold = true;
					return false;
				}
				let show = !this.fold;
				return show;
			}
		},
		methods: {
			drop(el){
				console.log(el);
				for(let i = 0;i< this.balls.length;i++){
					let ball = this.balls[i];
					if(!ball.show){
						ball.show = true;
						ball.el = el;
						this.dropBall.push(ball);
						console.log(this.dropBall);
						return;
					}
				}
			},
			beforeDrop(el){
				console.log('beforeDrop');
				let count = this.balls.length;
				console.log(count);
				while(count--){
					let ball = this.balls[count];
					if(ball.show){
						let ball = this.balls[count];
						console.log(el);
					}
				}
			},
			dropping(el,done){
				console.log('dropping')
			},
			afterDrop(el){
				console.log('afterDrop')
			},
			toggleList(){
				console.log(this.selectFood.length);
				if(!this.selectFood.length){
					return ;
				}
				this.fold = !this.fold;
			},
			empty(){
				this.selectFood.forEach(function(val,ind){
					console.log(val);
					val.count = 0;
				})
			},
			closeListShow(){
				this.fold = !this.fold
			}
		}
	}

</script>
<style>
	.shop-content{
		background:#141d27;
		display:flex;

	}
	.shop-left{
		flex:1;
		font-size:0;
		text-align:left;
	}
	.shop-right{
		width:105px;
		background:#2b343c;
	}
	.pay{
		font-size:13px;
		line-height:56px;
		height:56px;
		color:#80858a;
		vertical-align: top;
		font-weight:700;
	}
	.logo-wrapper{
		display: inline-block;
	    position: relative;
	    top: -10px;
	    margin-left: 12px;
	    padding: 6px;
	    width: 56px;
	    height: 56px;
	    background-color: #141d27;
	    box-sizing: border-box;
	    vertical-align: top;
	    border-radius: 50%;
	}
	.logo{
		font-size:24px;
		color:#80858a;
		text-align:center;
		width:100%;
		height:100%;
		background:#2b343c;
		border-radius:50%;
		line-height:44px;
	}
	.shop-price{
		display:inline-block;
		margin-top:14px;
		font-size:20px;
		color:#80858a;
		vertical-align: top;
		padding: 0 12px;
		line-height:24px;
		font-weight:bold;
		border-right:3px solid rgba(255,255,255,0.1); 
	}
	.shop-desc{
		display:inline-block;
		font-size:13px;
		color:#80858a;
		padding-left:12px;
		line-height:24px;
		vertical-align: top;
		margin-top:14px;
	}
	.num{
		position:absolute;
		top:0;
		right:0;
		width:24px;
		height:16px;
		line-height:16px;
		text-align:center;
		font-size:9px;
		color:#FFF;
		background-color:rgb(240,20,20);
		font-weight:700;
		box-shadow:0 4px 8px 0 rgba(0,0,0,0.4);
		border-radius:50%;
	}
	.highLight{
		background-color:rgb(0,160,220);
		color:#FFF;
	}
	.highPrice{
		color:#FFF;
	}
	.highPay{
		color:#FFF;
		font-weight:700;
		background-color:#00b43c;
	}
	.ball-container{

	}
	.ball{
		position:fixed;
		left:32px;
		bottom:22px;
		z-index:200;

	}
	.ball-inner{
		width:16px;
		height:16px;
		border-radius:50%;
		color:red;
	}
	.shopcart-list{
		position:absolute;
		bottom:50px;
		z-index:-1;
		left:0;
		width:100%;

	}
	.list-header{
		height:40px;
		line-height:40px;
		padding:0 18px;
		background:#F3F5F7;
		border-bottom:2px solid rgba(7,17,27,0.2);
	}
	.shopcart-title{
		float:left;
		font-size:14px;
		color:rgb(7,17,27);
		margin:0
	}
	.shopcart-empty{
		float:right;
		font-size:12px;
		color:rgb(0,160,220);
		margin:0;

	}
	.list-content{
		padding:0 12px 10px 12px;
		max-height:147px;
		overflow:auto;
		background:#FFF;
	}
	.list-content li{
		display:flex;
		height:30px;
		position: relative;
	}
	.shopcart-name{
		line-height:30px;
		font-size:14px;
		color:rgb(7,17,27);
	}
	.shopcart-price{
		position:absolute;
		right:120px;
		line-height:30px;
		font-size:14px;
		font-weight:700;
		color:rgb(240,20,20);
	}
	.cartcontrol-wrapper{
		position:absolute;
		right: 20px;
		margin-top: 4px;
	}
	.shopcart-enter-active, .shopcart-leave-active {
	  transition: opacity .5s;
	}
	.shopcart-enter, .shopcart-leave-to{
	  opacity: 0;
	}

	.shopcart-enter-active, .shopcart-leave-active {
	  transition: all .3s ease;
	}
	.shopcart-enter, .shopcart-leave-to{
	  transform: translateY(100px);
	  opacity: 0;
	}
	.list-master{
	    position: fixed;
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: 100%;
	    z-index: -2;
	    background: rgba(7,17,27,0.6);
	    filter:blur(10px);
	}
</style>