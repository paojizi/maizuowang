//这是列表组件1
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import api from '../../common/api.js'

class ListPage extends Component{
	render(){
//		console.log(this.props.data1)
		return (
			<div>
				<ul class="list-wrap">
					{
						this.props.data1.map((item, index)=>{
							const hz = item.image_path.endsWith('png')? 'png': 'jpeg';
							const imgSrc = `${api.imgHost}/${item.image_path}.${hz}`;
							const cover = `${item.rating}`;
							const moonnum = `${item.recent_order_num}`;
							const fee = (parseInt(`${item.float_delivery_fee}`*10))/10;
							const amount = `${item.float_minimum_order_amount}`;
							let cost = (item.average_cost) ? (`${item.average_cost}`) : '';
							
							const delivery_mode = item.delivery_mode;						
							const arr = item.supports;
							let bao = '';
							let zhun = '';
							let zhun1 = '';
							let piao = '';
							let feng = '';
							const distance = item.distance;
							let juli = '';
							const order_lead_time = item.order_lead_time;
							let fengn = '';
							if(arr){
								arr.map((item,index)=>{
									if(item.id == 7){
										bao = '保' 
									}
									if(item.id == 9){
										zhun = '准';
										zhun1 = '准时达'
									}
									if(item.id == 4){
										piao = '票'
									}
									
								})
							}
							if(delivery_mode){
								feng = delivery_mode.text;
							}
							if(distance>1000){
								
								juli = (parseInt(distance/10))/100 +"km";
							}else{
								juli = distance +"m";
							}
							if(order_lead_time){
								fengn = "/" + order_lead_time + '分钟'
							}
							
							return (
								<Link to={`/home/detail/${item.id}`} id="listonclik" key={index}>
								<li class="list-item" >
									<img src={imgSrc}/>
									<div class="list-text">
										<div class="list-text1">										
											<h5>{item.name}</h5>
											<div class="starbox">
												<div class="star">
													<img src='/src/style2/images/star-on.png'/>
													<img src='/src/style2/images/star-on.png'/>
													<img src='/src/style2/images/star-on.png'/>
													<img src='/src/style2/images/star-on.png'/>
													<img src='/src/style2/images/star-on.png'/>
												</div>
												<div class="cover" style={{
													left: cover*10 + 'px'
												}}></div>
												<div class="moon">
													<span class="grade">{cover}</span>
													<span >月售<em>{moonnum}</em>单</span>
												</div>
											</div>
											<div class="cost">
												¥<span>{amount}</span>起送/&nbsp;配送费¥<span>{fee}</span><span>{cost}</span>
											</div>
										</div>
										<div class="list-text2">
											<div class="writ">
												<span>{bao}</span><span>{zhun}</span><span>{piao}</span>
											</div>
											<div class="delivery">																								
												{   
													arr.map((item,index)=>{
														if(item.id == 9){
															return <span class="delivery1" key={index}>{zhun1}</span>
														}
													})
													
												}
												<span class="delivery2">{feng}</span>
											</div>
											<div class="journey">
												<span>{juli}</span><span>{fengn}</span>
											</div>
										</div>
									</div>
									
								
							</li>
							</Link>
							)
						})
					}
				</ul>
			</div>
		)
	}
	
}

export default ListPage;