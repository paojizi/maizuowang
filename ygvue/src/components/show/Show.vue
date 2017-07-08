<template>
	<div class="show">
	  	<ul>	  		
			<li class="hots" v-for="(item,index) in show">
				<router-link :to='"/show/showdetail/"+item.id'>
	  				<div class="image-wrap">
	  					<img :src="item.skuList[0].image"/>
	  				</div>
	  				<p>{{item.masterName}}</p>
	  				
				</router-link>
			</li>	  		
	  	</ul>		    		    
	</div>
</template>

<script>	
import Vue from 'vue'	
import api from '../../common/api'
import axios from 'axios'

export default {
	
	data(){
		return {
			show:[]
		}
	},
	created(){
						
		this.$http.get('/schedule?__t=1499152566980&pageSize=6&pageNumber=1&sortKey=sortSalesCount&sortType=desc&isMultiSku=1')
		.then((response)=>{
//			console.log(response)
			let list = response.data.data.list;
			this.show = list;
		})
		.catch((error)=>{
			console.log(error)
		})
		
//		Vue.filter('date', function(i){
//			var date = new Date(i);
//			return `				
//				${date.getMonth()+1}月${date.getDate()}日上映     星期${date.getDay()}			
//			`
//		})
	}
}	
</script>

<style>
.show{
	position:absolute;
	top:50px;	
	left:0;
	width:100%;
}
.show ul li{
	background-color: #fff;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin-top: 5px;
    box-sizing: border-box;
    padding: 10px 10px 15px 10px;
    min-height: 200px;
    overflow-x: hidden;
}
.show ul li p{
	font-size: 14px;
	margin: 6px 0 0 0;
	line-height: 1.2em;
	color:black;
}

.image-wrap{
	background-color: #ebebeb;
    box-sizing: border-box;
    width: 100%;
    border-radius: 2px;
}
.image-wrap img{
	width: 100%;
	opacity: 1;
	animation: load-image 0.6s ease forwards;
	display: block;
}
.coupon{
	max-height: 32px;
	margin-top: 10px;
	white-space: nowrap;
	display: inline-flex;
	overflow: hidden;
}
</style>