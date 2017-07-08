<template>
	<div class="showorder">
		<div class="header-wrap">
			<div class="step-wrap">
				<span>详情</span>
				<span class="active">下单</span>
				<span>支付</span>
			</div>
			<div class="step-line">
				<div class="ball"></div>
				<div class="wire"></div>
				<div class="ball active1"></div>
				<div class="wire"></div>
				<div class="ball"></div>
				<div class="clear"></div>
			</div>
		</div>
		
		<div class="sku-wrap">
			<div class="sku-wrapbox">
				<p>时间：</p>
				<ul class="date-list">
					<li class="date-item active">
						<p class="data">{{year}}</p>
						<p class="time">{{dates}}{{time}}</p>
					</li>
				</ul>
			</div>
			<div class="sku-wrapbox">
				<p>票档：</p>
				<ul class="date-list">
					<li class="date-item" v-for="(item,index) in piao">
						<p class="data">{{item.name}}</p>
						<p class="time">{{item.tate}}</p>
					</li>
				</ul>
			</div>
			<div class="sku-wrapbox">
				<p style="float:left;">数量：</p>
				<div class="counter-wrap">
					<div class="counter-wrap_1 iconfont">&#xe710;</div>
					<div class="count">1</div>
					<div class="counter-wrap_1 iconfont">&#xe636;</div>
				</div>
				<div class="clear"></div>
			</div>
		</div>
		
		<div class="operation">
			<div class="value">待付金额：<span></span></div>
			<div class="primary-button">立即下单</div>
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
			showorder:[],
			dates:'',			
			piao:[],
			time:'',
			year:''
		}
	},
	created(){
		this.$http.get('/schedule/'+this.id+'?__t=1499224128455')
		.then((response)=>{
//			console.log(response)
			this.showorder = response.data.data.skuList; 
//			console.log(this.showorder)
			var dat;
			this.showorder.map((item)=>{
				let obj = {};
				dat = item.masterName.split(' ')[0];
				obj.name = item.masterName.split(' ')[2].slice(2,length-1)
				obj.tate = item.masterName.split(' ')[2]				
				this.piao.push(obj)
				
				this.time = item.masterName.split(' ')[1]
				var date = new Date(dat);
				this.year = (date.getMonth()+1)+'月' + (date.getDate())+'日'
				if(date.getDay() == 1){
					this.dates = '周一';
				}
				else if(date.getDay() == 2){
					this.dates = '周二';
				}
				else if(date.getDay() == 3){
					this.dates = '周三';
				}
				else if(date.getDay() == 4){
					this.dates = '周四';
				}
				else if(date.getDay() == 5){
					this.dates = '周五';
				}
				else if(date.getDay() == 6){
					this.dates = '周六';
				}
				else if(date.getDay() == 0){
					this.dates = '周日';
				}
			})
//			console.log(this.piao)
		})
		.catch((error)=>{
			console.log(error)
		})
	}
}

</script>

<style>
.showorder{
	position: absolute;
	top:50px;
	left:0;
	width:100%;
}
.header-wrap{
	height: 40px;
	width:100%;	
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

.sku-wrap{
	padding:10px;
}
.sku-wrap p {
    font-size: 14px;
}
.date-item{	
    font-size: 12px;
    padding-bottom: 5px;
    padding-top: 5px;
    min-width: 86px;
    display: inline-block;
    box-sizing: border-box;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.54);
    border-radius: 4px;
    margin-right: 10px;
    margin-top: 10px;
    color: rgba(0, 0, 0, 0.54);
}

.active{
	border-color: #ff5000;
    color: #ff5000;
}

.sku-wrapbox{
	margin-bottom: 16px;
}

.counter-wrap{
	float:right;
	text-align: center;
    line-height: 26px;
}
.counter-wrap .count {
    width: 34px;
    font-size: 20px;
    float:left;
}
.counter-wrap_1{
	width: 35px;
    height: 26px;
    border:1px solid rgba(0, 0, 0, 0.54);
    color:rgba(0, 0, 0, 0.54);
    float:left;
}

.operation{
	width: 100%;
    background-color: #fff;
    height: 50px;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    position: fixed;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    bottom: 0;
    line-height: 50px;
}
.value {
    font-size: 14px;
    display: inline-block;
    padding-left: 15px;
    font-size: 14px;
}
.primary-button {
    width: 105px;
    position: relative;
    line-height: 50px;
    width: 105px;
    float: right;
    height: 100%;
    font-size: 16px;
    background-color: #ff5000;
    text-align: center;
    transform: translateZ(0);
    color: #fff;
    z-index: 500;
}
</style>