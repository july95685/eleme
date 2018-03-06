<template>
	<div class="rs">
		<div class="rs-type">
			<div :class="{'active':selectType === 2}" @click="chooseType(2)">{{desc.all}} <span>{{ratings.length}}</span></div>
			<div class="positive" :class="{'active':selectType === 0}" @click="chooseType(0)">
				{{desc.positive}} <span>{{ratingPitLength}}</span>
			</div>
			<div class="negative" :class="{'active':selectType === 1}" @click="chooseType(1)">
				{{desc.negative}} <span>{{ratingGatLength}}</span>
			</div>
		</div>
		<div class="rs-switch" @click="toggleContent" :class="{'active':onlyShowContent}">
			<span>只看有内容的评价</span>
		</div>
		<div class="rs-rating">
			<div v-for="item in ratings" v-show="!onlyShowContent ||  item.text">
				<div class="ratingsItem" v-show="selectType == 2 || item.rateType == selectType">
					<div class="ratingTop">
						<div class="rat-Date">{{item.rateTime | formatDate}}</div>
						<div class="rat-userInfo">
							<span>{{item.username}}</span>
							<img :src="item.avatar" :width="20" :height="20"></img>
						</div>
					</div>
					<div class="ratingContent">
						<div class="contentText">{{item.text}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import star from '../components/star.vue'
	import {formatDate} from '../formatDate.js'
	const POSITION = 0;
	const NEGATIVE = 1;
	const All = 2;
	export default {
		data(){
			return {
				onlyShowContent:false
			}
		},
		props:{
			ratings:{
				type:Array,
				default(){
					return []
				}
			},
			selectType:{
				type:Number,
				default:All
			},
			onlyContent:{
				type:Boolean,
				default:false
			},
			desc:{
				type:Object,
				default(){
					return {
						all:'全部',
						positive:"满意",
						negative:"不满意"
					}
				}
			}
		},
		methods:{
			chooseType(type){
				this.$emit("change-selecttype",type)
			},
			getItem(item){
				return new Date(parseInt(item.rateTime) * 1000).toLocaleString().substr(0,17)
			},
			toggleContent(){
				this.onlyShowContent = !this.onlyShowContent
			}
		},	
		filters:{
			formatDate:function(time){
				let date = new Date(time);
				return formatDate(date,'yyyy-MM-dd hh:mm')
			}
		},
		computed:{
			ratingPitLength(){
				let len = 0;
				this.ratings.forEach(function(val,ind){
					if(val.rateType == 0){
						len++
					}
				})
				return len;
			},
			ratingGatLength(){
				let len = 0;
				this.ratings.forEach(function(val,ind){
					if(val.rateType == 1){
						len++
					}
				})
				return len;
			},
			ratingDate(){
				
				return '2223';
			}
		}
	}
</script>
<style scoped>
	.rs{
		padding: 5px 15px 0 15px;
	}
	.rs-type{
   		text-align: left;
	    padding-bottom: 24px;
	    border-bottom: 1px solid rgba(7,17,27,0.1);
	}
	.rs-type div{
		color:rgb(77,85,93);
		display:inline-block;
		padding: 8px 15px;
	    border-radius: 5px;
	    font-weight:700;
	    background-color: rgba(0,160,220,0.2);
	}
	.rs-type div span{
	    font-size: 13px;
	}
	.rs-type div.active{
 		background-color: rgb(0,160,220) !important;
 		color:#FFF !important;
	}
	.rs-type div.positive{
		color:rgb(77,85,93);
		background-color: rgba(0,160,220,0.2);
	}
	.rs-type div.negative{
		color:rgb(77,85,93);
		background-color: rgba(77,85,93,0.2);
	}
	.rs-switch{
		text-align:left;
		padding: 12px 0 12px 0;
	    color: rgba(147,150,159,0.7);
	    line-height: 40px;
	    height: 40px;
	    font-weight: 700;
	    font-size: 17px;
	    border-bottom:1px solid rgba(7,17,27,0.1);
	}
	.ratingTop{
		display:flex;
    	justify-content: space-between;
    	height:20px;
    	line-height:20px;
    	font-size: 14px;
    	color: rgba(7,17,27,0.5);
    	margin-top:15px;
	}
	.rs-rating{
		
	}
	.rs-switch.active{
		color: rgba(0,160,220,0.2) !important;
	}
	.rat-userInfo img{
		border-radius:50%;
	}
	.rat-userInfo span{
		vertical-align: top;
	}
	.contentText{
		text-align: left;
	    font-size: 17px;
	    color: #000;
	    font-weight: 700;
	    border-bottom: 1px solid rgba(7,17,27,0.2);
    	padding: 10px 0 10px 5px;
	}
</style>