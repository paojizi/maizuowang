import React, {Component} from 'react';
import PropTypes from 'prop-types';
import api from '../../common/api.js';
import {Link} from 'react-router-dom';

class Header extends Component{
	
	render(){
		let wrappWidth = 0;				
//		console.log(${api.imgHost}/${this.props.weatherData.image_hash})
		const lis = this.props.hotwords.map((item, index)=>{
			wrappWidth += item.word.length * 12 + 20;
			return <Link to={`/home/hotwords/${item.search_word}`} key={index}><li >{item.word}</li></Link>
		});
		
		return (
			<header class="header">
				<div class="info">
					<span class="iconfont addre"><Link to="/home/address" >{this.props.address}</Link></span>
					<span class="arrow"></span>
					<div class="weather">
						<div class="weather1">
							<p>{this.props.weatherData.temperature}</p>
							<p>{this.props.weatherData.description}</p>
						</div>
						<div class="weather2">
							<img src={`${api.imgHost}/${this.props.weatherData.image_hash}.png`}/>	
						</div>
					</div>
				</div>
				<Link to="/home/searcH"><input class="search" type="text" placeholder="搜索商家、商品"/></Link>
				<div class="hot-words">
					<ul class="wrap" style={{
						width: wrappWidth+'px'
					}}>
						{ lis }
					</ul>
				</div>
			</header>
		)
	}

	
}

Header.propTypes = {
	address: PropTypes.string,
	weatherData: PropTypes.object,
	hotwords: PropTypes.array
}

export default Header;