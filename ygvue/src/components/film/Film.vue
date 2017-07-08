<template>
	<div class="film">
		<mt-navbar v-model="selected" >
		  <mt-tab-item id="1" >正在热映</mt-tab-item>
		  <mt-tab-item id="2" >即将上映</mt-tab-item>		  
		</mt-navbar>
		
		<mt-tab-container v-model="selected">
			
		  <mt-tab-container-item id="1">
		  	<mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
		  	<ul>
		  		
		  		<mt-cell v-for="(item,index) in hotshowing">
		  			
		  			<li class="hots">
		  				
		  				<router-link :to='"/home/detail/"+item.id'>
			  				<div class="film-item-img"><img :src="item.cover.origin"/></div>
			  				<div class="film-desc">
			  					<div class="film-name">{{item.name}}</div>
			  					<div class="film-grade">{{item.grade
	}}</div>
								<div class="clear"></div>
			  					<div class="film-intro">{{item.intro}}</div>
			  					<div class="film-counts">
			  						<span>{{item.cinemaCount}}</span>
			  						<span>家影院上映</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			  						<span>{{item.watchCount}}</span>
			  						<span>人购票</span>
			  					</div>
			  					
			  				</div>
			  				<div class="clear"></div>
		  				</router-link>
		  				
		  			</li>
		  			
		  		</mt-cell>
		  		
		  	</ul>
		  	</mt-loadmore>
		  </mt-tab-container-item>
		  
		  <mt-tab-container-item id="2">
		  	<!--<mt-loadmore :bottom-method="loadBottom2" :bottom-all-loaded="allLoaded2" ref="loadmore">-->
		  	<ul>
		  		 <mt-cell v-for="(item,index) in coming">
		  		 	
		    		<li class="coming">
		    			
		    			<router-link :to='"/home/detail/"+item.id'>
			    			<div class="film-item-img"><img :src="item.cover.origin"/></div>
			  				<div class="film-desc">
			  					<div class="film-name">{{item.name}}</div>		  												
			  					<div class="film-intro">{{item.intro}}</div>
			  					<div class="film-counts" style="color:#ffb375;">
			  						<span>{{item.premiereAt | date}}</span>		  								  														
			  					</div>		  					
			  				</div>
			  				<div class="clear"></div>
		  				</router-link>
		  				
		    		</li>
		    		
		    	</mt-cell>
		  	</ul>
		  	<!--</mt-loadmore>-->
		  </mt-tab-container-item>
		 
		</mt-tab-container>
		
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
import { Navbar, TabItem,TabContainer, TabContainerItem,Cell,Loadmore } from 'mint-ui';


Vue.component(Loadmore.name, Loadmore);

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Cell.name, Cell);


export default {
	
	data(){
		return {
			page:1,
			count:7,
			hotshowing:[],
			selected:'1',
			page1:1,
			count1:7,
			coming:[],
			isSelect:false,
			allLoaded:false						
		}
	},	
	
	created(){
		
		this.$http.get(api.filmApi + 'page=' + this.page + '&count=' + this.count)
		.then((response)=>{
//			console.log(response)
			let list = response.data.data.films;
			this.hotshowing = list;
		})
		.catch((error)=>{
			console.log(error)
		})
		
		this.$http.get(api.comingApi + 'page=' + this.page1 + '&count=' + this.count1)
		.then((response)=>{
//			console.log(response)
			let list = response.data.data.films;
			this.coming = list;
		})
		.catch((error)=>{
			console.log(error)
		})
		
		Vue.filter('date', function(i){
			var date = new Date(i);
			return `				
				${date.getMonth()+1}月${date.getDate()}日上映     星期${date.getDay()}			
			`
		})
	},
	methods:{
		loadBottom(){
	    	this.count += 7;
	    	this.$http.get(api.filmApi + 'page=' + this.page + '&count=' + this.count)
			.then((response)=>{
//				console.log(response)
				this.hotshowing = response.data.data.films;
				 
			})
			.catch((error)=>{
				console.log(error)
			})						
	  },	   
		menu(){
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
    }
}	
</script>

<style>
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

.film{
	position:absolute;
	top:50px;	
	left:0;
	width:100%;
	
}

.is-selected{
	color:#fe6e00 !important;
	border-bottom: 7px solid #fe6e00 !important;
}
.mint-tab-item-label{
	font-size:16px;
}
.hots{
	width: 100%;
    padding: 20px 0;
    border-bottom: dashed 1px #c9c9c9;
    cursor: pointer;
}
.coming{
	width: 100%;
    padding: 20px 0;
    border-bottom: dashed 1px #c9c9c9;
    cursor: pointer;
}
.film-item-img{
	width: 60px;
    float: left;
    overflow: hidden;
    height:82.56px;   
}
.film-item-img img{
	width: 100%;
    transition: all 1.2s ease;
    vertical-align: middle;
    box-sizing: border-box;
    height:82.56px;
}
.mint-cell-value{
	width:100%;
}
.film-desc{
	padding-left: 15px;
    float: right;
    width:75%;   
}
.film-name {
    font-size: 16px;
    line-height: 32px;
    color: #000;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    float:left;
}
.film-grade{
	float: right;
    font-size: 16px;
    line-height: 32px;
    color: #fc7103;
    margin-right: 20px;
}
.film-intro{
	    height: 24px;
    line-height: 24px;
    color: #8e8e8e;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    display: inline-block;
}
.film-counts {
    line-height: 24px;
    color: #8e8e8e;
    font-size: 12px;
}
.mint-cell-title{
	width:0 !important;
	height:0 !important;
	flex: 0;
}
</style>