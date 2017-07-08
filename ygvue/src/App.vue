<template>
	<div id="app">
		<nav class="nav" >
    	<h1 class="navleft" @click="btnAction1" >
    		<a href="javascript:;" class="iconfont toolbar-title-icon" >&#xe657;</a>
    		<a href="javascript:;" class="toolbar-title">卖座电影</a>
    		<div class="clear"></div>
    	</h1>
    	<div class="navright">
    		<router-link  class="city" :to="tabs.path">
					<span>深圳</span>
					<i class='iconfont'>&#xe60a;</i>
				</router-link>
				<router-link  class="user" :to="tabs1.path">
					<i class='iconfont'>&#xe606;</i>
				</router-link>
				<div class="clear"></div>
    	</div>
			<div class="clear"></div>
		</nav>
		
		<div class="content">
			<div class="sidebar-container" >		
					<transition name="fade">
						<div class="leftnav" v-if="isSelect">
							<ul>
								<li @click="btnAction2">
									<router-link :to="tabs2.path"><span>首页</span><i class="iconfont">&#xe649;</i></router-link>
								</li>
								<li @click="btnAction2">
									<router-link :to="tabs3.path" @click="Film1"><span>影片</span><i class="iconfont">&#xe649;</i></router-link>
								</li>
								<li @click="btnAction2">
									<router-link :to="tabs4.path"><span>影院</span><i class="iconfont">&#xe649;</i></router-link>
								</li>
								<li @click="btnAction2">
									<router-link :to="tabs5.path"><span>商城</span><i class="iconfont">&#xe649;</i></router-link>
								</li>
								<li @click="btnAction2">
									<router-link :to="tabs6.path"><span>演出</span><i class="iconfont">&#xe649;</i></router-link>
								</li>
								<li @click="btnAction2">
									<router-link :to="tabs7.path"><span>我的</span><i class="iconfont">&#xe649;</i></router-link>
								</li>
								<li @click="btnAction2">
									<router-link :to="tabs8.path"><span>卖座卡</span><i class="iconfont">&#xe649;</i></router-link>
								</li>
							</ul>
						</div>
					</transition>
			<transition name="fade1">
				<div class="sidebar-overlay" v-if="isSelect" @click="btnAction2">
				</div>
			</transition>	
		</div>
	
		<router-view></router-view>
		</div>
	</div>
	
</template>

<script>
export default{
	data(){
			return {
				tabs:{ path: '/city'},
				tabs1:{ path: '/register'},
				tabs2:{ path: '/home'},
				tabs3:{ path: '/film'},
				tabs4:{ path: '/cinema'},
				tabs5:{ path: '/shopping'},
				tabs6:{ path: '/show'},
				tabs7:{ path: '/register'},
				tabs8:{ path: '/card'},				
				isSelect:false				
			}			
	},
	methods:{
		btnAction1(){
			
			this.isSelect = !this.isSelect;
		},
		btnAction2(){
			
			if(this.isSelect){
				this.isSelect = false;
			}			
		},
		Film1(){
			this.store.commit('Filmchange2')
		}
	}
}
</script>

<style scoped>

	
@keyframes enter{
	from{
		transform: translateX(-210px);
	}
	to{
		transform: translateX(0px);
	}
}
@keyframes leave{
	from{
		transform: translateX(0px);
	}
	to{
		transform: translateX(-210px);
	}
}
.fade-leave-active{
	animation: leave 1s;
}

.fade-enter-active{
	animation: enter 1s;
}

.fade1-enter-active, .fade1-leave-active {
  transition: opacity 1s
}
.fade1-enter, .fade1-leave-to {
  opacity: 0
}



.nav{
	background: #282828;
	position: fixed;
	z-index: 503;
	top: 0;
	right: 0;
	left: 0;
	width: auto;
	height: 50px;
	line-height: 50px;
	overflow: hidden;
}
.nav .navleft{
	color: #fff;
    font-size: 16px;
    line-height: 50px;
    text-align: left;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.8);
    width: auto;
    height: 50px;
    margin: 0 auto;
    float: left;
}
.nav .navleft .toolbar-title-icon{
	float: left;
    width: 48px;
    text-align: center;
    border-right: 1px solid #222;
    box-shadow: 1px 0 1px #363636;
    color: #999;
}
.nav .navleft .toolbar-title{	
    float: left;
    font-size: 14px;
    color: #efefef;
    text-overflow: ellipsis;
    white-space: nowrap;
    displdday: inline-block;
    overflow: hidden;
    width: 150px;
    max-width: 200px;
}
.nav .navright{
	float:right;
	
}
.nav .navright .city{
	float:left;
	font-size: 14px;
    padding: 0 6px;
    color: #999;
    outline: none;
}
.nav .navright .user{
	  float: left;
    font-size: 16px;
    width: 48px;
    text-align: center;
    color: #999;
    outline: none;
}




.sidebar-overlay{
	background: rgba(0,0,0,0.5);
    position: fixed;
    top: 50px;
    right: 0;
    bottom: 0;
    left: 0;
    transition: all ease 0.4s;
    -webkit-transition: all ease 0.4s;
   z-index: 501;
}
.leftnav{
	  border-top: 1px solid #222;
    box-shadow: 0 1px 1px #363636 inset;
    background: #282828;
    position: fixed;
    display: block;
    top: 50px;
    right: 110px;
    bottom: 0;
    left: 0;
    transition: all ease 0.4s;
    -webkit-transition: all ease 0.4s;
    z-index: 502;
}
.leftnav ul li{
	line-height: 50px;
}
    
.leftnav ul li a{
	color: #9a9a9a;
    font-size: 14px;
    display: block;   
    padding-left: 16px;
    border-bottom: 1px dotted #333;
}
.leftnav ul li a i{
	float: right;
  color: #666;
  font-size: 14px;
}
</style>