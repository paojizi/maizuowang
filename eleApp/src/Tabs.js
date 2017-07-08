import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
class Tabs extends Component{
	render(){
		return (
			<nav className="tabs">
				{
					this.props.data.map((item, index)=>{
						const name = "iconfont "+item.icon;
						const activeName = "iconfont "+item.iconOn;
						return (
							<NavLink key={index} to={item.path} isActive={this.getTabsActive.bind(this, index)}>
								<em className={name}></em>
								<span>{item.title}</span>
							</NavLink>
						)
					})
				}
			</nav>
		)
	}
	
	getTabsActive(index, match, location){
		if(location.pathname == '/' && index == 0){
			return true;
		}
		else if(!match){
			return false;
		}
		else{
			return true;
		}
	}
}

export default Tabs;