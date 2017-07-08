import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import api from '../../common/api.js'
import ListPage from './ListPage.js'

class List extends Component{
	render(){		
		return (
			<div class="list">
				<h3 class="title">推荐商家</h3>
				<ListPage data1={this.props.data}/>
			</div>
		)
	}	
	componentDidMount(){
//		console.log(this.props)
		this.props.refresh();
	}
	
	componentDidUpdate(){
		this.props.refresh();
	}			
}

export default List;