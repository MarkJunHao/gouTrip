import React from 'react'
import {BrowserRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';


class Hotel extends React.Component{
	constructor (props){
		super(props);
		
	}
	render(){
		return(
			<div className='wrap'>
				{/*轮播图*/}
				<div className='bx-wrapper'>
				</div>
				<div className='hotel_main'>
					<div className='search'>
						<ol>
							<li className='search_hotel'>
								<i className='search_line'></i>
								<span>酒店搜索</span>
								<i className='search_line'></i>
							</li>
							<li className='search_li'>
								<i className='address-icon'></i>
								<input type='text' id='city' className='search-area' placeholder='请输入目的地'/>
							</li>
						</ol>
					
					</div>
				</div>
				<button onClick={this.tap.bind(this)}>跳转页面</button>
				<span onClick={this.tap.bind(this)}> adadadadads</span>
			</div>
		)
	}
	tap(){
		console.log(this);
//		console.log(this.props.history.push('/home'))
	}
}
export default  Hotel;