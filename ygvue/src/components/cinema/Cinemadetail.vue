<template>
	<div class="cinemadetail">
		<div class="img-responsive">
			<img src="//static.m.maizuo.com/v4/static/app/asset/66461d1a02a9eaa64876c90952c42aed.png"/>
		</div>
		<!--订座票-->
		<div class="detail-box">
			<div class="box-warp">
				<div class="pull-left iconfont">&#xe64c;</div>
				<div class="pull-right">
					<div class="pull-right_1">
						<div class="pull-right_1_1">订座票</div>
						<div class="pull-right_1_2">立即订座</div>
						<div class="clear"></div>
					</div>
					<div class="pull-right_2">选好场次及座位，到影院自助机取票</div>
				</div>
			</div>
		</div>
		<!--通兑票-->
		<div class="detail-box">
			<div class="box-warp">
				<div class="pull-left iconfont" style="color:#40b5b5;">&#xe61b;</div>
				<div class="pull-right">
					<div class="pull-right_1">
						<div class="pull-right_1_1">通兑票</div>
						<div class="pull-right_1_2">立即订票</div>
						<div class="clear"></div>
					</div>
					<div class="pull-right_2">有效期内到影院前台兑换影票</div>
				</div>
			</div>
		</div>
		<!--小卖品-->
		<div class="detail-box">
			<div class="box-warp">
				<div class="pull-left iconfont" style="color:#40b5b5;">&#xe63d;</div>
				<div class="pull-right">
					<div class="pull-right_1">
						<div class="pull-right_1_1">小卖品</div>
						<div class="pull-right_1_2">购买</div>
						<div class="clear"></div>
					</div>
					<div class="pull-right_2"></div>
				</div>
			</div>
		</div>
		<!--地址-->
		<div class="detail-box">
			<div class="box-warp">
				<div class="pull-left iconfont" style="color:#40b5b5;">&#xe66d;</div>
				<div class="pull-right">
					{{xiangqin.address}}
				</div>
			</div>
		</div>
		<!--电话-->
		<div class="detail-box">
			<div class="box-warp">
				<div class="pull-left iconfont" style="color:#df8f9f;margin-top: -4px;">&#xe604;</div>
				<div class="pull-right">
					{{xiangqin.telephones[0]}}
				</div>
			</div>
		</div>
		
		
		<div class="other-detail-box">
			<ul>
				<mt-navbar v-model="selected" >				  				  		  				
					<mt-tab-item id="1" >
						<li>
							<p class="iconfont" style="color:#fe8233;border-color:#fe8233 ;">&#xe61b;</p>
							<p class="iconfonttxt">取票</p>
						</li>
					</mt-tab-item>
					<mt-tab-item id="2" >
						<li>
							<p class="iconfont">&#xe616;</p>
							<p class="iconfonttxt">3D</p>
						</li>
					</mt-tab-item>
					<mt-tab-item id="3" >
						<li>
							<p class="iconfont">&#xe6b0;</p>
							<p class="iconfonttxt">停车</p>
						</li>
					</mt-tab-item>
					<mt-tab-item id="4" >
						<li>
							<p class="iconfont">&#xe60e;</p>
							<p class="iconfonttxt">优惠</p>
						</li>
					</mt-tab-item>
					<mt-tab-item id="5" >
						<li>
							<p class="iconfont">&#xe6e7;</p>
							<p class="iconfonttxt">交通</p>
						</li>
					</mt-tab-item>
				</mt-navbar>
				<div class="clear"></div>
			</ul>
			
			<div class="li-box">
				<mt-tab-container v-model="selected">
					<mt-tab-container-item  v-for="(item,index) in xiangqin.services" :id="index+1">		  	
				  		<mt-cell>
				  			{{item.description}}
				  		</mt-cell>		  			    		    
		  			</mt-tab-container-item>
					<!--<mt-tab-container-item id="2">		  	
				  		<mt-cell>
				  			小卖品在影城前台领取1
				  		</mt-cell>		  			    		    
		  			</mt-tab-container-item>
		  			<mt-tab-container-item id="3">		  	
				  		<mt-cell>
				  			小卖品在影城前台领取2
				  		</mt-cell>		  			    		    
		  			</mt-tab-container-item>
		  			<mt-tab-container-item id="4">		  	
				  		<mt-cell>
				  			小卖品在影城前台领取3
				  		</mt-cell>		  			    		    
		  			</mt-tab-container-item>
		  			<mt-tab-container-item id="5">		  	
				  		<mt-cell>
				  			小卖品在影城前台领取4
				  		</mt-cell>		  			    		    
		  			</mt-tab-container-item>-->
				</mt-tab-container>
			</div>
		</div>
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
		return{
			id:this.$route.params.id,
			xiangqin:[],
			selected:'1'
			
		}
	},
	created(){
		this.$http.get(api.cinemadetailApi+this.id+'?__t=1499160948837')
		.then((response)=>{
//			console.log(response)
			this.xiangqin = response.data.data.cinema
//			console.log(this.xiangqin)
		})
		.catch((error)=>{
			console.log(error)
		})
	}
}
</script>

<style scoped>
.cinemadetail{
	position: absolute;
	top:50px;
	left:0;
	width:100%;
	background: #e1e1e1;
}	

.img-responsive{	
    max-width: 100%;
    height: auto;
}
.img-responsive img{
	width: 100%;
    transition: all 1.2s ease;
    opacity: 1;
}
.detail-box{
	padding: 25px 17px 0;
    background-color: #f9f9f9;
    text-align: center;
}
.box-warp{
	display: inline-block;
    width: 100%;
    min-width: 286px;
    text-align: left;
}
.pull-left{
	float: left !important;
	margin: 15px 17px 0 0;
	font-size: 28px;
	color: #ff8160;
}
.pull-right{
	border-bottom: 1px #d6d6d6 dotted;
    position: relative;
    padding-bottom: 25px;
    margin-left: 45px;
}
.pull-right_1{
	
	
}
.pull-right_1 .pull-right_1_1{
	margin-top: 16px;
	float:left;
	font-size:15px;
}
.pull-right_1 .pull-right_1_2{
	float:right;
	width: 94px;
    border-radius: 38px;
    height: 34px;
    border: none;
    font-size: 13px;
    margin-top: 6px;
    background-color: #fe8233;
    color: #fff;
    text-align: center;
    line-height: 34px;
}
.pull-right_2{
	color: #737373;
	font-size:12px;
}


.other-detail-box {
    min-width: 320px;
    padding: 15px 0 30px;
    background-color: #f9f9f9;
    margin-top: 15px;
    cursor: pointer;
}
.other-detail-box ul{
	margin-left: 5px;
	margin-bottom: 10px;
	border-bottom: 1px #d6d6d6 solid;
}
.other-detail-box ul li{
	
	padding: 0 12px 5px;
    margin-bottom: 2px;
    position: relative;
    overflow: hidden;
    width: 38px;
    margin: 0 auto;
    float:left;
}

.other-detail-box ul li .iconfont{
	font-size: 26px;
	width:34px;
	height:34px;
	border:1px solid #cdcdcd;
	border-radius: 50%;
	color:#cdcdcd;
	text-align: center;
	line-height: 30px;
}
.other-detail-box ul li .iconfonttxt{
	font-size:12px;
	color: #737373;
    display: block;
    width: 38px;
    text-align: center;
    margin-top: 5px;
}
.li-box{
	padding: 0 30px;
	font-size:12px;
}
.mint-navbar .mint-tab-item.is-selected{
	
	border-bottom: 3px #ff8032 solid;
}
.mint-cell:last-child {
     background: #f9f9f9;
      
                        
}
.mint-cell-wrapper{
	background-size: 0;
}
.mint-cell {
     background-color: #f9f9f9; 
     box-sizing: border-box; 
     color: inherit;
                      
}
.mint-cell-value{
	font-size: 12px;
}
.mint-cell-title{
	width:0 !important;
	height:0 !important;
	flex: 0;
}
</style>