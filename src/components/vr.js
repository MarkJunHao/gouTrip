import React from 'react'
import "../css/vr.css"
import img from "../images/banner_aee7512.png"
import img1 from "../images/pic1.jpg"
import img2 from "../images/play_d580a8b.png"
import img3 from "../images/see_abee0f0.png"
import img4 from "../images/zan_b9baac1.png"



class Vr extends React.Component{
	constructor (props){
		super(props);
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
						<a href="#">
							<button className="vr_btn">发布作品</button>
						</a>
					</div>
					
					{/*列表*/}
					<div className="vr_list">
						<p className="vr_title">
							热门视频    
							<span>精彩VR旅游视频</span>
						</p>
						
						<a href="#">
							<div className="vr_video">
								<div className="vr_cover">
									<img src={img1} />
								</div>
								<div className="vr_mask"></div>
								<img className="vr_play" src={img2} />
								<div className="vr_time">02:51</div>
								<div className="vr_word">
									<p className="vr_name">“四年一次的通宵激情请勿随意错过”</p>
									<div className="vr_explain">“世界杯”，是世界上最高荣誉、最高规格、最高竞技水平、最高知名度的足球比赛，与奥运会并称为全球体育两大最顶级赛事，影响力和转播覆盖率超过奥运会的全球最大体育盛事</div>
									<div className="vr_bottom">
										<div>
											<img className="vr_head" src="" />
											<span className="vr_nickname">VR官方</span>
											
										</div>
										<div>
											<img className="vr_see" src={img3} />
											<span className="vr_seeWord">246</span>
											<img className="vr_zan" src={img4} />
											<span className="vr_seeWord">0</span>
										</div>
									</div>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		)
	}
}
export default  Vr;