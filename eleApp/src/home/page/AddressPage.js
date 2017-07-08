import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import api from '../../common/api.js'
import 'whatwg-fetch'
class Address extends Component{
	constructor(){
		super();
		this.state = {						
			offset: 0,
			limit: 20,
			addlist:[],
			timer:null,
			homeScroll: null,
		}
	}
//	componentDidMount(){
//		const homeEle = this.refs.home;
////		console.log(homeEle)
//		setTimeout(()=>{
//			const homeScroll = new IScroll(homeEle, {
//			
//		});
//		this.setState({homeScroll: homeScroll});
//		},3000)
//		
//		
//	}
	render(){
		return (
			<ReactCSSTransitionGroup transitionName={{
				appear: 'slideInRight',
				appearActive: 'slideInRight'
			}} transitionAppear={true} transitionAppearTimeout={500}
			transitionEnter={false} transitionLeave={false}>
						
				<div id="address">
					<div className="content">
						
						<div class="searchpage">
							<button onClick={this.goBack.bind(this)} class="iconfont back">
								&#xe6a3;
							</button>
							<h3>选择地址</h3>
							<div class="clear"></div>
							<input type="text" placeholder="请输入地址" onChange={this.onchange.bind(this)} ref="qq"/>
						</div>
						<ul class="addlist" >
						    <div class="home-wrap">
							{								
								this.state.addlist.map((item,index)=>{
									return(
										<li key={index} >
											<p>{item.name}</p>
											<p>{item.address}</p>
										</li>
									)									
								})								
							}
							</div>
						</ul>
					</div>
				</div>
			
			</ReactCSSTransitionGroup>			
		)
	}
//	地址搜索
	onchange(){
		
		var that = this;
		var val = that.refs.qq.value
		if(this.state.timer){
			clearTimeout(this.state.timer)
		}
		this.setState({
			timer:setTimeout(function(){
						
				fetch(`${api.searchadd}?keyword=${val}&offset=0&limit=20`)
				.then((response)=>{
					return response.json();
				})
				.then((jsonData)=>{
//					console.log(jsonData)
					that.setState({addlist: jsonData});
				})												
			},1000)
		})
		 
		
				
	}
//	返回
	goBack(){
		const addressEle = document.querySelector('#address');
		addressEle.className = 'slideOutRight';
		setTimeout(()=>{
			this.props.history.goBack();
		}, 500);
	}

//	scrollRefresh(){
//		if(this.state.homeScroll){
//			this.state.homeScroll.refresh();
////			console.log(this.state.homeScroll)
//		}
//		
//	}

}

export default Address;