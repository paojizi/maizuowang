<template>
	<div class="htc">
		<div v-html="title.content"></div>
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
			title:{}			
		}
	},
	created(){
		this.$http.get('/active-detail?cityId=10&id='+this.id)
		.then((response)=>{
			console.log(response)
			this.title = response.data.data.data;			
		})
		.catch((error)=>{
			console.log(error)
		})
	}
}
</script>

<style>
.htc{
	position: absolute;
	top:50px;
	left:0;
}
</style>