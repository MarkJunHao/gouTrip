import React from 'react'
import $ from 'jquery'
import '../css/product.css'
import pro_1 from '../images/pro_1.png'
import pro_2 from '../images/pro_2.png'


class Product extends React.Component{
	
	componentDidMount(){
		$('.nav_wrap').addClass('nav_wrap_trip')
	}
	
	
	render(){
		return(
			
			<div className='wrap'>
				<div className='Pro_main'>
					<div>
						{/*主题顶部开始*/}
						<div className='Pro_Ma_top'>
							<p>
				                <span>首页</span> &gt;
				                <span>精品路线</span>
				                <span className="Pro_blueTheme"></span>
				                <span className="Pro_blueActive"></span>
				                <span className="Pro_blueGou"></span>
				            </p>
				            <div className="Pro_themeSelected">
				                <div className="Pro_chooseTheme">
				                    <div className="Pro_themeList">
				                        <img src={pro_1}/>
				                        <strong> 主题选择</strong>
				                    </div>
				                    <div className="Pro_themeList">
				                        <span className="Pro_blue" type="typeId" dataid="0">不限</span>
			                            <span type="typeId" dataid="257">特色汇聚</span>
			                            <span type="typeId" dataid="13">蜜月浓情</span>
			                            <span type="typeId" dataid="223">亲子人文</span>
			                            <span type="typeId" dataid="10">自驾狂欢</span>
			                            <span type="typeId" dataid="1">摄影取景</span>
			                            <span type="typeId" dataid="259">滑雪冲刺</span>
			                            <span type="typeId" dataid="263">冲浪挑战</span>
			                            <span type="typeId" dataid="258">潜水探秘</span>
			                            <span type="typeId" dataid="269">独家定制</span>
				                    </div>
				                </div>
				                <div className="Pro_chooseType">
				                    <img src={pro_2}/>
				                    <strong> 活动类型</strong>
				                    <span className="Pro_blue" type="queryType" dataid="0">不限</span>
				                    <span type="queryType" dataid="5">推荐</span>
				                    <span type="queryType" dataid="4">特价</span>
				                    <span type="queryType" dataid="3">热卖</span>
				                    <span type="queryType" dataid="2">新品</span>
				                    <span type="queryType" dataid="1">团购</span>
				                    <span type="queryType" dataid="6">返现</span>
				                </div>
				            </div>
						</div>
						{/*主题顶部结束*/}
						{/*主题左部开始*/}
						<div className='Pro_Ma_left'>
							{/*下拉选项*/}
							<div className="Pro_tripStyle">
				                <div className="Pro_sec1">旅行方式&nbsp;<i className="Pro_sec-arrow-1" id="sec-arr"></i>
				                    <div className="Pro_tripStyle">
				                        <a href="javascript:;" type="groupType" dataid="1">独立团</a>
				                        <a href="javascript:;" type="groupType" dataid="2">自由行</a>
				                        <a href="javascript:;" type="groupType" dataid="3">半自由</a>
				                        <a href="javascript:;" type="groupType" dataid="4">私家团</a>
				                    </div>
				                </div>
				
				                <div className="Pro_timePrice">
				                    <span className="Pro_time1 J_day">天数</span>
				                    <p>
				                        <i className="Pro_img_top1" data-id="5"></i>
				                        <i className="Pro_img_botm1" data-id="6"></i>
				                    </p>
				                    <span className="Pro_time2 J_price">价格</span>
				                    <p>
				                        <i className="Pro_img_top2" data-id="3"></i>
				                        <i className="Pro_img_botm2" data-id="4"></i>
				                    </p>
				                </div>
				            </div>
						
						</div>
						{/*主题左部结束*/}
						
					</div>
				</div>
			</div>
			
		)
	}
}
export default Product;