<template>	
	<div class="shopbannerdetail">
		<div v-html="title"></div>
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
			title:null						
		}
	},
	created(){
		this.$http.get('/active-detail?cityId=10&id='+this.id)
		.then((response)=>{
//			console.log(response)
			this.title = response.data.data.data.content;			
		})
		.catch((error)=>{
			console.log(error)
		})
	}
}
</script>

<style scoped>
.shopbannerdetail{
	position: absolute;
	top:50px;
	left:0;
}
</style>