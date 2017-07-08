<template>
	<div class="shopdetail">
		<div class="head">
			<img :src="title.image"/>
			<div>{{title.name}}</div>
			<div class="clear"></div>
		</div>
		<div class="list">
			<ul>
				<li v-for="(item,index) in content">
					<div class="xbox">
						<img :src="item.skuList[0].image"/>
						<p>{{item.masterName}}</p>
						<p><span>￥{{((item.skuList[0].price)/100).toFixed(2)}}</span><span>已售{{item.skuList[0].salesCount}}</span></p>
					</div>
					
				</li>
				<div class="clear"></div>
			</ul>
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
			title:{},
			page:1,
			num:20,
			content:[]
		}
	},
	created(){
		this.$http.get('/category?id='+this.id)
		.then((response)=>{
//			console.log(response)
			this.title = response.data.data;			
		})
		.catch((error)=>{
			console.log(error)
		})
		
		this.$http.get('/category/items?id='+this.id+'&page='+this.page+'&num='+this.num)
		.then((response)=>{
//			console.log(response)
			this.content = response.data.data.list;			
		})
		.catch((error)=>{
			console.log(error)
		})
	}
}
</script>

<style scoped>
.shopdetail{
	position: absolute;
	top:50px;
	left:0;
	width:100%;
}

.head{
	padding: 17px 20px;
    margin-bottom: 3px;
    background: #fff url(/public/asset/05df54d3.png) no-repeat;
    background-size: 100% 100%;
    box-sizing: border-box;
}
.head img{
	width: 50px;
    height: 50px;
    float: left;
}
.head div{
	font-size: 16px;
    margin-left: 80px;
    width: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 18px;
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