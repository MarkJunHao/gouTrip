import React from 'react'
import '../css/heart.css'
import $ from 'jquery'
import a33 from '../images/heart/33.jpg'
import a34 from '../images/34.png'
import a35 from '../images/heart/35.jpg'
import a36 from '../images/heart/36.png'
import a37 from '../images/heart/37.jpg'
import a38 from '../images/heart/38.jpg'
import a39 from '../images/heart/39.jpg'
import a40 from '../images/heart/40.jpg'
import a41 from '../images/heart/41.png'
import a42 from '../images/heart/42.jpg'
import a43 from '../images/heart/43.jpg'
import a44 from '../images/heart/44.jpg'
import a45 from '../images/heart/45.jpg'
import a46 from '../images/heart/46.png'
import a47 from '../images/heart/47.jpg'
import a48 from '../images/heart/48.jpg'
import a49 from '../images/heart/49.jpg'
import a50 from '../images/heart/50.jpg'
import a51 from '../images/heart/51.png'
import a52 from '../images/heart/52.jpg'
import a53 from '../images/heart/53.jpg'
import a54 from '../images/heart/54.jpg'
import a55 from '../images/heart/55.jpg'
import a56 from '../images/56.png'
import a57 from '../images/heart/57.jpg'
import a58 from '../images/58.png'
import a59 from '../images/heart/59.jpg'
import a60 from '../images/heart/60.jpg'
import a61  from '../images/61.png'
import a441 from '../images/heart/441.png'
import a442 from '../images/heart/442.png'
import a443 from '../images/heart/443.png'

class Herat extends React.Component{
//	constructor (props){
//		super(props);
//		
//		
//		
//	}
	
	render(){
		return(
			<div>
				<div className="heart_title" >
				    <img className="img" src={a33} alt=""/>
				</div>
				<div className="two_img">
				    <img className="img" src={a34} alt=""/>
				</div>
				<div className="t_two" >
				    <img className="img" src={a35} alt=""/>
				</div>
				<div className="sg_img clearfix">
				    <img className="img3_top" src={a36} alt=""/>
				    <img className="img3_one1 fl" src={a37} alt=""/ >
				    <img className="img3_onetext fl" src={a38} alt=""/>
				    <img className="img3_one2 fl" src={a39} alt="" />
				    <img className="img3_one3 fl" src={a40} alt="" />
				</div>
				<div className="sg_img clearfix">
				    <img className="img3_top" src={a41} alt=""/>
				    <img className="img3_one1 fl" src={a42} alt=""/ >
				    <img className="img3_onetext fl" src={a43} alt=""/>
				    <img className="img3_one2 fl" src={a44} alt="" />
				    <img className="img3_one3 fl" src={a45} alt="" />
				</div>
				<div className="sg_img clearfix">
				    <img className="img3_top" src={a46} alt=""/>
				    <img className="img3_one1 fl" src={a47} alt=""/ >
				    <img className="img3_onetext fl" src={a48} alt=""/>
				    <img className="img3_one2 fl" src={a49} alt="" />
				    <img className="img3_one3 fl" src={a50} alt="" />
				</div>
				<div className="sg_img clearfix">
				    <img className="img3_top" src={a51} alt=""/>
				    <img className="img3_one1 fl" src={a52} alt=""/ >
				    <img className="img3_onetext fl" src={a53} alt=""/>
				    <img className="img3_one2 fl" src={a54} alt="" />
				    <img className="img3_one3 fl" src={a55} alt="" />
				</div>
				<div className="last_text">
				    <img className="img" src={a56} alt=""/>
				</div>
				<div className="foot_iomg1">
				    <img className="img" src={a57} alt=""/>
				    <img className="foot_iomg1_mb" src={a441} alt=""/>
				</div>
				<div className="foot_iomg1 foot_iomg2">
				    <img className="img" src={a59} alt=""/>
				    <img className="foot_iomg1_mb" src={a442} alt=""/>
				</div>
				<div className="foot_iomg1">
				    <img className="img" src={a60} alt=""/>
				    <img className="foot_iomg3_mb" src={a443} alt=""/>
				</div>
				<div className="foot_text">
				    <img className="img" src={a61} alt=""/>
				</div>
				
				{/*底部表格*/}
				<div className="foot_last">
				    <div className="foot_last_con">
				        <div className="foot_last_top clearfix">
				            <div className="foot_last_name fl">
				                <input className="fl" type="text" name="" id="name" placeholder="姓名"/>
				            </div>
				            <div className="foot_last_region fl">
				                <input className="fl" type="text" name="" id="termini" placeholder="海外目的地"/>
				            </div>
				            <div className="foot_last_day fl">
				                <input className="fl" type="text" name="" id="days" placeholder="天数"/>
				            </div>
				        </div>
				        <div className="foot_last_in clearfix">
				            <div className="foot_last_phone fl">
				                <input className="fl" type="text" name="" id="phone" placeholder="手机"/>
				            </div>
				        </div>
				        <div className="foot_last_bottom clearfix">
				            <div className="foot_last_bei fl">
				                <textarea className="fl " name="" id="remark" placeholder="备注内容"></textarea>
				            </div>
				        </div>
				        <div className="foot_last_but" id="submit">提交</div>
				    </div>
				</div>
			</div>
			
		)
	}
}
export default  Herat;