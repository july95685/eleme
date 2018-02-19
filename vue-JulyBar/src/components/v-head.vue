<template>
	<div class="header">
		<div class="content-wrapper">
			<div class="avator">
				<img width="64" height="64" :src="seller.avator"></img>
			</div>
			<div class="content" @click="showDetail()">
				<div>粥品香坊（大运村）</div>
				<div :class="test">蜂鸟转送/30分钟送达</div>
				<div :class="aaabbb[1]">                     	在线支付满28减5，满50减10
				</div>
			</div>
			<div class="support-count">
				<span>12</span>
			</div>
		</div>
		<div class="bulletin-wrapper"> 
			<span class="bulletin-title">公告</span>
			<span class="bulletin-text">李锦老师警下发言首先认为8是狼，并且并没有可说服人的逻辑。然后他认为5，6，12是狼不会错。理论上当我们认为12是狼，基本会认为警上帮他号票的1是狼，PK警长投票的6是狼，第一轮警长投票的5是狼。但是李锦老师怀疑8是倒勾狼，并且打死5，6，12；那么</span>
		</div>
		<div class="background">
			<img width="100%" height="100%" :src="seller.avator"></img>
		</div>
		<transition name="fade">
			<div v-show="detailShow" class="detail" >
				<div class="detail-wrapper">
					<div class="detail-main">
						<div class="detail-head">
							<span>粥品香坊（大运村）</span>
						</div>
						<div class="star-wrapper">		
							<star :size="48" :score="3.8"></star>
						</div>
						<div class="title" style="">
							<div style="height:50%;flex:1;border-bottom:1px solid #FFF;"></div>
							<div style="padding:0 20px;line-height:30px;font-size:16px;font-weight:700;s">优惠信息</div>
							<div style="height:50%;flex:1;border-bottom:1px solid #FFF;"></div>
						</div>
						<ul v-if="supports" class="supports">
							<li class="support-item" v-for="item in supports" >
								<span class="icon" :class="item.type">{{item.iconText}}</span>
								<span class="text">{{item.description}}</span>
							</li>
						</ul>
						<div class="title" style="">
							<div style="height:50%;flex:1;border-bottom:1px solid #FFF;"></div>
							<div style="padding:0 20px;line-height:30px;font-size:16px;font-weight:700;s">优惠信息</div>
							<div style="height:50%;flex:1;border-bottom:1px solid #FFF;"></div>
						</div>
						<div class="bulletin">
							李锦老师警下发言首先认为8是狼，并且并没有可说服人的逻辑。然后他认为5，6，12是狼不会错。理论上当我们认为12是狼，基本会认为警上帮他号票的1是狼，PK警长投票的6是狼，第一轮警长投票的5是狼。但是李锦老师怀疑8是倒勾狼，并且打死5，6，12；那么
						</div>
					</div>
				</div>
				<div class="detail-close" @click="hideDetail()">
					X
				</div>
			</div>
		</transition>
	</div>
	
</template>
<script>
  import star from '../components/star.vue'
  export default {
  	data() {
    	return {
	      test:"123-1",
	      detailShow: false,
	      supports:[{
	      	description:'在线支付满30减5',
	      	type:'decrease',
	      	iconText:'减'
	      },{
	      	description:'VC无限火球法全场5折',
	      	type:'discount',
	      	iconText:'折'
	      }]
	    }
	},
	components:{
		star
	},
	props:['seller'],
	created(){
		console.log('created');
		console.log(this.test);
		this.aaabbb = ['decrease','discount'];
		this.test = 'decrease'
		this.classMap = ['decrease','discount','special','invoice','guarantee']
	},
	methods:{
		showDetail(){
			this.detailShow = true;
		},
		hideDetail(){
			this.detailShow = false;
		}
	}
  }
</script>
<style >
	body{
		margin:0;

	}
	.avator{
		display:inline-block;
	}
	.header{
		position:relative;
		overflow:hidden;
		background-color:rgba(7,17,27,0.5);
	}
	.content-wrapper{
		color:#FFF;
		font-size:0;
		padding:12px 6px 8px 12px;
		vertical-align:top;
		text-align:left;
		position: relative;
	}	
	.content{
		text-align: left;
		margin-left:16px;
		font-size:14px;
		display:inline-block;
		vertical-align:top;
	}
	.decrease{
		background-color:rgb(58,184,30)
	}
	.discount{
		background-color:rgb(227,136,13)
	}
	.support-count{
		background-color: rgba(256,256,256,0.5);
	    font-size: 14px;
	    position: absolute;
	    right: 8px;
	    bottom: 12px;
	    padding:4px 8px;
	    border-radius:45%;
	}
	.bulletin-wrapper{
		background-color:#f5e79e;
		color:#fff;
		padding:5px 12px;
		text-align:left;
		text-overflow: ellipsis;
	    white-space: nowrap;
	    overflow: hidden;
	}
	.bulletin-title{
		padding:2px 8px;
		font-size:12px;
		background-color:#FFF;
		color:#999;
	}
	.bulletin-wrapper{

	    font-size: 12px;
	    line-height:18px;
	}
	.background{
		position:absolute;
		top:0;
		left:0;
		width:100%;
		height:100%;
		z-index:-1;
		filter:blur(10px);
	}
	.detail{
		position:fixed;
		z-index:100;
		width:100%;
		height:100%;
		top:0;
		left:0;
		overflow:auto;
		background-color:rgba(7,17,27,0.8);
	}

	.fade-leave-active{
	  transition: opacity 0.5s;
	}
	.fade-enter-active {
	  transition: opacity 0.5s;
	}
	.fade-enter, .fade-leave-to{
 	  opacity: 0;
	}

	.detail-wrapper{
	}
	.detail-main{
		margin-top:64px;
		padding-bottom:64px;
			color:#FFF;
	}
	.detail-close{
  		color: #FFF;
  		position:absolute;
  		width:100%;
  		height:32px;
  		margin:-64px auto 0 auto;
  		clear:both;
  		font-size:24px;
  		bottom:32px;
	}
	.clearfix{
		display:inline-block;
	}
	.clearfix:after{
		display:block;
		content:'.';
		height:0;
		line-height:0;
		clear:both;
		visibility:hidden;
	}
	.star-wrapper{
		padding:15px 0;
	}
	.detail-head{
		color:#FFF;
		font-size:20px;
	}
	.title{
		spadding:0 10%;height:30px;display:flex;justify-content:space-between;flex-direction:row;
	}
	.supports{
		list-style: none;
	    width: 80%;
	    margin: 0 auto;
	    font-size: 20px;
	    padding-top: 20px;
	    text-align: left;
	}
	.support-item{
		padding:0 12px;
		margin-bottom:12px;
	}
	.supports .icon{
		padding:0 3px;
		margin-right:15px;
	}
	.bulletin{
		line-height:28px;
		font-size:20px;
		text-align:left;
		padding:0 24px;
	}
</style>