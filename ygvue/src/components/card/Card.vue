<template>
	<div class="card">
		
		<mt-navbar v-model="selected" >				  				  		  				
			<mt-tab-item id="1" >
				<li>				
					<p class="iconfonttxt">卖座卡</p>
				</li>
			</mt-tab-item>
			<mt-tab-item id="2" >
				<li>					
					<p class="iconfonttxt">电子卖座卡</p>
				</li>
			</mt-tab-item>			
		</mt-navbar>
		
		<mt-tab-container v-model="selected">
			<mt-tab-container-item   id="1">		  	
		  		<mt-cell>
		  			<form class="material">
						<div class="form-group">
							<label for="">卡号：</label>
							<input type="text" placeholder="请输入卡号" class="form-control"/>
							<div class="input-bg"></div>
						</div>
						<div class="form-group">
							<label for="">密码：</label>
							<input type="password" placeholder="请输入密码" class="form-control"/>
							<div class="input-bg"></div>
						</div>
						
						<button class="submit">登录</button>
					</form>
		  		</mt-cell>		  			    		    
			</mt-tab-container-item>
			<mt-tab-container-item   id="2">		  	
		  		<mt-cell>
		  			<form class="material">
						<div class="form-group">
							<label for="">卡号：</label>
							<input type="text" placeholder="请输入15位电子卖座卡" class="form-control"/>
							<div class="input-bg"></div>
						</div>
						
						
						<button class="submit">查询</button>
					</form>
		  		</mt-cell>		  			    		    
			</mt-tab-container-item>
		</mt-tab-container>
		
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

export default{
	data(){
		return{
			selected:'1'
		}		
	},
	created(){
		console.log(111111)
	}
}
</script>

<style scoped>
.card{
	position: absolute;
	top:50px;
	left:0;	
	width:100%;
}
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 4px solid #ff7100;;
    color: #ff7100;;
    margin-bottom: 0;
}
.mint-navbar {
    background-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
}
.mint-tab-item{
	font-size:16px;
}
.iconfonttxt{
	font-size:16px;
}
.active{
	
}
.mint-cell{
	background-color: #fff;
    box-sizing: border-box;
    color: inherit;
    min-height: 48px;
    display: inline;
    overflow: hidden;
    position: relative;
    text-decoration: none;
}
.mint-cell-title{
	width:0 !important;
	height:0 !important;
	flex: 0 !important;
}

.material{
	margin-top: 10px;
    padding: 0 32px;
}
.material input{
	border: none;
    background-color: transparent;
    height: 34px;
    width: 60%;
    font-size: 14px;
    vertical-align: top;
    border: none;
    outline: medium;
}
.material label{
	font-weight: normal;
    line-height: 34px;
    margin: 0 15px 0 10px;
    float: left;
    display: inline-block;
    max-width: 100%;
    color: #333;
    font-size:14px;
}
.input-bg{
	position: absolute;
    top: 20px;
    height: 12px;
    width: 100%;
    border: solid #c4c4c4;
    border-width: 0 1px 1px 1px;
    box-sizing: border-box;
}
.form-group{
	margin-top: 30px; 
    position: relative;
}
.submit{
	width: 163px;
    background-color: #fe8233;
    color: #fff;
    border: none;
    border-radius: 36px;   
    padding: 8px 12px;
    font-size: 15px;
    outline: none;
    margin:45px auto;
    display: block;     
}
</style>