import React from 'react'
import $ from 'jquery'

class Login extends React.Component{
	constructor (props){
		super(props);
		
		
		
	}
	componentDidMount(){
		$('.home_nav').css("display","none")
	}
	render(){
		return(
			<div>
			Login
			</div>
		)
	}
}
export default  Login;