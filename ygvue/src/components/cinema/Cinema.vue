<template>
	<div class="cinema">
		<div class="district" v-for="(item,index) in qwe" >
			<div class="title" @click="Spread">{{item.name}}</div>
			<div class="content" v-if="isSelect1">
				<ul>
					<li v-for="(i,j) in item.list" class="cinema-clearfix" :id="i.id">
						<router-link :to='"/cinema/cinemadetail/"+i.id'>
							<div class="cinema-title">
								<div class="cinema-title-cinemaname">{{i.name}}&nbsp;&nbsp;&nbsp;<span>座</span>&nbsp;<span>通</span></div>
								<div class="cinema-title-tip"><span>可乐爆米花</span></div>
								<div class="cinema-title-address">{{i.address}}</div>
								<div class="cinema-title-location">距离未知</div>
							</div>
							<div class="pull-right iconfont">&#xe649;</div>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
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

export default{
	data(){
		return {			
			address1:[],
			district1:[],
			district2:[],
			obj:{},
			list:[],
			qwe:[],
			isSelect1:true,
			isSelect:false
		}
	},
	created(){		
		this.$http.get(api.cinemaApi)
		.then((response)=>{
//			console.log(response)
			let list = response.data.data.cinemas;
			this.address1 = list;
			list.map((item)=>{
				this.district1.push(item.district.name)
				var set = new Set(this.district1);
				this.district2 = new Array(...set);
				
			})
			
			this.district2.map((i,j)=>{
				let obj = {}
				obj.name = i;
				var list = [];
				this.address1.map((item,index)=>{					
					if(item.district.name == i){						
						list.push(item);
						obj.list =list						
					}					
				})
				this.qwe.push(obj)								
			})			
			console.log(this.qwe)
		})
		.catch((error)=>{
			console.log(error)
		})													
	},
	methods:{
		Spread(){
			this.isSelect1 = !this.isSelect1
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

.cinema{
	position: absolute;
	top:50px;
	left:0;
	width:100%;
}
.title{
	height: 40px;
    line-height: 40px;
    font-size: 14px;
    padding-left: 16px;
    background: #e1e1e1;
    margin-bottom: 1px;
    color: #636363;
    cursor: pointer;
}
.content{
	width:100%; 
}
.cinema-clearfix{
	border-bottom: 1px solid #e1e1e1;
    cursor: pointer;    
    padding: 14px 0 12px 16px; 
    height:94px;
}
.cinema-title{
	width: 75%;
    min-width: 230px;
    float: left;
    cursor: pointer;
    overflow: hidden;
}
.pull-right{
	padding-right: 15px;
    line-height: 36px;
    color: #c6c6c6;
    float: right !important;
}

.cinema-title-cinemaname{	
    font-size: 16px;
    width: 100%;
    margin-bottom: 5px;
    color:black;
}
.cinema-title-cinemaname span:nth-child(1){
	font-size:10px;
	display: inline-block;
	border-radius: 50%;
	border:1px solid #fc8558;
	color:#fc8558;
	text-align: center;
	line-height:14px ;
	width: 14px;
	height:14px;
	
}
.cinema-title-cinemaname span:nth-child(2){
	font-size:10px;
	display: inline-block;
	border-radius: 50%;
	border:1px solid #88aec8;;
	color:#88aec8;
	text-align: center;
	line-height:14px ;
	width: 14px;
	height:14px;
	
}
.cinema-title-tip{
	
    margin-bottom: 5px;
    font-size: 10px;
}
.cinema-title-tip span{
	background: #51add0;
	color:white;
	border-radius: 2px;
}
.cinema-title-address{
	
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    color: #ccc;
}
.cinema-title-location{
	font-size: 12px;
    color: #ccc;
}
</style>