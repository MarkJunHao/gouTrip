import React from 'react'
import "../css/vr.css"
import $ from "jquery"
import Mock from "mockjs"
import img from "../images/banner_aee7512.png"
import img1 from "../images/pic1.jpg"
import img2 from "../images/play_d580a8b.png"
import img3 from "../images/see_abee0f0.png"
import img4 from "../images/zan_b9baac1.png"
import "../data/vr_list.js"
import Collect from "./collect"

class Vr extends React.Component{
	constructor (props){
		super(props),
		this.state={
			arr:[]
		}
	}
	
	tap(){
		this.props.history.push("/vr/collect")
	}
	
	render(){
		return(
			<div>
				<div className="vr_content">
					<img className="vr_banner" src={img} />
					
					{/*tit*/}
					<div className="vr_upload">
						<p>够旅游VR旅行正在征集旅行达人旅途中拍摄的VR视频。</p>
						<p>小够会挑选优质资源进行编辑、包装，并发布在够旅游平台上免费宣传推广。</p>
							<button className="vr_btn" onClick={this.tap.bind(this)}>发布作品</button>
					</div>
					
					{/*列表*/}
					<div className="vr_list">
						<p className="vr_title">
							热门视频    
							<span>精彩VR旅游视频</span>
						</p>
						{
							this.state.arr.map(function(item,i){
								return (
										<a href="/play" key={i}>
											<div className="vr_video">
												<div className="vr_cover">
													<img src={item.img1} />
												</div>
												<div className="vr_mask"></div>
												<img className="vr_play" src={img2} />
												<div className="vr_time">{item.time}</div>
												<div className="vr_word">
													<p className="vr_name">{item.tit}</p>
													<div className="vr_explain">{item.txt}</div>
													<div className="vr_bottom">
														<div>
															<img className="vr_head" src={item.img2} />
															<span className="vr_nickname">VR官方</span>
														</div>
														<div>
															<img className="vr_see" src={img3} />
															<span className="vr_seeWord">{item.num1}</span>
															<img className="vr_zan" src={img4} />
															<span className="vr_seeWord">{item.num2}</span>
														</div>
													</div>
												</div>
											</div>
										</a>
								)
							})
						}
					</div>
					
					
					{/*按钮*/}
					<div className="vr_more">加载更多</div>
				</div>
			</div>
		)
	}
	
	componentDidMount(){
		var _this=this;
		$.ajax({
			type:"get",
			url:"http://www.goutrip.com/vr/play",
			dataType:"json",
			success:function(data){
//				console.log(data)
				_this.setState({arr:data.vr})
			}
		})
	}
}
export default Vr;