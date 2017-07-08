<template>
	<div class="showdetail">
		<div class="header-wrap">
			<div class="step-wrap">
				<span class="active">详情</span>
				<span>下单</span>
				<span>支付</span>
			</div>
			<div class="step-line">
				<div class="ball active1"></div>
				<div class="wire"></div>
				<div class="ball"></div>
				<div class="wire"></div>
				<div class="ball"></div>
				<div class="clear"></div>
			</div>
		</div>
		
		<div class="info">
			<img :src="showdetail.skuList[0].images[1]"/>
			<div class="info-right">
				<p class="info-name">{{showdetail.masterName}}</p>
				<p class="info-time">{{showdetail.slaveName}}</p>
				
				<p class="info-operation">{{min}}-{{max}}元</p>
			</div>
		</div>
		
		<p class="title">演出详情</p>
	  		<div v-html="showimg"></div>
	  	<div class="primary-button"><router-link :to='"/show/showdetail/"+id+"/showorder"'>下一步</router-link></div>
	</div>
</template>

<script>	
import Vue from 'vue'	
import api from '../../common/api'
import axios from 'axios'

export default {
	
	data(){
		return {
			showdetail:{},
			id:this.$route.params.id,
			showimg:'',
			min:280,
			max:1080
		}
	},
	created(){
						
		this.$http.get('/schedule/'+this.id+'/description?__t=1499172411026')
		.then((response)=>{
//			console.log(response)
			this.showimg = response.data.data.desc; 
//			console.log(this.showimg)
		})
		.catch((error)=>{
			console.log(error)
		})
		
		this.$http.get('/schedule/'+this.id+'?__t=1499175364246')
		.then((response)=>{
//			console.log(response)
			this.showdetail = response.data.data;
//			console.log(this.showdetail)
//				var nummax = 0;
//				var nummin = 100000;
//			this.showdetail.options[1].item.map((item)=>{
//				let arr = item.split('');
//				arr.splice(arr.length-1,1);
//				arr.splice(0,2);
//				let str=''
//				arr.map((i)=>{
//					str+=i
//				})
//				let num = str - 0;
//				
//				
//				if(nummax<num){
//					nummax = num
//				}
//				if(nummin>num){
//					nummax = num
//				}
//				console.log(str)
//				this.max = nummax;
//				this.min = nummin;
//			})
			
		})
		.catch((error)=>{
			console.log(error)
		})
	}
}	
</script>

<style>
.showdetail{
	position: absolute;
	top:50px;
	left:0;
}
.showdetail img{
	max-width: 100%;
    display: block;
    margin: 0 auto;
}
.showdetail .title{
	padding-bottom: 6px;
    text-align: center;
    color: rgba(0, 0, 0, 0.87);
    margin: 6px 0;
    font-size: 14px;
}
.primary-button{
	position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    z-index: 500;
    line-height: 50px;
    background-color: #ff5000;
    text-align: center;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    
    font-size: 16px;
}
.primary-button a{
	color: #fff;
}
.header-wrap{
	height: 40px;
}
.step-wrap{
	display: flex;
    text-align: center;
    overflow: visible;
    margin: 4px auto;
    width: 200px;
    
    white-space: nowrap;
    
    color: #000;
}
.step-wrap span{
	font-size: 14px;
	flex: 1;
}
.step-wrap .active{
	color:#ff5000;
}
.step-line{
	width: 180px;
	margin: 0 auto;
}
.step-line .active1{
	background: #ff5000;
	border-color:#ff5000;
}
.ball{
	width:6px;
	height:6px;
	border-radius: 50%;
	border:1px solid #CDCDCD;
	float: left;
}
.wire{
	border-top:1px dashed #CDCDCD;
	float: left;
	width:76px;
	margin-top: 3px;
}


.info{
	padding: 8px 10px 15px 10px;
    box-sizing: border-box;
    background-color: #fff;
    min-height: 80px;
    overflow-x: hidden;
	display: flex;
}
.info img{
	height: 116px;
	width: 80px;
	border-radius:2px;
}
.info-right{
	flex:1;
	padding:10px;
}
.info-name{
	min-height: 40px;
	margin-bottom: 8px;
	font-size: 14px;
	width:210px;
}
.info-time{
	color: rgba(0, 0, 0, 0.54);
	font-size:10px;
	width:100px;
}
.info-operation{
	color: #ff5000;
	margin-top: 10px;
}
</style>