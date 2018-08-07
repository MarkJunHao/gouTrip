import React from 'react'
import '../css/trip.css'
import bgImage from '../images/b3c257f1a5c5d48457ca788a011039.jpg'
import bgImage2 from '../images/2.png'
import bgImage3 from '../images/trip-3.jpg'
import bgImage4 from '../images/trip-4.jpg'



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
							
							{/*相关路线推荐*/}
							<div >
								<p>相关路线推荐</p>
								<div className='recom'>
									<div>
										<a href='#' target='_blank'>
											<img className='bgImage' src ={bgImage}/>
										</a>
										<p>
											<a href='#' target ='_blank'>
												【浓情蜜月】巴厘岛5晚7日私家团（2人独立成团）
											</a>
										</p>
										<p>
											<span>3499元&nbsp;</span>起/人
										</p>
									</div>
									<div>
										<a href='#' target='_blank'>
											<img className='bgImage' src ={bgImage2}/>
										</a>
										<p>
											<a href='#' target ='_blank'>
												【定格瞬间】肯尼亚坦桑尼亚12日摄影之旅
											</a>
										</p>
										<p>
											<span>29999元&nbsp;</span>起/人
										</p>
									</div>
									<div>
										<a href='#' target='_blank'>
											<img className='bgImage' src ={bgImage3}/>
										</a>
										<p>
											<a href='#' target ='_blank'>
												【船宿潜水】印尼科莫多6晚7日潜水探险之旅
											</a>
										</p>
										<p>
											<span>13999元&nbsp;</span>起/人
										</p>
									</div>
									<div>
										<a href='#' target='_blank'>
											<img className='bgImage' src ={bgImage4}/>
										</a>
										<p>
											<a href='#' target ='_blank'>
												【欢乐亲子】马达加斯加昂达西贝狐猴5晚7天探秘之旅（2人成团）
											</a>
										</p>
										<p>
											<span>17800元&nbsp;</span>起/人
										</p>
									</div>
									<p>
										<a href='#'>更多</a>
									</p>
								</div>
							</div>
						
						</div>
						{/*主题左侧结束*/}
						
						{/*主题右侧开始*/}
						<div className='Ma_right'>
							{/*下拉选项*/}
							<div className='rigBar'>
								<div className='sec1'>
									旅行方式&nbsp;
									<i class='sec-arrow-1' id='sec-arr'></i>
									<div>
										
									</div>
								</div>
								<div className='selectParm'>
								
								</div>
							</div>
							
							
							
						</div>
						{/*主题右侧结束*/}
					</div>
				</div>
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
			</div>
		)
	}
}
export default  Trip;