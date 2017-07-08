import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import api from '../../common/api.js'
import 'whatwg-fetch'
import ListPage2 from '../components/ListPage2.js'
class Bannerlist extends Component{
	constructor(){
		super();
		this.state = {												
			list:{},
			list2:[]
		}
	}
	componentWillMount(){
//		console.log(this.props.match.params.search_word)
//		console.log(this.props.positionInfo)
		let positionInfo = this.props.positionInfo;				
		let {longitude: l, latitude: t} = positionInfo;
//		获取列表数据
		fetch(`${api.hotwordsApi2}?longitude=${l}&latitude=${t}&templates[]=main_template&search_item_type=2&offset=0&limit=20&keyword=${this.props.match.params.search_word}`)
		.then((response)=>{
			return response.json();
		})
		.then((jsonData)=>{
			this.setState({list: jsonData});
//			console.log(jsonData)
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
			
				<div id="bannerlist">
					<div className="content">
						<div class="bannerlistheader">
							<button onClick={this.goBack.bind(this)} class="iconfont back">
								&#xe6a3;
							</button>
							<h3>{this.props.match.params.search_word}</h3>
							<div class="clear"></div>
						</div>
						<div class="classify"><span>分类</span><span></span></div>
						<div class="sort"><span>排序</span><span></span></div>
						<div class="screen"><span>筛选</span><span></span></div>
						<div class="clear"></div>
						
						<ListPage2 list2={this.state.list2}/>
					</div>
				</div>
			
			</ReactCSSTransitionGroup>
		)
	}
	
	goBack(){
		const addressEle = document.querySelector('#bannerlist');
		addressEle.className = 'slideOutRight';
		setTimeout(()=>{
			this.props.history.goBack();
		}, 500);
	}
	
}

export default Bannerlist;