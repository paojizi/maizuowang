import React, {Component} from 'react';
import PropTypes from 'prop-types';
import api from '../../common/api.js';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

class Particulars extends Component{
	render(){
		return(				
				<div>
					<div class="Particularsheader"></div>
					<div class="select">
						<a ></a><a></a>
					</div>
					<div class="Leftstairs"></div>
					<div class="Rightmain"></div>
					<div class="bottomclose"></div>
				</div>			
		)
	}
}