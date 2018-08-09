import React from 'react'
import '../css/hotel.css'
import $ from 'jquery'


import { DatePicker } from 'antd';
import lb1 from '../images/03823ba5e7445122d6e8ae9e0e941d.jpg'
import lb2 from '../images/a4556ede6fcdd1f1e97882364e31fa.jpg'
import theme1 from '../images/82c8d6745a4085a1494871e746faa1.jpg'
import tese1 from '../images/2.jpg'
import tese2 from '../images/21.jpg'
import tese3 from '../images/23.jpg'

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}
//import {BrowserRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';


class Hotel extends React.Component{
	constructor (props){
		super(props);
	}
	componentDidMount(){
		var count = 0;
		var $li = $("#slider>ul>li");
		
		
		$('.nav_wrap').addClass('nav_wrap_trip')
		
		$(".slider_icon i").mouseenter(function(){
			$(this).stop().addClass('btn_act').siblings().stop().removeClass("btn_act");
			$li.eq($(this).index()).stop().fadeIn().siblings().stop().fadeOut();
			count = $(this).index();
		});
		var timer = setInterval(function(){
			count++;
			if(count == $li.length){
				count =0;
			}
			$li.eq(count).stop().fadeIn().siblings().stop().fadeOut();
			$(".slider_icon i").eq(count).stop().addClass('btn_act').siblings().stop().removeClass("btn_act");
			
		},3000)
		
		$('.pro_list li').on('mouseover',function(){
			//console.log($(this).index())
			$('.pro_content li').hide().eq($(this).index()).show()
		})
		
		$('.hotel_toggle_list li').on('mouseover',function(){
			$(this).addClass('hotel_toggle_over').siblings().removeClass('hotel_toggle_over')
			$(this).css('margin-left','79px').siblings().css('margin-left','89px')
		})
		
		$('.hotel_toggle_list li').on('mouseover',function(){
		//	console.log($(this).index())
				$('.list_tese').hide().eq($(this).index()).show()
		})
		
	}
	render(){
		return(
			<div>
			<div className='hotel'>
				{/*轮播图*/}
				<div className='bx_wrapper'>
					<div id="slider">
						<ul className="slider_list">
							<li><a href="#"><img src={lb1}/></a></li>
							<li><a href="#"><img src={lb2}/></a></li>
						</ul>
						<div className="slider_icon">
							<i className="btn btn_act"></i>
							<i className="btn"></i>
						</div>
					</div>
				</div>
				<div className='hotel_main'>
					<div className='search'>
						<ol>
							<li className='search_hotel'>
								<i className='search_line'></i>
								<span>酒店搜索</span>
								<i className='search_line'></i>
							</li>
							<li className='search_li'>
								<i className='address_icon'></i>
								<input type='text' id='city' className='search_area' placeholder='请输入目的地'/>
							</li>
							<li className='search_li'>
								<span className='search-txt'>入住</span>
								<DatePicker onChange={onChange} placeholder="请提前一天预定"/>
							</li>
							<li className='search_li'>
								<span className='search-txt'>离店</span>
								<DatePicker onChange={onChange} placeholder="退房时间"/>
							</li>
							<li className='search_li'>
								<input type="text" className="search_choose" placeholder="(选填)酒店名称/地标/商圈" />
							</li>
							<li className="search_btn">
				                <input type="button" className="searcher" value="搜索"/>
				            </li>
						</ol>
					</div>
				</div>
			</div>
			{/*产品清单*/}
			<div className="hotel_pro clearfix">
				<div className='w1200'>
					<ul className='pro_content fl'>
						<li className='hide'>
							<div className='pro_title'>
								<span className='yellow_diamon'>HOTEL</span>
								<span className='sub_title'>文化精品  The high-quality goods culture hotel</span>
								<span className='line'></span>
							</div>
							<div className='pro_txt'>
								<p className='pro_txt_inner'>
									<span>以“retro”的情愫，送给您最别致的穿越感受。</span>
									<span>将一座城市的文化历史，浓缩成一间房屋，令旅途时刻都充斥着带入感，使您轻而易举的了解到另一个国度的文化。</span>
									<span>我们的服务将令人排斥的老旧酒店套路屏蔽，以革新精神为您挑选出最具目的地文化特点的房间，送您最地道的出行感受。</span>
										
								</p>
								<p className='pro_txt_sub'>*请于预订前与我们核实，预订是否成功以酒店为准</p>
							</div>
						</li>
						<li className='hide' style={{'display':'none'}}>
							<div className='pro_title'>
								<span className='yellow_diamon'>HOTEL</span>
								<span className='sub_title'>海岛风情  Island amorous feelings of the hotel</span>
								<span className='line'></span>
							</div>
							<div className='pro_txt'>
								<p className='pro_txt_inner'>
									<span>还有什么比海景房来的更舒心，还有什么比沙屋水屋来的更自在。</span>
									<span>我们邀您尽快了体验一款淋漓尽致的人生，旅行的意义不仅仅在于风景，更重要的是一家酒店充满怎样的情怀。</span>
									<span>拥抱下热带，体验下现代化服务设施，每天出门都可以感受得到尊贵而自在的人生，是如此痛快。</span>
										
								</p>
								<p className='pro_txt_sub'>*请于预订前与我们核实，预订是否成功以酒店为准</p>
							</div>
						</li>
						<li className='hide' style={{'display':'none'}}>
							<div className='pro_title'>
								<span className='yellow_diamon'>HOTEL</span>
								<span className='sub_title'>健康养生  Healthy hotel</span>
								<span className='line'></span>
							</div>
							<div className='pro_txt'>
								<p className='pro_txt_inner'>
									<span>“至善感受，源自天性”，我们时刻关注一家酒店是否具备关爱心，在您出行的时候，能够时刻将最完美的服务陪伴左右。</span>
									<span>以东方最讲究的待客之道，融合周边原汁原味的自然风情，并送上最有诚意的健康养生服务，请在上帝的眷顾下，开启一场善待自己的旅途吧。</span>
									<span></span>
										
								</p>
								<p className='pro_txt_sub'>*请于预订前与我们核实，预订是否成功以酒店为准</p>
							</div>
						</li>
						<li className='hide' style={{'display':'none'}}>
							<div className='pro_title'>
								<span className='yellow_diamon'>HOTEL</span>
								<span className='sub_title'>名山胜景  Famous mountains scenic landscape hotel</span>
								<span className='line'></span>
							</div>
							<div className='pro_txt'>
								<p className='pro_txt_inner'>
									<span>生活在万山丛中，或者另辟蹊径的湖边，究竟是怎样的感受。</span>
									<span>我们秉承“自然而然”的观念，精选全球最贴近自然风情的酒店坐标，让充满花香美景的空间与入住的房间融为一体，庭院的漫步恍然犹如林间的游历一般，光线充沛的餐厅，木质的走廊，开阔的视窗，以及设施的多样，面面俱到。</span>
									<span></span>
										
								</p>
								<p className='pro_txt_sub'>*请于预订前与我们核实，预订是否成功以酒店为准</p>
							</div>
	</li>
						<li className='hide' style={{'display':'none'}}>
							<div className='pro_title'>
								<span className='yellow_diamon'>HOTEL</span>
								<span className='sub_title'>亲子悦动  Parent-child yue hotel</span>
								<span className='line'></span>
							</div>
							<div className='pro_txt'>
								<p className='pro_txt_inner'>
									<span>生活在别处，让孩子成为一个“四海有家”的人。</span>
									<span>为孩子及家人开启一段充满奇幻有趣的路途，必先拥有一间满是“人情味”的房间，让城市不再陌生，让欢乐随处可见。</span>
									<span>我们将各种美妙的场景切换，实现家与旅途的零距离，预定我们的服务，用不同的视界感受世界，用一顿温情的午餐，唤起孩子们最童真的梦。</span>
										
								</p>
								<p className='pro_txt_sub'>*请于预订前与我们核实，预订是否成功以酒店为准</p>
							</div>
						</li>
						<li className='hide' style={{'display':'none'}}>
							<div className='pro_title'>
								<span className='yellow_diamon'>HOTEL</span>
								<span className='sub_title'>别墅庄园  Villa manor hotel</span>
								<span className='line'></span>
							</div>
							<div className='pro_txt'>
								<p className='pro_txt_inner'>
									<span>在工作中，你或许扮演了诸多角色，而做自己反而是一件十分奢侈的事情。</span>
									<span>此时此刻，你可能最需要一个像样的别墅来度假。在庄园的陪伴下，卸掉一切面具和压力，轻松回归自我。</span>
									<span>预定我们的服务，我们将为您搜索全球最值得体验的庄园酒店，极赋特色的顶级设施与服务，最具创造力的高品位等您光临。</span>
										
								</p>
								<p className='pro_txt_sub'>*请于预订前与我们核实，预订是否成功以酒店为准</p>
							</div>
						</li>
						<li className='hide' style={{'display':'none'}}>
							<div className='pro_title'>
								<span className='yellow_diamon'>HOTEL</span>
								<span className='sub_title'>市郊游乐  On the outskirts of amusement hotel</span>
								<span className='line'></span>
							</div>
							<div className='pro_txt'>
								<p className='pro_txt_inner'>
									<span>对于追求快乐的旅人来说，什么才算绝好的落脚栖所？</span>
									<span>让你与游玩有绝对近距离，让你时刻可以感受摩登或古典的沉迷，让你有最便捷舒适的体验，这些都是你拿得出手来炫耀的名片。</span>
									<span>预定我们的服务，这些统统属于你。</span>
										
								</p>
								<p className='pro_txt_sub'>*请于预订前与我们核实，预订是否成功以酒店为准</p>
							</div>
						</li>
						<li className='hide' style={{'display':'none'}}>
							<div className='pro_title'>
								<span className='yellow_diamon'>HOTEL</span>
								<span className='sub_title'>商务酒店  Business Hotel </span>
								<span className='line'></span>
							</div>
							<div className='pro_txt'>
								<p className='pro_txt_inner'>
									<span>应对快速轮转的生活，你需要一个安心、舒适、便捷的多功能性住所。</span>
									<span>无论身在哪座城市，预定我们的服务，你都可以找到最匹配个人需求的商务房间。</span>
									<span>优越的地理位置，安全管家式服务，以及最具关怀的多功能设备服务，这些都是你需要住在这里的理由。</span>
										
								</p>
								<p className='pro_txt_sub'>*请于预订前与我们核实，预订是否成功以酒店为准</p>
							</div>
						</li>
						<li className='hide' style={{'display':'none'}}>
							<div className='pro_title'>
								<span className='yellow_diamon'>HOTEL</span>
								<span className='sub_title'>联合酒店  Hotel Union</span>
								<span className='line'></span>
							</div>
							<div className='pro_txt'>
								<p className='pro_txt_inner'>
									<span>我们拥有覆盖到全球100多个国家的资源，让旅途变得更省心。</span>
									<span>无论从地理位置还是到优质服务，我们都一一匹配到您的选择里，用便捷、健康、快乐的元素打败那些毫无生机的老旅馆，在旅途中更有时间和心情，规划自己想走的路。</span>
									<span></span>
										
								</p>
								<p className='pro_txt_sub'>*请于预订前与我们核实，预订是否成功以酒店为准</p>
							</div>
						</li>
						<li className='hide' style={{'display':'none'}}>
							<div className='pro_title'>
								<span className='yellow_diamon'>HOTEL</span>
								<span className='sub_title'>公寓浪潮  Apartment</span>
								<span className='line'></span>
							</div>
							<div className='pro_txt'>
								<p className='pro_txt_inner'>
									<span>旅行中一定要有相当珍贵的附加值，走的要有深度，住的要有高度。</span>
									<span>我们不知道最好的公寓是什么样子，但我们一直都在为您寻找最适合的那款。</span>
									<span>让您能够身在其中，无限亲近生活、自然之美，让您与这座陌生的城市变得没有丝毫距离。</span>
										
								</p>
								<p className='pro_txt_sub'>*请于预订前与我们核实，预订是否成功以酒店为准</p>
							</div>
						</li>
					</ul>
					<ol className='pro_list fr'>
							<li>
								<p>
									<i>文化精品</i>
									<span>The high-quality goods culture hotel</span>
								</p>
							</li>
							<li>
								<p>
									<i>海岛风情</i>
									<span>Island amorous feelings of the hotel</span>
								</p>
							</li>
							<li>
								<p>
									<i>健康养生</i>
									<span>Healthy hotel</span>
								</p>
							</li>
							<li>
								<p>
									<i>名山胜景</i>
									<span>Famous mountains scenic landscape hotel</span>
								</p>
							</li>
							<li>
								<p>
									<i>亲子悦动</i>
									<span>Parent-child yue hotel</span>
								</p>
							</li>
							<li>
								<p>
									<i>别墅庄园</i>
									<span>Villa manor hotel</span>
								</p>
							</li>
							<li>
								<p>
									<i>市郊游乐</i>
									<span>On the outskirts of amusement hotel</span>
								</p>
							</li>
							<li>
								<p>
									<i>商务酒店</i>
									<span>Business Hotel </span>
								</p>
							</li>
							<li>
								<p>
									<i>联合酒店</i>
									<span>Hotel Union</span>
								</p>
							</li>
							<li>
								<p>
									<i>公寓浪潮</i>
									<span>Apartment</span>
								</p>
							</li>
					</ol>
				</div>
				
			</div>
					
				
		
			{/*主题推荐*/}
			<div className='theme w1200'>
				<div className='theme_title'>
						<p className='title_inner'>
								<i className="title_line"></i>
								<span className="title_txt">主题推荐</span>
								<i className="title_line"></i>
						</p>
				</div>
				<div className='theme_toggle'>
					 <ul className="theme_toggle_icon clearfix">
        <li label="culture">
            <i id="icon_culture" className=""></i>
            <span className="icon_txt">文化精品</span>
        </li>
        <li label="island">
            <i id="icon_island" className=""></i>
            <span className="icon_txt">海岛风情</span>
        </li>
        <li label="healthy">
            <i id="icon_health" className="icon-health-hover"></i>
            <span className="icon_txt">健康养生</span>
        </li>
        <li label="mountains">
            <i id="icon_hill" className=""></i>
            <span className="icon_txt">名山盛景</span>
        </li>
        <li label="parentChild">
            <i id="icon_parent" className=""></i>
            <span className="icon_txt">悦动亲子</span>
        </li>
    </ul>
				<ol className='theme_toggle_img clearfix theme_list1'>
						<li>
								<img className="bgImage" src={theme1} alt=""/>
								<span className="img_txt">
										<i className="toggle_img_title fl" title="上海贝轩大公馆">上海贝轩大公馆</i>
										<span className="toggle_img_parice">
												<i>￥818</i> 起
										</span>
								</span>
						</li>
						<li>
								<img className="bgImage" src={theme1} alt=""/>
								<span className="img_txt">
										<i className="toggle_img_title fl" title="上海贝轩大公馆">上海贝轩大公馆</i>
										<span className="toggle_img_parice">
												<i>￥818</i> 起
										</span>
								</span>
						</li>
						<li>
								<img className="bgImage" src={theme1} alt=""/>
								<span className="img_txt">
										<i className="toggle_img_title fl" title="上海贝轩大公馆">上海贝轩大公馆</i>
										<span className="toggle_img_parice">
												<i>￥818</i> 起
										</span>
								</span>
						</li>
						<li>
								<img className="bgImage" src={theme1} alt=""/>
								<span className="img_txt">
										<i className="toggle_img_title fl" title="上海贝轩大公馆">上海贝轩大公馆</i>
										<span className="toggle_img_parice">
												<i>￥818</i> 起
										</span>
								</span>
						</li>
						<li>
								<img className="bgImage" src={theme1} alt=""/>
								<span className="img_txt">
										<i className="toggle_img_title fl" title="上海贝轩大公馆">上海贝轩大公馆</i>
										<span className="toggle_img_parice">
												<i>￥818</i> 起
										</span>
								</span>
						</li>
						<li>
								<img className="bgImage" src={theme1} alt=""/>
								<span className="img_txt">
										<i className="toggle_img_title fl" title="上海贝轩大公馆">上海贝轩大公馆</i>
										<span className="toggle_img_parice">
												<i>￥818</i> 起
										</span>
								</span>
						</li>
						<li>
								<img className="bgImage" src={theme1} alt=""/>
								<span className="img_txt">
										<i className="toggle_img_title fl" title="上海贝轩大公馆">上海贝轩大公馆</i>
										<span className="toggle_img_parice">
												<i>￥818</i> 起
										</span>
								</span>
						</li>
						<li>
								<img className="bgImage" src={theme1} alt=""/>
								<span className="img_txt">
										<i className="toggle_img_title fl" title="上海贝轩大公馆">上海贝轩大公馆</i>
										<span className="toggle_img_parice">
												<i>￥818</i> 起
										</span>
								</span>
						</li>
				</ol>
					
				
				</div>
				<p className="theme_more">查看更多</p>
			</div>
			{/*特色酒店*/}
			<div className='hotel_tese'>
				<div className='w1200'>
					<div className="hotel_title">
            		<p className="title_inner">
	                    <i className="title_line"></i>
	                    <span className="title_txt">特色酒店</span>
	                    <i className="title_line"></i>
	                </p>
    	</div>
    	<div className="hotel_toggle clearfix">
			<ul className="hotel_toggle_list fl">
        <li className="">上海特色酒店</li>
        <li className="">杭州特色酒店</li>
        <li className="">三亚特色酒店</li>
        <li className="">厦门特色酒店</li>
        <li className="hotel_toggle_hover">苏州特色酒店</li>
    	</ul>
        	<ol className='hotel_toggle_inner fl'>
    			<li className="clearfix list_tese">
                    <div className="hotel_inner_title">
                        <span className="address">上海</span>
                        <span className="address_cover">迪士尼2016年6月16日盛大开幕，游乐园的夜晚，帮助孩子们填满心中最美的梦。</span>
                    </div>
                    <div className="hotel_inner_img">
                        <img className="bgImage" data-src="" src={tese1} alt=""/>
                        <span className="img_txt">
                            <i className="toggle_img_title">上海贝轩大公馆</i>
                            <span className="toggle_img_parice"><i>￥818</i> 起</span>
                        </span>
                    </div>
                    <div className="hotel_inner_img">
                         <img className="bgImage" data-src="" src={tese2} alt=""/>
                        <span className="img-txt">
                            <i className="toggle_img_title">上海西岭度假村</i>
                            <span className="toggle_img_parice"><i>￥200</i> 起</span>
                        </span>
                    </div>
                    <div className="hotel_inner_img">
                        <img className="bgImage" data-src="" src={tese3} alt="" />
                        <span className="img-txt">
                            <i className="toggle_img_title">上海鸿华度假酒店</i>
                            <span className="toggle_img_parice"><i>￥580</i> 起</span>
                        </span>
                    </div>
                </li>
                <li className="clearfix list_tese">
                    <div className="hotel_inner_title">
                        <span className="address">杭州</span>
                        <span className="address_cover">爱上这儿的天青色，也许不必等烟雨，所有最美的相遇，都不及鲥鱼&花雕的1%。</span>
                    </div>
                    <div className="hotel_inner_img">
                        <img className="bgImage" data-src="" src={tese1} alt=""/>
                        <span className="img_txt">
                            <i className="toggle_img_title">杭州第一世界大酒店</i>
                            <span className="toggle_img_parice"><i>￥871</i> 起</span>
                        </span>
                    </div>
                    <div className="hotel_inner_img">
                         <img className="bgImage" data-src="" src={tese2} alt=""/>
                        <span className="img-txt">
                            <i className="toggle_img_title">杭州米兰四季·富驿酒店</i>
                            <span className="toggle_img_parice"><i>￥288</i> 起</span>
                        </span>
                    </div>
                    <div className="hotel_inner_img">
                        <img className="bgImage" data-src="" src={tese3} alt="" />
                        <span className="img-txt">
                            <i className="toggle_img_title">杭州紫晶大酒店</i>
                            <span className="toggle_img_parice"><i>￥388</i> 起</span>
                        </span>
                    </div>
                </li>
                <li className="clearfix list_tese">
                    <div className="hotel_inner_title">
                        <span className="address">三亚</span>
                        <span className="address_cover">挥别单人房，爱上双人床。与“失散”很久的人，一起用海鲜疗伤，一起荡气回肠。</span>
                    </div>
                    <div className="hotel_inner_img">
                        <img className="bgImage" data-src="" src={tese1} alt=""/>
                        <span className="img_txt">
                            <i className="toggle_img_title">三亚蜈支洲岛珊瑚酒店</i>
                            <span className="toggle_img_parice"><i>￥1089</i> 起</span>
                        </span>
                    </div>
                    <div className="hotel_inner_img">
                         <img className="bgImage" data-src="" src={tese2} alt=""/>
                        <span className="img-txt">
                            <i className="toggle_img_title">三亚海棠湾万达希尔顿逸林度假酒店</i>
                            <span className="toggle_img_parice"><i>￥641</i> 起</span>
                        </span>
                    </div>
                    <div className="hotel_inner_img">
                        <img className="bgImage" data-src="" src={tese3} alt="" />
                        <span className="img-txt">
                            <i className="toggle_img_title">三亚景利莱度假酒店</i>
                            <span className="toggle_img_parice"><i>￥208</i> 起</span>
                        </span>
                    </div>
                </li>
                <li className="clearfix list_tese">
                    <div className="hotel_inner_title">
                        <span className="address">厦门</span>
                        <span className="address_cover">与历史兜圈，和小吃缠绵，住在鼓浪屿，不再新鲜却有说不完的“黑鳳梨”。</span>
                    </div>
                    <div className="hotel_inner_img">
                        <img className="bgImage" data-src="" src={tese1} alt=""/>
                        <span className="img_txt">
                            <i className="toggle_img_title">厦门山水丽景大酒店</i>
                            <span className="toggle_img_parice"><i>￥468</i> 起</span>
                        </span>
                    </div>
                    <div className="hotel_inner_img">
                         <img className="bgImage" data-src="" src={tese2} alt=""/>
                        <span className="img-txt">
                            <i className="toggle_img_title">厦门米欧风情主题酒店</i>
                            <span className="toggle_img_parice"><i>￥248</i> 起</span>
                        </span>
                    </div>
                    <div className="hotel_inner_img">
                        <img className="bgImage" data-src="" src={tese3} alt="" />
                        <span className="img-txt">
                            <i className="toggle_img_title">厦门华美达长升大酒店</i>
                            <span className="toggle_img_parice"><i>￥458</i> 起</span>
                        </span>
                    </div>
                </li>
                <li className="clearfix list_tese">
                <div className="hotel_inner_title">
                    <span className="address">苏州</span>
                    <span className="address_cover">逃出儿时的必修课，在小城故事与未来城市间任意穿梭，1.8公里的苏州湾，生态美的没话说。</span>
                </div>
                <div className="hotel_inner_img">
                    <img className="bgImage" data-src="" src={tese1} alt=""/>
                    <span className="img_txt">
                        <i className="toggle_img_title">苏州长江智选假日酒店</i>
                        <span className="toggle_img_parice"><i>￥350</i> 起</span>
                    </span>
                </div>
                <div className="hotel_inner_img">
                     <img className="bgImage" data-src="" src={tese2} alt=""/>
                    <span className="img-txt">
                        <i className="toggle_img_title">苏州苏哥利酒店</i>
                        <span className="toggle_img_parice"><i>￥441</i> 起</span>
                    </span>
                </div>
                <div className="hotel_inner_img">
                    <img className="bgImage" data-src="" src={tese3} alt="" />
                    <span className="img-txt">
                        <i className="toggle_img_title">苏州置鼎中茵国际公寓</i>
                        <span className="toggle_img_parice"><i>￥441</i> 起</span>
                    </span>
                </div>
            </li>
        	</ol>
    	
        	
    	</div>
    	
    </div>
			</div>
			
		</div>
		)
	}

}
export default  Hotel;