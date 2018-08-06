import React from 'react'
import home_01 from '../imgs/home_01.png'

class Home extends React.Component{
	constructor (props){
		super(props);
	}
	
	render(){
		return(
			<div className='app_con'>
				<img src={home_01}/>
			
			</div>
		)
	}
}
export default  Home;