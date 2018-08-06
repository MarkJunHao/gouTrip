import React from 'react'
import '../css/trip.css'

class Trip extends React.Component{
	constructor (props){
		super(props);
		
		
		
	}
	
	render(){
		return(
			<div>
				<div className='trip_main'>
					
					<div>
						{/*主题顶部开始*/}
						<div className='Ma_top'>
							<p>
								<span>主题旅行</span>
							</p>
						</div>
						{/*主题顶部结束*/}
						
						{/*主题左侧开始*/}
						<div className='Ma_left'>
							{/*搜索其他目的地*/}
							<div>
								<p>搜索其他目的地</p>
								<form action='/trip/search'>
									<div className='search'>
										<input placeholder='请输入目的地' name = 'keyword'/>
										<button className='searchIcon'></button>
									</div>
								</form>
							</div>
						
						</div>
						{/*主题左侧结束*/}
						
						{/*主题右侧开始*/}
						<div className='Ma_right'></div>
						{/*主题右侧结束*/}
					</div>
				</div>
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
			</div>
		)
	}
}
export default  Trip;