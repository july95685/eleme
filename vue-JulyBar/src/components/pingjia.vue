<template>
	<div class="rating">
		<div class="star">
			<div class="rat">
				<div class="rat-header">
					<div class="rat-headContent">
						<div class="head-num">
							{{score}}
						</div>
						<div class="head-text">
							综合评分
						</div>
						<div class="head-rat">
							高于周边商家{{rankRate}}
						</div>
					</div>
					<div style="flex:1; ">
						<div class="left-wrapper">
							<div class="left-title">服务态度</div>
							<star :size="36" :score="4.0"></star>
						</div>
						<div class="left-wrapper">
							<div class="left-title">商品评分</div>
							<star :size="36" :score="4.0"></star>
						</div>
					</div>
				</div>
			</div>
		</div>
		<splite></splite>
	</div>
</template>
<script>
	import ratingSelect from '../components/rating-select.vue'
	import splite from '../components/splite.vue'
	import star from '../components/star.vue'
	const POSITION = 0;
	const NEGATIVE = 1;
	const All = 2;
	export default{
		props:{
			size:{
				type:Number
			},
		},
		data(){
			return {
			foodFlag:false,
			selectType:2,
			onlyContent:true,
			desc:{
				all:"全部",
				positive:"推荐",
				negative:"吐槽"
			},
			deliveryTime: 38,
		    score: 4.2,
		    serviceScore: 4.1,
		    foodScore: 4.3,
		    rankRate: 69.2,
			rating: [
			    {
			      "username": "3******c",
			      "rateTime": 1469281964000,
			      "deliveryTime": 30,
			      "score": 5,
			      "rateType": 0,
			      "text": "不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.",
			      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			      "recommend": [
			        "南瓜粥",
			        "皮蛋瘦肉粥",
			        "扁豆焖面",
			        "娃娃菜炖豆腐",
			        "牛肉馅饼"
			      ]
			    },
			    {
			      "username": "2******3",
			      "rateTime": 1469271264000,
			      "deliveryTime": "",
			      "score": 4,
			      "rateType": 0,
			      "deliveryTime": "",
			      "text": "服务态度不错",
			      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			      "recommend": [
			        "扁豆焖面"
			      ]
			    },
			    {
			      "username": "3******b",
			      "rateTime": 1469261964000,
			      "score": 3,
			      "rateType": 1,
			      "text": "",
			      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			      "recommend": []
			    },
			    {
			      "username": "1******c",
			      "rateTime": 1469261864000,
			      "deliveryTime": 20,
			      "score": 5,
			      "rateType": 0,
			      "text": "良心店铺",
			      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			      "recommend": []
			    },
			    {
			      "username": "2******d",
			      "rateTime": 1469251264000,
			      "deliveryTime": 10,
			      "score": 4,
			      "rateType": 0,
			      "text": "",
			      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			      "recommend": []
			    },
			    {
			      "username": "9******0",
			      "rateTime": 1469241964000,
			      "deliveryTime": 70,
			      "score": 1,
			      "rateType": 1,
			      "text": "送货速度蜗牛一样",
			      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			      "recommend": []
			    },
			    {
			      "username": "d******c",
			      "rateTime": 1469231964000,
			      "deliveryTime": 30,
			      "score": 5,
			      "rateType": 0,
			      "text": "很喜欢的粥店",
			      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			      "recommend": []
			    },
			    {
			      "username": "2******3",
			      "rateTime": 1469221264000,
			      "deliveryTime": "",
			      "score": 4,
			      "rateType": 0,
			      "text": "量给的还可以",
			      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			      "recommend": []
			    },
			    {
			      "username": "3******8",
			      "rateTime": 1469211964000,
			      "deliveryTime": "",
			      "score": 3,
			      "rateType": 1,
			      "text": "",
			      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			      "recommend": []
			    },
			    {
			      "username": "a******a",
			      "rateTime": 1469201964000,
			      "deliveryTime": "",
			      "score": 4,
			      "rateType": 0,
			      "text": "孩子喜欢吃这家",
			      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			      "recommend": [
			        "南瓜粥"
			      ]
			    },
			    {
			      "username": "3******3",
			      "rateTime": 1469191264000,
			      "deliveryTime": "",
			      "score": 4,
			      "rateType": 0,
			      "text": "粥挺好吃的",
			      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			      "recommend": []
			    },
			    {
			      "username": "t******b",
			      "rateTime": 1469181964000,
			      "deliveryTime": "",
			      "score": 3,
			      "rateType": 1,
			      "text": "",
			      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			      "recommend": []
			    },
			    {
			      "username": "f******c",
			      "rateTime": 1469171964000,
			      "deliveryTime": 15,
			      "score": 5,
			      "rateType": 0,
			      "text": "送货速度很快",
			      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			      "recommend": []
			    },
			    {
			      "username": "k******3",
			      "rateTime": 1469161264000,
			      "deliveryTime": "",
			      "score": 4,
			      "rateType": 0,
			      "text": "",
			      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			      "recommend": []
			    },
			    {
			      "username": "u******b",
			      "rateTime": 1469151964000,
			      "deliveryTime": "",
			      "score": 4,
			      "rateType": 0,
			      "text": "下雨天给快递小哥点个赞",
			      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			      "recommend": []
			    },
			    {
			      "username": "s******c",
			      "rateTime": 1469141964000,
			      "deliveryTime": "",
			      "score": 4,
			      "rateType": 0,
			      "text": "好",
			      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			      "recommend": []
			    },
			    {
			      "username": "z******3",
			      "rateTime": 1469131264000,
			      "deliveryTime": "",
			      "score": 5,
			      "rateType": 0,
			      "text": "吃了还想再吃",
			      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			      "recommend": []
			    },
			    {
			      "username": "n******b",
			      "rateTime": 1469121964000,
			      "deliveryTime": "",
			      "score": 3,
			      "rateType": 1,
			      "text": "发票开的不对",
			      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
			      "recommend": []
			    }]
			}
		},
		components:{
			ratingSelect,star,splite
		}
	}
</script>
<style scoped>
	.star{

	}
	.rat{
		
	}
	.rat-headContent{
		width:42%;
		margin: 10px 5px;
		border-right: 1px solid rgba(7,17,27,0.2);
	}
	.head-num{
	    font-size: 32px;
    	color: rgb(256,139,16);
	}
	.head-text{
		font-size:18px;
		color:rgb(7,17,27);
		font-weight:700;
	}
	.head-rat{
		color: rgba(7,17,27,0.1);
		font-size:15px;
	}
	.rating{
		position:absolute;
		top:180px;
		overflow:hidden;
		bottom:0;
		left:0;
		width:100%;
	}
	.rat-header{
		display:flex;
	}
	.left-wrapper{
		display:flex;

	}
	.left-title{

	}
</style>