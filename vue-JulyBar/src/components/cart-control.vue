<template>
	<div class="cartcontrol">
		<transition name="cart-move">
			<div style="display:inline-block" v-if="food.count > 0">
					<div class="cart-decrease"  @click.stop.prevent="decCart($event)">
						-
					</div>
					<div class="cart-count" >{{food.count}}</div>
			</div>
		</transition>
		<div class="cart-add" @click.stop.prevent="addCart($event)">+</div>
	</div>
</template>
<script>
	import Vue from 'vue'
	export default {
		props:{
			food:{
				type:Object
			}
		},
		created(){
		},
		methods:{
			addCart(ev){
				console.log('click');
				if(!this.food.count){
					Vue.set(this.food,'count',1);
				}else{
					this.food.count = this.food.count + 1;
				}
				this.$emit('cartaddevent',event.target);
			},
			decCart(ev){
				this.food.count = this.food.count - 1;
			}
		}
	}
</script>
<style>
	.cartcontrol{
		font-size:0;

	}
	.cart-decrease{
		display:inline-block;
		font-size: 18px;
	    line-height: 18px;
	    border:1px solid rgb(0,160,220);
	    color: #000;
	    background:#FFF;
	    height: 20px;
	    width: 20px;
	    text-align: center;
	    vertical-align: middle;
	    border-radius: 50%;
	    vertical-align: top;
	}
	.cart-count{
		display:inline-block;
		color:rgb(147,153,159);
		font-size: 18px;
	    line-height: 22px;
	        vertical-align: top;
	    width:20px;
	    text-align:center;
	}
	.cart-add{
		display:inline-block;
		font-size: 18px;
	    line-height: 22px;
	    background: rgb(0,160,220);
	    color: #FFF;
	    height: 22px;
	    width: 22px;
	    text-align: center;
	    vertical-align: middle;
	    border-radius: 50%;
	        vertical-align: top;
	}
	.cart-move-enter-active {
	  transition: all .3s ease;
	}
	.cart-move-leave-active {
	  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.cart-move-enter, .cart-move-leave-to{
	  transform: translateX(10px);
	  opacity: 0;
	}
</style>