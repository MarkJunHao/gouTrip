import React from 'react'


class Hotel extends React.Component{
	constructor (props){
		super(props);
		
		
		
	}
	
	render(){
		return(
			<div>
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
								<input type='text' id='city' class='search-area' placeholder='请输入目的地'/>
							</li>
						</ol>
					
					</div>
				</div>
				
			</div>
		)
	}
}
export default  Hotel;