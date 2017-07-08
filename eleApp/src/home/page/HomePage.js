import React, {Component} from 'react'

import {Route} from 'react-router-dom'

import Header from '../components/HomeHeader.js'
import Banner from '../components/HomeBanner.js'
import List from '../components/HomeList.js'

import api from '../../common/api.js'
import 'whatwg-fetch'

import '../../style2/home.css'

import Address from './AddressPage.js'
import Detail from './DetailPage.js'
import Search from './SearchPage.js'
import Hotwords from './HotwordsPage.js'
import Bannerlist from './BannerlistPage.js'
import Searchdetails from './Searchdetails.js'

class Home extends Component{
	constructor(){
		super();
		this.state = {
			weatherData: {},
			address: '',
			hotwords: [],
			bannerData: [],
			offset: 0,
			limit: 20,
			listData: [],
			homeScroll: null,
			imgH:api.imgHost,
			hotwords2: [],
			por: null
		}
	}
	
	componentWillMount(){
		
		let positionInfo = this.props.positionInfo;
		if(positionInfo == undefined){
			positionInfo = this.props.location.state.positionInfo;
		}
		this.setState({por: positionInfo});
		let {longitude: l, latitude: t} =positionInfo;
		
		//请求天气数据
		fetch(`${api.weatherApi}?longitude=${l}&latitude=${t}`)
		.then((response)=>{
			return response.json();
		})
		.then((jsonData)=>{
			this.setState({weatherData: jsonData});
//			console.log(this.state.weatherData)
		})
		
		//请求地址信息
		fetch(`${api.geoApi}?longitude=${l}&latitude=${t}`)
		.then((response)=>{
			return response.json();
		})
		.then((jsonData)=>{
			this.setState({address: jsonData.address});
		})
		
		//请求热门词汇
		fetch(`${api.hotwordsApi}?longitude=${l}&latitude=${t}`)
		.then((response)=>{
			return response.json();
		})
		.then((jsonData)=>{
			this.setState({hotwords: jsonData});
//			console.log(this.state.hotwords)
		})
		
		//请求轮播图数据
		
			fetch(`${api.bannerApi}?longitude=${l}&latitude=${t}&templates[]=main_template`)
		.then((response)=>{
			return response.json();
		})
		.then((jsonData)=>{
			this.setState({bannerData: jsonData[0].entries});
//			console.log(this.state.bannerData)
		})
		
		
		//请求列表数据
		fetch(`${api.listApi}?longitude=${l}&latitude=${t}&offset=${this.state.offset}&limit=${this.state.limit}&extras[]=activities`)
		.then((response)=>{
			return response.json();
		})
		.then((jsonData)=>{
//			console.log(jsonData);
			this.setState({listData: jsonData});
//			console.log(this.state.listData)
		});
		
	
		//请求热门词汇
		fetch(`${api.hotwordsApi2}?longitude=${l}&latitude=${t}&offset=${this.state.offset}&limit=${this.state.limit}`)
		.then((response)=>{
			return response.json();
		})
		.then((jsonData)=>{
			this.setState({hotwords2: jsonData});
//			console.log(this.state.hotwords)
		})
		
	}
	
	componentDidMount(){
		const homeEle = this.refs.home;
//		console.log(homeEle)

		const homeScroll = new IScroll(homeEle, {
			
		});
		this.setState({homeScroll: homeScroll});
		
	}
	
	render(){
		return (
			<div>
			<div ref="home" id="home">
				<div class="home-wrap">
					<Header {...{
						weatherData: this.state.weatherData,
						address: this.state.address,
						hotwords: this.state.hotwords
					}} positionInfo1={this.state.positionInfo}/>
					<Banner data={this.state.bannerData}/>
					<List refresh={this.scrollRefresh.bind(this)} data={this.state.listData}/>
				</div>
				
				
			</div>
			<Route path="/home/address" component={Address}/>
			<Route path="/home/detail/:id" render={(props)=>{
				return(
					<Detail {...props} listData={this.state.listData}/>
				)				
			}}/>
			<Route path="/home/searcH" render={(props)=>{
				return(
					<Search {...props} positionInfo={this.state.por}/>
				)				
			}}/>
			
			<Route path="/home/hotwords/:search_word" render={(props)=>{
				return(
					<Hotwords {...props} positionInfo={this.state.por}/>
				)
			}}/>
			<Route path="/home/bannerlist/:search_word" render={(props)=>{
				return(
					<Bannerlist {...props} positionInfo={this.state.por}/>
				)
			}}/>
			<Route path="/home/searcH/searchdetails/:search_word" render={(props)=>{
				return (
					<Searchdetails {...props} positionInfo={this.state.por}/>
				)
			}}/>
			</div>
		)
	}
	
	scrollRefresh(){			
		if(this.state.homeScroll){
			this.state.homeScroll.refresh();
//			console.log(this.state.homeScroll)
		}
		
	}
	
}

export default Home;
