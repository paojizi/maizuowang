<template>
	<div class="shopping">
		<mt-swipe :auto="4000" >
		  <mt-swipe-item v-for="(item,index) in bannerlist">
		  	<router-link :to='"/shopping/shopbannerdetail/"+(item.url).slice(item.url.length-4,item.url.length)'>
		  		<img :src="item.imageSrc"/>
		  	</router-link>
		  </mt-swipe-item>		  
		</mt-swipe>
		
		<div class="shops">
			<ul>
				<li class="shop" v-for="(item,index) in navlist">
					<router-link :to='"/shopping/shopdetail/"+(item.seqNum+7)'>
						<a>
							<img :src="item.imageSrc"/>
						</a>
						<div class="category-name">{{item.name}}</div>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="active">
			<div>
				<div class="line"></div>
				<div class="active-contain">
					<div class="active-center">
						<div class="active-left" v-for="(item,index) in activelist">
							<router-link :to='"/shopping/activedetail/"+(item.url).slice(item.url.length-2,item.url.length)'>
								<div class="active-left-content">
									<img :src="item.imageSrc"/>
								</div>
							</router-link>
						</div>
						<div class="clear"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="price active">
			<div class="line"></div>
			<div class="active-title">—&nbsp;有品专区&nbsp;—</div>
			<div class="active-contain">
				<div class="active-center">
					<div class="active-left">
						<div class="active-left-content">
							<router-link :to='"/shopping/htc/"+pricelist[0].url.slice(pricelist[0].url.length-4,pricelist[0].url.length)'>
								<img :src="pricelist[0].imageSrc"/>
							</router-link>
						</div>
					</div>
					<div class="active-left">
						<div class="active-left-content">
							<router-link :to='"/shopping/alldetail/"+pricelist[1].url.slice(pricelist[1].url.length-4,pricelist[1].url.length)'>

								<img :src="pricelist[1].imageSrc"/>
							</router-link>
						</div>
					</div>
					<div class="active-left">
						<div class="active-left-content">
							<router-link :to='"/shopping/alldetail/"+pricelist[2].url.slice(pricelist[2].url.length-4,pricelist[2].url.length)'>
								<img :src="pricelist[2].imageSrc"/>
							</router-link>
						</div>
					</div>
					<div class="clear"></div>
				</div>
			</div>
			
		</div>
		<div class="subject">
			<div v-for="(item,index) in subjectlist">
				<div class="line"></div>
				<div class="subject-center">
					<div class="subject-img">
						<router-link :to='"/shopping/activedetail/"+(item.url).slice(item.url.length-2,item.url.length)'>
						<img :src="item.imageSrc"/>
						</router-link>
					</div>
					<div class="pic-list">
						<ul >
							<li v-for="(i,j) in item.products">
								<router-link :to='"/shopping/alldetail/"+i.id'>
									<img :src="i.image"/>
									<p>{{i.name}}</p>
									<p>￥{{i.price/10}}</p>
								</router-link>
							</li>
							
						</ul>														
					</div>
				</div>
			</div>
		
		</div>
		<div class="list">
			<mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
				<ul>
					<li v-for="(item,index) in content">
						<router-link :to='"/shopping/alldetail/"+item.id'>
							<div class="xbox">
								<img :src="item.skuList[0].image"/>
								<p>{{item.masterName}}</p>
								<p><span>￥{{((item.skuList[0].price)/100).toFixed(2)}}</span><span>已售{{item.skuList[0].salesCount}}</span></p>
							</div>
						</router-link>
					</li>
					<div class="clear"></div>
				</ul>
			</mt-loadmore>
		</div>
		<div class="recommend"></div>
	</div>
</template>

<script>
import Vue from 'vue'
import api from '../../common/api'
import axios from 'axios'
import { Loadmore } from 'mint-ui';

Vue.component(Loadmore.name, Loadmore);

export default {
	data(){
		return {			
			bannerlist:[],
			navlist:[],
			activelist:[],
			pricelist:[],
			subjectlist:[],
			page:1,
			num:20,
			content:[],
			allLoaded: false
		}
	},
	created(){
		this.$http.get('/ad/list')
		.then((response)=>{
//			console.log(response)
			let list = response.data.data;
			list.map((item,index)=>{
				if(item.type == 1){
					this.navlist.push(item)
				}
				if(item.type == 2){
					this.bannerlist.push(item)
				}
				if(item.type == 3){
					this.activelist.push(item)
				}
				if(item.type == 4){
					this.pricelist.push(item)
				}
				if(item.type == 5){
					this.subjectlist.push(item)
				}
			})									
		})
		.catch((error)=>{
			console.log(error)
		})
		
		this.$http.get('/recommend/home?page='+this.page+'&num=' +this.num)
		.then((response)=>{
//			console.log(response)
			this.content = response.data.data.list;			
		})
		.catch((error)=>{
			console.log(error)
		})
	},
	methods:{
		loadBottom(){
		
		this.num+=20;
		this.$http.get('/recommend/home?page='+this.page+'&num=' +this.num)
		.then((response)=>{
//			console.log(response)
			this.content = response.data.data.list;			
		})
		.catch((error)=>{
			console.log(error)
		})
		 		 
		}
	}
}
</script>

<style scoped>
.shopping{
	position:absolute;
	top:50px;
	left:0;
	width:100%;
}
/*以下banner部分*/
.mint-swipe{
	height:92px;
}
.mint-swipe .mint-swipe-item{
	height:92px;	
}
.mint-swipe .mint-swipe-item img{
	width:100%;
	height:100%;
}

.shops{
	background-color: #fff;
    padding: 15px 0;    
    box-sizing: border-box;
}
.shops .shop{
	width: 25%;
    height: 100%;
    margin: 8px 0;
    text-align: center;
    display: inline-block;
}
.shops .shop a{
	outline: none;
	color: #333;
    text-decoration: none;
}
.shops .shop img {
    width: 40px;
    border-right: none;
}
.category-name{
	font-size: 12px;
    text-align: center;
    color: #323232;
    border-right: none;
    box-sizing: border-box;
}

/*以下active部分*/
.active{
	background: #fff;
	box-sizing: border-box;
}
.line {
    height: 8px;
    background: #f2f2f2;
}
.active-contain {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
}
.active-left {
    float: left;
    width: 50%;
    text-align: center;   
    padding-bottom: 6px;
}
.active-left-content {
	
    display: inline-block;
    width: 100%;
    
}
.active-left-content img {
    width: 96%;
    vertical-align: bottom;
}

/*以下为price部分*/
.price{
	text-align: center;
}
.active-title {
    height: 13px;
    font-size: 13px;
    line-height: 13px;
    text-align: center;
    margin-top: 10px;
    color: #323232;
}

/*以下是subject部分*/
.subject-center{
	
	padding: 10px;
    background: #fff;
}
.subject-img{
	width:100%;
}
.subject-img img{
	width:100%;
}
.pic-list{
	width:100%;
	overflow-x: auto;
}
.pic-list ul{
	/*width:552px;*/
	display: flex;
}
.pic-list ul li{
	width: 92px;
	height:130px;
	
}
.pic-list ul li img{
	width:85px;
	height:85px;
}
.pic-list ul li p:nth-child(2){
	font-size: 12px;
    color: #323232;   
    overflow: hidden;
    white-space: nowrap;
    width:80px;     
}
.pic-list ul li p:nth-child(3){
	font-size: 13px;
    color: #ff6640;
    height:20px;
}

.list{
	background-color: #f2f2f2;
	
    min-height: 510px;
    padding-right: 10px;
    padding-left: 10px; 
    padding-bottom: 20px;   
}
.list ul{
	width:100%;
}
.list li{
	position: relative;
    float: left;
    width: 50%;
    text-align: center;
    padding-top: 5px;
       
    margin-top: 3px;
}
.list li img{
	width:100%;
}
.list li p:nth-child(2){
	/*white-space: nowrap;
	overflow:hidden;
	text-overflow:ellipsis;*/
	font-size: 12px;
    height: 34px;
    color: #323232;
    text-align: left;
    padding-left: 6px;
}
.list li p:nth-child(3) span:nth-child(1){
	font-size: 13px;
    color: #ff5000;    
}
.list li p:nth-child(3) span:nth-child(2){
	font-size: 9px;
    color: #999;
    margin-left: 15px;
}
.xbox{
	background: white;
	margin-right: 3px;
	margin-left: 3px;
}
</style>