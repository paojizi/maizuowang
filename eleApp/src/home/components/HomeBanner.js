import React, {Component} from 'react'

import ReactSwipe from 'react-swipe';

import api from '../../common/api.js'
import {Link} from 'react-router-dom';


class Banner extends Component{
	
	render(){
//		获得轮播数据
		let arr = this.props.data.map((item)=>{
			return item;
		});
		let pages = [];
		while (arr.length > 0){
			let newArr = arr.splice(0, 8);
			pages.push(newArr);
		}		
		return (
			<div>
			<ReactSwipe key={pages.length} className="banner-wrapper" swipeOptions={{continuous: true}}>
				{
					pages.map((list, i)=>{
						return (
							<ul class="banner-list" key={i}>
								{
									list.map((item, j)=>{
										return (
											<Link to={`/home/bannerlist/${item.name}`} id="listonclik" key={j}>
											<li class="banner-item">
												<img src={`${api.imgHost}/${item.image_hash}.jpeg`}/>
												<span>{item.name}</span>
											</li>
											</Link>
										)
									})
								}
							</ul>
						)
					})
				}
			</ReactSwipe>
				<div>
				</div>
			</div>
		)
	}
	
}

export default Banner;
