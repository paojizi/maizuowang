import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import api from '../../common/api.js'
import 'whatwg-fetch'

import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom'
class Search extends Component{
	constructor(){
		super();
		this.state = {						
			offset: 0,
			limit: 20,
			addlist1:{},
			timer:null,
			homeScroll: null,
			addlist2:[],
			list3:{},
			por:null,
			hotwords:[],
			historyword:[],
			his1:[]
		}
	}
	componentWillMount(){
//		获取10个热搜词
		let positionInfo = this.props.positionInfo; 		
		let {longitude: l, latitude: t} = positionInfo;	
		fetch(`${api.hotwordsApi}?longitude=${l}&latitude=${t}`)
		.then((response)=>{
			return response.json();
		})
		.then((jsonData)=>{
//			console.log(jsonData)
			this.setState({addlist2: jsonData});			
		})
//		获取localStorage
		if(localStorage.getItem("historyword")){
			this.setState({historyword:JSON.parse(localStorage.getItem("historyword"))});
		}
		
		
	}
	
	render(){
//		console.log(this.state.addlist2)
		return (
			<ReactCSSTransitionGroup transitionName={{
				appear: 'slideInRight',
				appearActive: 'slideInRight'
			}} transitionAppear={true} transitionAppearTimeout={500}
			transitionEnter={false} transitionLeave={false}>					
				<div id="searcH">
					<div className="content">												
						<button onClick={this.goBack.bind(this)} class="iconfont back">
							&#xe6a3;
						</button>
						<input type="text" placeholder="请输入商品名称" onChange={this.onchange1.bind(this)} ref="qq1"/>
						
						<p>历史搜索</p>
						{
							this.state.historyword.map((item,index)=>{
								return (												
									<span key={index}>{item}</span>
								)
							})
						}						
						<p>热门搜索</p>
						<div>
							{
								this.state.addlist2.map((item,index)=>{
									this.state.hotwords.push(item.search_word)
									return(
										<Link to={`/home/searcH/searchdetails/${item.search_word}`} key={index} onClick={this.addcookie.bind(this,index)}><span key={index} >{item.search_word}</span></Link>
									)
								})
							}
						</div>
						
					</div>
					
				</div>
			
			</ReactCSSTransitionGroup>
			
		)
	}	
//	添加历史记录
	addcookie(index){
		
		this.state.hotwords.map((item,j)=>{
			if(j==index){
				this.state.historyword.push(item)
				
				localStorage.setItem("historyword", JSON.stringify(this.state.historyword))
				
			}
		})
	}
//	搜索框输入
	onchange1(){						
		var that = this;
		var val1 = that.refs.qq1.value
		if(this.state.timer){
			clearTimeout(this.state.timer)
		}
		this.setState({
			timer:setTimeout(function(){														
				that.props.history.push('/home/searcH/searchdetails/${val1}')
				that.state.historyword.push(val1)
				
				localStorage.setItem("historyword", JSON.stringify(that.state.historyword))
				
			},1000)
		})		 
						
	}
//	返回
	goBack(){
		const addressEle = document.querySelector('#searcH');
		addressEle.className = 'slideOutRight';
		setTimeout(()=>{
			this.props.history.goBack();
		}, 500);
	}
}

export default Search;