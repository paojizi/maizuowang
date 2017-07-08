<template>
	<div class="detail">
		<img :src="xiangqin.cover.origin" class="detailimg"/>
		<div class="film-word1">影片简介</div>
		<div class="film-word2">
			<span>导&nbsp;&nbsp;演：</span>
			<span>{{xiangqin.director}}</span>
		</div>
		<div class="film-word2">
			<span>主演</span>
			<span v-for="(item,index) in xiangqin.actors">{{item.name}}|</span>
		</div>
		<div class="film-word2">
			<span>地区语言</span>
			<span>{{xiangqin.nation}}({{xiangqin.language}})</span>
		</div>
		<div class="film-word2">
			<span>类型：</span>
			<span>{{xiangqin.category}}</span>
		</div>
		<div class="film-word2">
			<span>上映日期：</span>
			<span></span>
		</div>
		<div class="film-word3">
			{{xiangqin.synopsis}}
		</div>
		<div class="operation">
			<router-link to="/cinema">
				<button>立即购票</button>
			</router-link>					
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
			xiangqin:{}
		}
	},
	created(){
		this.$http.get(api.detailApi+this.id+'?__t=1499083009641')
		.then((response)=>{
			console.log(response)
			this.xiangqin = response.data.data.film
		})
		.catch((error)=>{
			console.log(error)
		})
	}
	
}
</script>

<style>
.detail{
	position: absolute;
	top:50px;
	left:0;
	background: #ebebeb;
	width:100%;
	overflow-y: auto;
}
.detailimg{
	width:100%;
}
.film-word1{
	margin: 16px auto;
    border-left: 16px solid RGB(228, 200, 156);
    font-size: 16px;
    padding-left: 4px;
}
.film-word2{
	height: 18px;
    overflow: hidden;
    margin-bottom: 10px;
    padding-left: 20px;
    font-size: 12px;
    color: #333;
}
.film-word3{
	text-overflow: ellipsis;
    margin-bottom: 80px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 12px;
    color: #333;
}
.operation {
    position: fixed;
    left: 0;
    bottom: 20px;
    width: 100%;
    text-align: center;
    background:#ebebeb;
    border-top:0;
}
.operation button{
	font-size: 14px;
    min-width: 156px;
    height: 36px;
    line-height: 36px;
    border: none;
    background-color: #fe8233;
    padding: 0;
    margin: 0;
    border-radius: 18px;
    color: #fff;
    -webkit-transition: 0.5s ease;
    outline: none;
} 
</style>