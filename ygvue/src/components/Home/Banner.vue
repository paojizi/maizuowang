<template>
	<div class="banner">
		<mt-swipe :auto="4000" :show-indicators="false">
		  <mt-swipe-item v-for="(item,index) in bannerlist">		  	
		  	<img :src="item.imageUrl" :id="item.id"/>		  	
		  </mt-swipe-item>		  
		</mt-swipe>
	</div>
</template>

<script>
import api from '../../common/api'
import axios from 'axios'
export default {
	data(){
		return {
			bannerlist:[]
		}
	},
	created(){
		this.$http.get(api.bannerApi)
		.then((response)=>{
			
			let list = response.data.data.billboards;
			this.bannerlist = list;
			console.log(this.bannerlist)
		})
		.catch((error)=>{
			console.log(error)
		})
	}
}
</script>

<style scoped>
.banner{
	position: absolute;
	top:50px;
	left:0;
	width:100%;
	height:180px;		
}
.mint-swipe{
	height:180px;
}
.mint-swipe .mint-swipe-item{
	height:180px;
	background: red;
}
.mint-swipe .mint-swipe-item img{
	width:100%;
	height:100%;
}
</style>