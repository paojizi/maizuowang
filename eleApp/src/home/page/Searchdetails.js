import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import api from '../../common/api.js'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ListPage2 from '../components/ListPage2.js'
class List extends Component{
	constructor(){
		super();
		this.state = {												
			list:{},
			list2:[]
		}
	}
	componentWillMount(){	
//		console.log(this.props.pors)
//      获取搜索词数据
		let positionInfo = this.props.positionInfo
		let {longitude: l, latitude: t} = positionInfo;
		fetch(`${api.hotwordsApi2}?longitude=${l}&latitude=${t}&offset=0&limit=20&keyword=${this.props.match.params.search_word}&search_item_type=2&extra[]=activities`)
		.then((response)=>{
			return response.json();
		})
		.then((jsonData)=>{
//					console.log(1111)
//					console.log(jsonData)
			this.setState({list: jsonData});
			if(this.state.list['0']){
				let list1 = this.state.list['0'].restaurant_with_foods				
				this.setState({list2:list1})
			}
		})				
	}
	render(){						
		return (
			<ReactCSSTransitionGroup transitionName={{
				appear: 'slideInRight',
				appearActive: 'slideInRight'
			}} transitionAppear={true} transitionAppearTimeout={500}
			transitionEnter={false} transitionLeave={false}>
				<div id="searchdetails">
					<div class="searchdetails1">
						<button onClick={this.goBack.bind(this)} class="iconfont back">
							&#xe6a3;
						</button>
						<input type="text" placeholder="请输入商品" />
						<div class="clear"></div>
						<div class="classify"><span>分类</span><span></span></div>
						<div class="sort"><span>排序</span><span></span></div>
						<div class="screen"><span>筛选</span><span></span></div>
						<div class="clear"></div>
					</div>
					<ListPage2 list2={this.state.list2}/>
				</div>
			</ReactCSSTransitionGroup>
		)
	}
	

	goBack(){
		const addressEle = document.querySelector('#searchdetails');
		addressEle.className = 'slideOutRight';
		setTimeout(()=>{
			this.props.history.goBack();
		}, 500);
	}
	
	
}

export default List;