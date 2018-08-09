import React from "react"
import "../css/upload.css"

import img1 from "../images/icon_977a913.png"

class Upload extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
				<div className="upload_content">
					<div className="upload_left">
						<p className="upload_title">发布VR旅行视频</p>
						<p className="upload_title_1">为确保视频顺利通过审核，请遵守以下规则：</p>
						<p className="upload_title_2">
							单个视频文件大小不超过：
							<span>200M</span>
						</p>
						<p className="upload_title_2">
							视频分辨率范围：宽：
							<span>1920~3840</span>
							高:
							<span>1080~1920</span>
						</p>
						<p className="upload_title_2">
							视频码率大于等于：
							<span>6Mbps</span>
						</p>
						<p className="upload_title_2">
							视频帧率大于等于：
							<span>25fps</span>
						</p>
						<p className="upload_title_2">
							视频格式：
							<span>MP4(H.264编码)</span>
						</p>
					</div>
					
					
					<div className="upload_right">
						<img src={img1} />
						<a href="/vr/video">
							<button className="upload_btn">发布VR旅行作品</button>
						</a>
						<p>
							上传视频，即表示您已同意 
							<a href="#">《够旅游上传服务条款》</a>
						</p>
					</div>
				</div>
		)
	}
}
export default Upload;