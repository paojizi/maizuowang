<template>
	<div class="alldetail">
		<div class="item-body">
			<div class="carousel">
				<mt-swipe :auto="4000" >
				  <mt-swipe-item v-for="(item,index) in bannerlist">				  	
				  		<img :src="item"/>				  	
				  </mt-swipe-item>		  
				</mt-swipe>
			</div>
			<div class='item-info'>
				<div class="name">{{xiangqing.masterName}}</div>
				<div class="subname">{{xiangqing.slaveName}}</div>
				<div class="price">{{((xiangqing.skuList[0].price)/100).toFixed(2)}}</div>
				<div class="tips"><span>快递：0.00元</span><span>销量：{{xiangqing.displaySalesCount}}</span><span>全国</span></div>				
			</div>
			<div class="sku-pick">
				<span>x{{num}}</span>
				<i class="iconfont">&#xe649;</i>
				<div class="clear"></div>
			</div>
		</div>
		<div v-html="title" class="bottom_img"></div>
		<div class="item-bottom">
			<div class="item-footer-left">
				<div class="item-footer-home">
					<i class="iconfont">&#xe602;</i>
					<p>首页</p>
				</div>
			</div>
			<div class="item-footer-right">
				<router-link to="/register">立即购买</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import api from '../../common/api'
import axios from 'axios'

export default{
	data(){
		return{
			id:this.$route.params.id,
			title:null,
			bannerlist:[],
			xiangqing:{},
			num:1
		}
	},
	created(){
		this.$http.get('/item/desc?id='+this.id)
		.then((response)=>{
//			console.log(response)
			this.title = response.data.data.desc;			
		})
		.catch((error)=>{
			console.log(error)
		})
		
		this.$http.get('/item?id='+this.id)
		.then((response)=>{
			console.log(response)
			this.bannerlist = response.data.data.skuList[0].images;
			this.xiangqing = response.data.data;
		})
		.catch((error)=>{
			console.log(error)
		})
	}

		
	
}
</script>

<style>
.alldetail{
	position: absolute;
	top:50px;
	left:0;
	width:100%;
	background-color: #ebebeb;
}



.mint-swipe{
	height:320px;
}
.mint-swipe .mint-swipe-item{
	height:320px;	
}
.mint-swipe .mint-swipe-item img{
	width:100%;
	height:100%;
}

.item-info{
	padding: 4px 10px;
    background: #fff;
}
.name{
	font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.subname{
	font-size: 12px;
    color: #757575;
    margin-top: 4px;
}
.price{
	margin-top: 4px;
    color: #ff5000;
    font-size: 21px;
    font-weight: 700;
}
.tips{
	margin: 2px 0;
    font-size: 12px;
    color: #757575;
}
.tips span{
	width:33%;
	display: inline-block;
}
.tips span:nth-child(2){
	text-align: center;
}
.tips span:nth-child(3){
	text-align: right;
}

.sku-pick {
    margin: 10px 0;
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    padding: 0 12px;
    background-color: #fff;
}
.sku-pick span{
	float:left;
}
.sku-pick i{
	float:right;
}

.bottom_img{	
	background-color: #fff;
}
.bottom_img p{
	width:100% !important;
}
.bottom_img p img{
	width:320px !important;
}


.item-bottom{
	position: fixed;
    bottom: 0;
    width: 100%;
    height: 48px;
    border-top: 1px solid #ececec;
    background-color: #fff;
    z-index: 100;
    max-width: 600px;
}
.item-footer-left{
	float: left;
    width: 66%;
    height: 100%;
    text-align: left;
    line-height: 24px;
}
.item-footer-right{	
    font-size: 16px;
    float: right;
    width: 33%;
    height: 100%;
    text-align: center;
    line-height: 48px;
    background-color: #ff5000;
}
.item-footer-right a{
	color: #fff;
}
.item-footer-home{
	text-align: center;
    display: inline-block;
    width: 30%;
    padding: 4px 0;
}
.item-footer-home i{
	font-size: 20px;
}
.item-footer-home p{
	font-size: 10px;
    margin-top: -8px;
    opacity: .54;
}
</style>