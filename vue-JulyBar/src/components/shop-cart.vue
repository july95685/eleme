<template>
	<div class="shopcart">
		<div class="shop-content">
			<div class="shop-left">
				<div class="logo-wrapper">
					<div class="logo" :class="{'highLight':totleCount != 0}"> 
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
		<div class="ball-container">
			<div v-for="ball in balls" >
				<transition name="drop" @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
					<div v-show="ball.show" class="ball">
						<div class="ball-inner"></div>
					</div>
				</transition>
			</div>
		</div>
	</div>
</template>
<script>
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
				dropBall:[]
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

</style>