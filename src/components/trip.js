import React from 'react'
import '../css/trip.css'
//import { Menu, Dropdown, Icon, message } from 'antd';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import 'antd/dist/antd.css';
import { Menu, Dropdown, Icon, message,Pagination } from 'antd';
import $ from 'jquery'
import '../data/trip_list.js'


import bgImage from '../images/b3c257f1a5c5d48457ca788a011039.jpg'
import bgImage2 from '../images/2.png'
import bgImage3 from '../images/trip-3.jpg'
import bgImage4 from '../images/trip-4.jpg'



class Trip extends React.Component{
	constructor (props){
		super(props),
		this.state={
			arr:[]
		}
		
	}
	

	
	componentDidMount(){
		var _this = this
		$.ajax({
			type:'get',
			url:'http://http://www.goutrip.com/trip',
			dataType:'json',
			success:function(data){
				//console.log(data)
			
				_this.setState({arr:data.list})
				console.log(_this.state.arr)
//				_this.state.arr.map(function(item,i){
//					return (
//						console.log(item)
//					)
//					
//				})
			}
		})
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
									<a href='/trip/product'>更多</a>
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
									<i className='sec-arrow-1' id='sec-arr'></i>
									<div className='list2'>
										<a className='J_group' href='#' type='groupType' data-id='1'>独立团</a>
										<a className='J_group' href='#' type='groupType' data-id='2'>自由行</a>
										<a className='J_group' href='#' type='groupType' data-id='3'>半自由</a>
										<a className='J_group' href='#' type='groupType' data-id='4'>私家团</a>
										
									</div>
								</div>
								<div className='selectParm'>
									<a className='J_all' href='#' type='sellWell' data-id='0'>全部</a>
									<a className='J_hot' href='#' type='sellWell' data-id='1'>热门</a>
									<span className='J_day time1' type='sort'>天数</span>
									<p>
										<i className='img_top1' data-id = '5'></i>
										<i className='img_botm1' data-id = '6'></i>
									</p>
									<span className='J_price time2' type='sort'>价格</span>
									
									<p>
										<i className='img_top2' data-id = '3'></i>
										<i className='img_botm2' data-id = '4'></i>
									</p>
								</div>
							</div>
							
							{/*主题产品列表*/}
								<div className="J_list">
									<div className="connect">
										{/*每一小块内容*/}
									
										{
											this.state.arr.map(function(item,i){
											return(
												
												<div key={i}>
													<a href={'/detail?id='+item.id} >
														<img className ='l_img1' src={item.img}/>
													</a>
													<p>
														<a href='#' target='_blank'>{item.title}</a>
													</p>
													<p> 
														<span className='money'>
															<strong>{item.price}&nbsp;</strong>元起/人
														</span>
														<span className='address'>
															<span className='mapIcon'></span>
															&nbsp;出发地 : {item.address}
														</span>
													</p>
												</div>
												
												)
											})
											
										}
									</div>
								</div>
								
							
							{
								<Pagination defaultCurrent={1} total={this.state.arr.length} defaultPageSize={8} pageSize={8}/>
							} 
						
						</div>
						{/*主题右侧结束*/}
					</div>
				</div>
				
				
			</div>
		)
	}
}
export default  Trip;