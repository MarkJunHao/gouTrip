import React from 'react'

import Nav from './nav'
import home_01 from '../images/home_01.png'

class Home extends React.Component{
	constructor (props){
		super(props);
	}
	
	render(){
		return(
			<div>
		
			<div className='app_con'>
				<img src={home_01}/>
			
			</div>
			</div>
		)
	}
}
export default  Home;