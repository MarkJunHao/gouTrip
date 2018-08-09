import React from 'react';
import $ from 'jquery';
import Mock from 'mockjs';
import '../css/detail.css';

class Detail extends React.Component{
	
	componentDidMount(){
		console.log(this.props.location.query);
	}
	render(){
		return(
			
			<div>
				Detail
			</div>
		)
	}
}
export default Detail;