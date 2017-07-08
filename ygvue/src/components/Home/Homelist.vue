<template>
	<div class="homelistbox">
		<ul class="homelist">
			<li v-for="(item,index) in homelist" >
				<router-link :to='"/home/detail/"+item.id'>
					<div class="listimgbox">
						<img :src="item.cover.origin" />
					</div>					
					<div class="listtxt">
						<div class="listtxtleft">
							<p class="listtxtleft_1">{{item.name}}</p>
							<p class="listtxtleft_2">
								<span>{{item.cinemaCount}}</span>
								<span>家影院上映</span>
								<span>{{item.watchCount}}</span>
								<span>人购票</span>
							</p>
						</div>					
						<div class="listtxtright">{{item.grade}}</div>
					</div>
				</router-link>
			</li>
		</ul>
		
		<div class="more-button">
			<router-link to="/film" @click="Film1">
			更多热映电影
			</router-link>
		</div>
		
		<div class="dividing-line">
			<div class="upcoming">即将上映</div>
		</div>
		
		<ul class="homelistmore">
			<li v-for="(item,index) in homelistmore" >
				<router-link :to='"/home/detail/"+item.id'>
					<div class="listimgbox">
						<img :src="item.cover.origin"/>
					</div>
					<div class="listtxtmore">
						<div class="listmoretxtleft">{{item.name}}</div>
						<div class="listmoretxtright">{{item.premiereAt | date}}</div>
					</div>
				</router-link>
			</li>
		</ul>
		
		<div class="more-button"><router-link to="/film" @click="Film">更多即将上映电影</router-link></div>
		<transition name="fade">
			<div class="circle"  v-if="isSelect" @click="Gotop">
				<i class="iconfont icon-top">&#xe619;</i>
			</div>
		</transition>
		
		
	</div>
</template>

<script>
import Vue from 'vue'	
import api from '../../common/api'
import axios from 'axios'
export default {
	data(){
		return {
			homelist:[],
			homelistmore:[],
			isSelect:false
		}
	},
//	computed(){
//		sum:function(){
//			return this.item.premiereAt
//		}
//	},
	methods:{
		Film(){
			this.store.commit('Filmchange1')
		},
		Film1(){
			this.store.commit('Filmchange2')
		},
		menu() {
	        this.scroll = document.body.scrollTop;
//	        console.log(this.scroll)
	        if(this.scroll >= 60){
	        	this.isSelect = true;
	        }else{
	        	this.isSelect = false
	        }
	    },
	    Gotop(){
	    	document.body.scrollTop = 0;
	    }
	},
	mounted() {
      window.addEventListener('scroll', this.menu)
    },
	created(){
		this.$http.get(api.homelistApi)
		.then((response)=>{
//			console.log(response.data.data.films)
			let list = response.data.data.films
			this.homelist = list;
			
		})
		.catch((error)=>{
			console.log(error)
		})
		
		this.$http.get(api.homelistmoreApi)
		.then((response)=>{
			
			let list = response.data.data.films
			this.homelistmore = list;
//			console.log(this.homelistmore)
			
		})
		.catch((error)=>{
			console.log(error)
		})
		
		Vue.filter('date', function(i){
			var date = new Date(i);
			return `				
				${date.getMonth()+1}月${date.getDate()}日上映				
			`
		})
		
	}
}
</script>

<style scoped>
@keyframes enter{
	from{
		transform: translateY(210px);
	}
	to{
		transform: translateY(0px);
	}
}
@keyframes leave{
	from{
		transform: translateY(0px);
	}
	to{
		transform: translateY(210px);
	}
}
.fade-leave-active{
	animation: leave 1s;
}

.fade-enter-active{
	animation: enter 0.7s;
}


.homelistbox{
	position: absolute;
	top:230px;
	left:0;
	width:100%;
	background-color: #f9f9f9;
}	
.homelist{
	padding-top: 18px;
	padding-left: 0;    
    margin-bottom: 10px;
    
}
.homelist li{
	margin: 0 17px 17px 17px;
   box-shadow: 0.5px 0.5px 1px #a8a8a8;
    cursor: pointer;
    box-sizing: border-box;
    
}
.listimgbox{
	overflow: hidden;
    
    box-sizing: border-box;
    max-width: 100%;
    height: auto;
}
.listimgbox img{
	width: 100%;
    transition: all 1.2s ease;
    opacity: 1;
    vertical-align: middle;
    border: 0;
}
.listtxt{
	
    height: 50px;
    box-sizing: border-box;
    background: white;
   
}
.listtxtleft{
	height: 50px;
    padding-right: 0;
    padding-top: 13px;
    padding-left: 10px;
    
    float: left;
    
    min-height: 1px;
}
.listtxtleft_1{
	font-size: 12px;
    line-height: 15px;
    user-select: text;
    box-sizing: border-box;
    color:black;
}
.listtxtleft_2{
	font-size: 8px;
    color: #9a9a9a;
    line-height: 15px;
    box-sizing: border-box;
}
.listtxtleft_2 span{
	font-size: 8px;
    color: #9a9a9a;
    line-height: 15px;
}
.listtxtright{		
	float: right;	
    min-height: 1px;    
    box-sizing: border-box;
    color: #f78360;
    display: inline-block;
    line-height: 50px;    
    margin-right: 15px;
    font-size: 18px;
}
.homelistmore a{
	color:black;
}

.more-button{
	width: 160px;
    height: 30px;
    border: 1px solid #aaa;
    border-radius: 15px;
    margin: 10px auto 30px;
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    color: #616161;
    cursor: pointer;
}
.more-button a {
	color: #616161;
}
.dividing-line{
    position: relative;
    margin-top: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid #a8a8a8;
}

.upcoming{
	width: 65px;
    height: 20px;
    margin: 0 auto;
    margin-bottom: -10px;
    border-radius: 5px;
    font-size: 10px;
    line-height: 20px;
    text-align: center;
    color: #616161;;
    background-color: #a7a7a7;    
}



/*homelistmore部分*/
.homelistmore{
	padding-top: 18px;
	margin-bottom: 10px;
}
.homelistmore li{
	margin: 0 17px 17px 17px;
    background-color: #f9f9f9;
    box-shadow: 0.5px 0.5px 1px #a8a8a8;
    cursor: pointer;
}
.listtxtmore{
	height: 35px;
	box-sizing: border-box;
    background: white;
}
.listmoretxtleft{
	height: 35px;
    padding-right: 0;
    padding-top: 10px;
    padding-left: 28px;
    float: left;
    font-size: 12px;
    line-height: 15px;
}
.listmoretxtright{
	float: right;
	font-size: 10px;
    color: RGB(245, 162, 125);
    line-height: 15px;
    height: 35px;    
    padding-top: 10px;
   margin-right: 20px;
}
.more-button{
	width: 160px;
    height: 30px;
    border: 1px solid #aaa;
    border-radius: 15px;
    margin: 10px auto 30px;
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    color: #616161;
    cursor: pointer;
}


.circle{
	background-color: rgba(0,0,0,0.7);
    width: 48px;
    height: 48px;
    line-height: 48px;
    color: #fff;
    text-align: center;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    position: fixed;
    bottom:10px;
    right:10px;
}
.icon-top{	
	line-height: 48px;
    color: #fff;
    text-align: center;
    font-size: 28px;
}

</style>