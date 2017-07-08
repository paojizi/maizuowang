import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import api from '../../common/api.js'
import 'whatwg-fetch'
class Detail extends Component{
	constructor(){
		super();
		this.state = {												
			list:[],
			num:1,
			total:0,
			bg:0
		}
	}
	componentWillMount(){
//		获取详细数据		
		fetch(`${api.shoppingv2Api}?restaurant_id=${this.props.match.params.id}`)
		.then((response)=>{
			return response.json();
		})
		.then((jsonData)=>{
			this.setState({list: jsonData});
//			console.log(jsonData)
//			if(this.state.list['0']){
//				let list1 = this.state.list['0'].restaurant_with_foods				
//				this.setState({list2:list1})
//			}
		})
		
		var arr = localStorage.getItem('cart');
		var total1 = 0;
		if(arr){
			this.setState({bg:1})
			arr = JSON.parse(localStorage.getItem('cart'));
			arr.map((item)=>{
				total1 += parseInt(item.price)*parseInt(item.num);
				this.setState({total:total1})
				
			})
		}else{
			this.setState({bg:0})
		}
//		var bgcolor = this.state.bg;
//		console.log(bgcolor)
	}
	render(){
		var qjs = this.state.bg==1 ? "qjs1":"qjs";
		var car = this.state.bg==1 ? "car1 iconfont" : "car iconfont"
		return ( 
			<ReactCSSTransitionGroup transitionName={{
				appear: 'slideInRight',
				appearActive: 'slideInRight'
			}} transitionAppear={true} transitionAppearTimeout={500}
			transitionEnter={false} transitionLeave={false}>
			
				<div id="detail">
					<div className="content">
					
						{
							this.props.listData.map((item,index)=>{
								if(item.id==this.props.match.params.id){
									const hz = item.image_path.endsWith('png')? 'png': 'jpeg';
								    const imgSrc = `${api.imgHost}/${item.image_path}.${hz}`;
								    const name = item.name ? item.name :'';
								    const order_lead_time = item.order_lead_time ? item.order_lead_time : '';
								    const float_delivery_fee = item.float_delivery_fee ? item.order_lead_time :'';
								    const promotion_info = item.promotion_info ? item.promotion_info : '';
								    const xx = item.activities ? item.activities[0].name : '';
								    const cc = item.activities ? item.activities.length : '';
									return(
										<div class="detailheader" key={index} style={{										
											backgroundImage:`url(${imgSrc}?imageMogr/format/webp/thumbnail/!40p/blur/50x40/) `,
											backgroundSize:'cover'
										}}>
											<button onClick={this.goBack.bind(this)} class="iconfont back" style={{
												backgroundImage:`url(${imgSrc}?imageMogr/format/webp/thumbnail/!40p/blur/50x40/) `
											}}>
												&#xe6a3;
											</button>
											<div class="detailheader1">
												<img src={imgSrc}/>
												<div class="detailheader1_1">
													<h3>{name}</h3>
													<p class="peisong1">
														<span>商家配送/</span>
														<span>{order_lead_time}</span>
														<span>分钟送达/配送费¥</span>													
														<span>{float_delivery_fee}</span>
														<span>&gt;</span>
														<div class="clear"></div>
													</p>
													<p class="peisong2">公告:{promotion_info}</p>
												</div>
												<div class="clear"></div>
												<div class="peisong3">
													<span>{xx}</span><span>{cc}个活动</span>
													<div class="clear"></div>
												</div>																																
											</div>
										</div>
									)
								}
							})
						}
						
						<div class="tabq">
							<div class="tabq_1">商品</div>
							<div class="tabq_2">评价</div>
							<div class="clear"></div>
						</div>
						
						<div class="commodity">
							
							<ul class="leftlist">
								<div class="leftlistbox">
								{
									this.state.list.map((item,index)=>{										
										return(
											<li key={index}>{item.name}</li>
										)
									})
								}
								</div>
							</ul>
							
							<div class="rightlist">
								<div class="rightlistbox">
								{
									  this.state.list.map((item,index)=>{		
										
										var outer = index;
										return(
											<dl key={index}>
												<dt><span>{item.name}</span><span>{item.description}</span></dt>
												{
													item.foods.map((j,i)=>{	 
														
														var inner = i;
														
														var obj = {
															outer : outer,
															inner : inner
														}
														const www = j.image_path ? j.image_path	: ''						
														const hz = www.endsWith('png')? 'png': 'jpeg';
														const imgSrc = `${api.imgHost}/${j.image_path}.${hz}`;
														const ge_text = j.activity ? j.activity.image_text : '';
														const price = j.specfoods ? '¥'+j.specfoods[0].price :'';
														return(
															<dd key={i} >
																<img src={imgSrc}/>
																<div class="xian">
																	<h4>{j.name}</h4>
																	<p>{j.description}</p>
																	<p><span>月售{j.month_sales}份</span><span>好评率{j.satisfy_rate}%</span></p>
																	<p>{ge_text}</p>
																	<p>{price}</p>
																	<div class="addcart" onClick={this.Addcart.bind(this,obj)}>+</div>
																	<div class="clear"></div>
																</div>
																<div class="clear"></div>
															</dd>
														)														
													})
												}												
											</dl>
										)
									})
								}
								</div>
							</div>
							
						</div>
						<div class="bottomclse">
					
							<div class={car}>&#xe629;</div>
							<div class="psf">
								<p>¥{this.state.total}</p>
								<p>配送费¥4</p>
							</div>														
							<div class="qjs" class={qjs}>去结算</div>								
							<div class="clear"></div>
						</div>
						
						<div class="evaluate">
							
						</div>
						
					</div>
				</div>
			
			</ReactCSSTransitionGroup>
		)
	}
//	添加购物车
	Addcart(obj){				
		var obj = obj;		
		this.state.list.map((item,index)=>{
			if(index==obj.outer){
				item.foods.map((j,i)=>{
					if(i == obj.inner){
						var newobj = {};
						const price1 = j.specfoods ? j.specfoods[0].price :'';												
						newobj.name = j.name;
						newobj.price = price1;
						newobj.num = this.state.num;
						
						var newArr = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')):[];
						
						var isExist = false;
						for (var n=0; n<newArr.length; n++){
							if (newArr[n].name == newobj.name) {
								isExist = true;								
								newArr[n].num = parseInt(newArr[n].num) + parseInt(newobj.num);
							}
						}
						if (!isExist) {
//							console.log(newArr)
							newArr.push(newobj);
						}
						
						
					localStorage.setItem('cart',JSON.stringify(newArr));
					
					
					var arr = localStorage.getItem('cart');
					var total1 = 0;
					if(arr){
						this.setState({bg:1})
						arr = JSON.parse(localStorage.getItem('cart'));
						arr.map((item)=>{
							total1 += parseInt(item.price)*parseInt(item.num);
							this.setState({total:total1})
							
						})
					}else{
						this.setState({bg:0})
					}
//					console.log(JSON.parse(localStorage.getItem('cart')));
	//				console.log(index)
					}
				})
			}
			
		})
		
		
	}
//	返回
	goBack(){
		const addressEle = document.querySelector('#detail');
		addressEle.className = 'slideOutRight';
		setTimeout(()=>{
			this.props.history.goBack();
		}, 500);
	}
	
}

export default Detail;