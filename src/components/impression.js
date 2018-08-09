import React from 'react'
import "../css/vr.css"
import "../css/impression.css"
import img1 from "../images/banner2.png"
import img2 from "../images/playBtn_29ddd5b.png"
import img3 from "../images/diving_f54c421.png"
import img4 from "../images/surfing_438c866.png"
import img5 from "../images/camera_36db409.png"
import img6 from "../images/honey_29dbfda.png"
import img7 from "../images/parent_c7b39f7.png"
import img8 from "../images/selfDring_71b9a9d.png"
import img9 from "../images/skiing_52d11f8.png"


class Impression extends React.Component{
	constructor (props){
		super(props);
	}
//	constructor (props){
//		super(props);
//		
//		
//		
//	}
	render(){
		return(
			<div>
				<div className="impression_banner">
					<img src={img1} />
				</div>
				
				
				{/*main*/}
				<div className="impression_main">
				
				
					{/*潜水*/}
					
					<div className="impression_diving clearfix impression_model">
						<video className="video_0 fl" preload="metadata" controls="controls" poster="../images/hyys.jpg">
							<source src="http://image.goutrip.com/video2/chonglang.mp4" type="video/mp4"></source>
						</video>
						<img src={img2} className="videoPlayBtn" />
						<div className="impression_plate fr">
							<p className="impression_title">遨游在湛蓝海底</p>
							<p className="impression_subTitle">这是一场与大海，与海底小生物们的亲密接触</p>
							<button className="impression_btn1">查看潜水线路</button>
						</div>
						<img src={img3} className="impression_divingTag modelTip" />
					</div>
					
					
					{/*冲浪*/}
					
					<div className="impression_surfing clearfix impression_model">
						<video className="video_0 fr" preload="metadata" src="http://image.goutrip.com/video2/chonglang.mp4" controls="controls"></video>
						<img src={img2} className="videoPlayBtn" />
						<div className="impression_plate fl">
							<p className="impression_title">徜徉于浪花四溅的蔚蓝大海</p>
							<p className="impression_subTitle">借助滑板，在海上尽情冲刺，冲在航浪的最前端</p>
							<button className="impression_btn1">查看冲浪线路</button>
						</div>
						<img src={img4} className="impression_surgingTag modelTip" />
					</div>
					
					
					{/*摄影*/}
					
					<div className="impression_camera clearfix impression_model rgba1">
						<video className="video_1" preload="metadata" src="http://image.goutrip.com/video2/sheying.mp4" controls="controls"></video>
						<img src={img2} className="videoPlayBtn" />
						<img src={img5} className="impression_cameraTag modelTip" />
						<div className="impression_plate_3">
							<p className="impression_title_1">
								汇聚镜头下的片刻美好
							</p>
							<p className="impression_subTitle_1">
								在美好景致与游走间，用镜头记录下行走的足迹，定格住那一刻的精彩
							</p>
							<button className="impression_btn1">查看摄影线路</button>
						</div>
					</div>
					
					
					{/*蜜月*/}
					
					<div className="impression_honey clearfix impression_model">
						<div className="impression_plate_2 fl">
							<p className="impression_title">陪你去看星辰大海</p>
							<p className="impression_subTitle">愿时间静止,将这一刻的幸福时光永远铭记</p>
							<button className="impression_btn1">查看蜜月线路</button>
						</div>
						<video className="video_2 fr" preload="metadata" src="http://image.goutrip.com/video2/miyue.mp4" controls="controls"></video>
						<img src={img2} className="videoPlayBtn" />
						<img src={img6} className="impression_honeyTag modelTip" />
					</div>
					
					
					{/*亲子*/}
					
					<div className="impression_parent clearfix impression_model rgba2">
						<video className="video_1" preload="metadata" src="http://image.goutrip.com/video2/qinzi.mp4" controls="controls"></video>
						<img src={img2} className="videoPlayBtn" />
						<img src={img7} className="impression_cameraTag modelTip" />
						<div className="impression_plate_3">
							<p className="impression_title_1">
								大手牵小手
							</p>
							<p className="impression_subTitle_1">
								在玩与乐的同时,激发家长与孩子之间妙趣横生的互动
							</p>
							<button className="impression_btn1">查看亲子线路</button>
						</div>
					</div>
					
					
					{/*自驾*/}
					
					<div className="impression_selfDring clearfix impression_model">
						<video className="video_3 fl" preload="metadata" src="http://image.goutrip.com/video2/zijia.mp4" controls="controls"></video>
						<img src={img2} className="videoPlayBtn" />
						<img src={img8} className="impression_selfDringTag modelTip" />
						<div className="impression_plate_4 fr">
							<p className="impression_title">有一种旅行的乐趣叫在路上</p>
							<p className="impression_subTitle">一辆车 , 一群人 , 贯穿着整个旅程 , 是速度与激情 , 也是灵魂的乌托邦.</p>
							<button className="impression_btn1">查看自驾线路</button>
						</div>
					</div>
					
					
					{/*滑雪*/}
					
					<div className="impression_skiing clearfix impression_model">
						<div className="impression_plate_2 fl">
							<p className="impression_title">驰骋在白雪皑皑的雪道上</p>
							<p className="impression_subTitle">尽情玩味大自然赋予冰雪的天然乐趣</p>
							<button className="impression_btn1">查看滑雪线路</button>
						</div>
						<video className="video_2 fr" preload="metadata" src="http://image.goutrip.com/video2/huaxue.mp4" controls="controls"></video>
						<img src={img2} className="videoPlayBtn" />
						<img src={img9} className="impression_honeyTag modelTip" />
					</div>
					
					
					
					
					
					
					
				</div>
			</div>
		)
	}
}
export default  Impression;