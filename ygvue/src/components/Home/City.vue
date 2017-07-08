<template>
	<div class="citypage">
		<div class="city-index-title">GPS定位你所在城市</div>
		<div class="city-index-detail">
			<ul class="list-unstyled">
				<li class="city-item-detail" style="color:#e2941a;">深圳</li>
			</ul>
		</div>	
		<div class="city-index-title">热门城市</div>
		<div class="city-index-detail">
			<ul class="list-unstyled">
				<li class="city-item-detail">北京</li>
				<li class="city-item-detail">上海</li>
				<li class="city-item-detail">广州</li>
				<li class="city-item-detail">深圳</li>
			</ul>
		</div>
		<div class="city-index-title">按字母排序</div>
		<div class="city-index-detail">
			<ul class="list-unstyled"> 
				<li class="city-item-detail" v-for="(item,index) in initial" ><a href="javascript:void(0)" @click="goAnchor('#anchor-'+index)">{{item}}</a></li>				
			</ul>
		</div>
		
		<div class="addresssort" v-for="(item,index) in initial">
			<div class="city-index-title" ><a :id="'anchor-'+index">{{item}}</a></div>
			<div class="city-index-detail">
				<ul class="list-unstyled"> 
					<li class="city-item-detail" v-for="(i,j) in citylist" v-if="item == i.pinyin.slice(0,1)">{{i.name}}</li>				
				</ul>
			</div>
		</div>
		
	</div>
</template>

<script>
import Vue from 'vue'	
import api from '../../common/api'
import axios from 'axios'
//import Vuex from 'vuex'

export default{
	data(){
		return{
			initial:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
			citylist:[]
		}
		
	},
	methods: {
	    goAnchor(selector) {
	        var anchor = this.$el.querySelector(selector);
	        console.log(anchor)
	        document.body.scrollTop = anchor.offsetTop;
	    }
	},
	created(){
		this.$http.get(api.addressApi)
		.then((response)=>{
//			console.log(response)
			let list = response.data.data.cities
			this.citylist = list;			
		})
		.catch((error)=>{
			console.log(error)
		})
		
	}
}
</script>

<style>
	
.citypage{
	position:absolute;
	top:50px;	
	left:0;
	width:100%;
	height:300px;
	
}
.city-index-title{
	padding-left: 15px;
    font-size: 14px;
    line-height: 40px;
    background-color: #ebebeb;
    margin-top: -1px;
}
.city-index-detail{
	background-color: #fff;
	
}
.city-item-detail{
	color: #838383;
	width: 25%;
    font-size: 16px;
    line-height: 46px;
    text-align: center;
    display: inline-block;
    cursor: pointer;    
    border-bottom: #ebebeb 1px solid;
    box-sizing: border-box;
}
.city-item-detail a{
	color: #838383;
}
.list-unstyled{
	margin: 0;
	min-width: 320px;
}

</style>