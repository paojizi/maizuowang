<template>
	<div>
		<div id="home">    	
			<banner></banner>
			<homelist></homelist>			
	 </div>	 
	</div>
  
</template>

<script>
import Vue from 'vue'
//import router from '../../router'
import Banner from './Banner.vue'
import Homelist from './Homelist.vue'
export default {	
	components:{
		'banner':Banner,
		'homelist':Homelist
	}	
}
</script>

<style scoped>

/*.ani-time{
	animation-duration: 2s;
}*/

</style>
