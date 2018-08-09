import React from 'react'
import "../css/vr.css"
import img1 from "../images/bg1_191c311.png"
import img2 from "../images/bg2_5e99da9.png"
import img3 from "../images/icon1_3b8e608.png"
import img4 from "../images/icon2_0416eb6.png"
import img5 from "../images/icon3_107d765.png"
import img6 from "../images/icon4_0537316.png"
import img7 from "../images/bg3_44cc05a.png"
import "../css/collect.css"


class Collect extends React.Component{
	constructor (props){
		super(props);
	}
	
	render(){
		return(
			<div>
				<div className="impression_content">
					<img src={img1} />
					<a className="impression_btn" href="/vr/upload">发布作品</a>
					
					
					<div className="impression_world">
						<p className="impression_collect">
							VR征集概述
							<span></span>
						</p>
						<p>
							<i></i>
							体验720°VR旅行，够旅游将于即日至2017年12月31日开展视频征集活动；
						</p>
						<p>
							<i></i>
							我们拥有强大的后期编辑团队，您的视频一旦审核通过，便可升为高端的VR作品；
						</p>
						<p>
							<i></i>
							您可通过平台结交良师益友，相互讨教的同时，还有机会获得免费的推广等福利等。
						</p>
						<p>
							<i></i>
							最终活动解释权归够旅游所有。
						</p>
					</div>
					
					
					<img src={img2} className="impression_pic2" />
					
					<div className="impression_stepDiv">
						<p className="impression_collect">
							VR征集流程
							<span></span>
						</p>
						<div className="impression_step">
							<img src={img3} />
							<p>通过够旅游官网</p>
							<p>上传您的高清视频作品</p>
						</div>
						<div className="impression_step">
							<img src={img4} />
							<p>够旅游后期编辑团队</p>
							<p>进行资源审核</p>
						</div>
						<div className="impression_step">
							<img src={img5} />
							<p>审核通过进行VR制作</p>
							<p>通常周期为7天</p>
						</div>
						<div className="impression_step">
							<img src={img6} />
							<p>通过够旅游官网呈现</p>
							<p>并可转发分享等</p>
						</div>
					</div>
					
					
					<div className="impression_world">
						<p className="impression_collect">
							平台提供福利
							<span></span>
						</p>
					</div>
					
					<img src={img7} className="impression_pic3" />
					
					
					<div className="impression_world">
						<p className="impression_collect">
							投稿须知
							<span></span>
						</p>
						<p>
							<i></i>
							上传视频均默认用户同意发布到我方平台进行相应宣传；
						</p>
						<p>
							<i></i>
							发布视频均默认用户同意带有我方LOGO或加入我方1-3秒的品牌宣传内容；
						</p>
						<p>
							<i></i>
							VR视频成品均默认用户同意通过第三方进行分享转发或下载到本地；
						</p>
						<p>
							<i></i>
							够旅游所有和享有的知识产权，不因用户的任何使用行为而发生权利转移；
						</p>
						<p>
							<i></i>
							够旅游对本协议拥有最终解释权。
						</p>
					</div>
				</div>
			</div>
		)
	}
}
export default  Collect;