<template>
	<div class="activedetail">
		<div class="list">
			<ul>
				<li v-for="(item,index) in title">
					<div class="xbox">
						<img :src="item.image"/>
						<p>{{item.name}}</p>
						<p><span>￥{{((item.price)/100).toFixed(2)}}</span><span>已售{{item.salesCount}}</span></p>
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
			title:[],
			page:1,
			pageSize:20
		}
	},
	created(){
		this.$http.get('/active?id='+this.id+'&page=' +this.page+'&pageSize='+this.pageSize)
		.then((response)=>{
			console.log(response)
			this.title = response.data.data.products;			
		})
		.catch((error)=>{
			console.log(error)
		})
	}
}	
</script>

<style scoped>
.activedetail{
	position: absolute;
	top:50px;
	left:0;
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
