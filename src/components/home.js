import React from 'react';
import 'antd/dist/antd.css';
import '../css/home.css';
import { Carousel } from 'antd';
import $ from 'jquery';



import home_01 from '../images/home_01.png'
import home_02 from '../images/home_02.jpeg'
import home_03 from '../images/home_03.jpeg'
class Home extends React.Component{
	constructor(props){
		super(props);
		
	}
	componentDidMount(){
		
		
	}
	tap(){
		console.log(this)
	}
	render(){
		return(
			<div>
			<div className='app_con'>
				<div>
				<Carousel effect="fade" autoplay='true' infinite='true'>
				    <div><a href='/trip'><img src={home_01} alt='logo'/></a></div>
				    <div><a href='/trip'><img src={home_02} alt='logo'/></a></div>
				    <div><a href='/trip'><img src={home_03} alt='logo'/></a></div>
				
				</Carousel>
				
				</div>
			
			
			
			
			
			
			</div>
			</div>
		)
	}
}
export default Home;