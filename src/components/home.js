import React from 'react';
import 'antd/dist/antd.css';
import '../css/home.css';
import { Carousel } from 'antd';
import $ from 'jquery';

import Mock from 'mockjs';

import home_01 from '../images/home_01.png'
import home_02 from '../images/home_02.jpeg'
import home_03 from '../images/home_03.jpeg';
var Random = Mock.Random
Random.extend({
    imgs: function(date) {
        var imgs = [
        	"http://image.goutrip.com/9f/01f97da5b284b6f6e8b811915ecce7.png",
        	"http://image.goutrip.com/1c/a58521614582d05c39f925d7152edd.png",
        	"http://image.goutrip.com/f2/a3cf1ce0d6b56183b661acd9d535da.png",
        	"http://image.goutrip.com/9d/486ad13e0e58fef5698a59f9cc0de5.png",
        	"http://image.goutrip.com/d5/2c5675ebdbb347ab70e233144e9e83.png",
        	"http://image.goutrip.com/d5/864cea60042fc1436e7b4acc8d2d22.png",
        	"http://image.goutrip.com/70/8fbf7ab756efb004366fd8d153203d.png",
        	"http://image.goutrip.com/e2/86bf0f37fd430c296aa8e59d3b17c7.png",
        	"http://image.goutrip.com/31/f8028066acd2b8c3d6b87f3b9786be.jpg"
        ]
        return this.pick(imgs)
    }
})
Mock.mock('http://www.goutrip.com/list',{
	'list|9':[
		{	
			"imgsrc":"@imgs",
			"tit":"@ctitle(4)",
			"tcon":"@ctitle(7,14)"
		}
	]
});

class Home extends React.Component{
	constructor(props){
		super(props);
		this.state={
			list:[]
		}
	}
	componentDidMount(){
		var _this=this;
		$('.nav_wrap').removeClass('nav_wrap_trip');
		$('.searchInput').focus(function(){
			$('.searchList').css('display','block');
		});
		$('.searchInput').blur(function(){
			$('.searchList').css('display','none');
		})
		$.ajax({
			type:"get",
			url:"http://www.goutrip.com/list",
			dataType:'json',
			async:true,
			success:function(data){
				_this.setState({list:data.list});
//				console.log(data.list);
			}
		});
	//够主题的轮播
		var count =0;
		$('.nextBtn').click(function(){
			count++;
			if(count>2){
				count=0
			}
			
			$('#themesType').animate({left:-1236*count+'px'},1000);
		})
		$('.prevBtn').click(function(){
			count--;
			if(count<0){
				count=2;
			}
			$('#themesType').animate({left:-1236*count+'px'},1000);
		})
	}
	tap(){
//		console.log(this)
	}
	render(){
		return(
			<div>
			<div className='app_con'>
				<div>
				<Carousel effect="fade" autoplay='true' infinite='true'>
				    <div><a href='/trip'><img src={home_01} alt='logo'/></a></div>
				    <div><a href='/trip'><img src={home_02} alt='logo'/></a></div>
				    <div><a href='/trip'><img src={home_03} alt='logo'/></a></div>
				
				</Carousel>
				</div>
				{/* 搜索快*/}
				<div className='home_sou'>
					<div className="home_titles">
			            <h2>专注于全球主题旅行</h2>
			        </div>
			        <form className="searchBox" action="/trip/search">
			            <input type="text" placeholder="输入您想去的目的地/主题游" name="keyword" className="searchInput fl" autoComplete="off"/>
			            <input type="submit" value="搜索" className="searchIcon fr"/>
						<div className="searchList clearfix">
		                    <div className="ol-inner clearKey">
		                        <p className="search-title">热门主题</p>
		                        <ol className="seach-history-inner clearfix">
		                            <li>
		                                <a href="/trip?typeId=223">亲子</a>
		                            </li>
		                            <li>
		                                <a href="/trip?typeId=13">蜜月</a>
		                            </li>
		                            <li>
		                                <a href="/trip?typeId=1">摄影</a>
		                            </li>
		                            <li>
		                                <a href="/trip?typeId=258">潜水</a>
		                            </li>
		                            <li>
		                                <a href="/trip?typeId=263">冲浪</a>
		                            </li>
		                            <li>
		                                <a href="/trip?typeId=10">自驾</a>
		                            </li>
		                            <li>
		                                <a href="/trip?typeId=259">滑雪</a>
		                            </li>
		                          
		                        </ol>
		                    </div>
		                    <div className="ol-inner hotAddress">
		                        <p className="search-title">热门目的地</p>
		                        <ul className="hot-list-inner clearfix">
		                        <li>
		                        	<a href="/trip?hotTerminiId=203" target="_blank">欧洲</a>
							    </li>
							    <li>
							    	<a href="/trip?hotTerminiId=202" target="_blank">巴厘岛</a>
							    </li>
							    <li>
							    	<a href="/trip?hotTerminiId=201" target="_blank">美国</a>
							    </li>
							    </ul>
		                    </div>
		            	</div>
			        </form>
				</div>
			{/* 搜索快结束*/}
			{/* 够主题开始*/}
				<div className="goutrip">
				    <div className=" content">
				       {/* <!--每部分大标题-->*/}
				        <div className="home_titles">
				            <h2>够主题</h2>
				            <p className="sub-title">赴一场专属旅行时光</p>
				        </div>
				        {/*图文列表*/}
				        <div className="imgTxtList">
				            <ul className=" clearfix" id="themesType" >
				               {this.state.list.map(function(item,i){
				               		return (
				               			<li className="list Items" key={i}>
						                    <a href={"/trip?typeId="+i}>
						                        <img src={item.imgsrc} alt="" className="showPic"/>
						                        <div className=" popC">
						                            <h3 className="themesName">{item.tit}</h3>
						                            <p className="themesDes">{item.tcon}</p>
						                        </div>
						                    </a>
						                </li>
				               		)
				               })}
				                
				                
				            </ul>
				        </div>
				        <p className="prevNext">
				            <i className="prevBtn imgTxtPrevBtn"></i>
				            <i className="nextBtn imgTxtNextBtn"></i>
				        </p>
				    </div>
				</div>
			{/* 够主题结束*/}
			{/* 够产品开始*/}
				<div className="Boutique">
				    <div className="w1200 content">
				       {/* <!--每部分大标题-->*/}
				        <div className="home_titles">
				            <h2>够产品</h2>
				            <p className="sub-title">精雕细琢尚品本色</p>
				            {/*<!--更多主题-->*/}
				            {/*<!--列表-->*/}
				        </div>
				        <ul className=" clearfix">
				            
				            <li className="list list2">
				                <a href="/trip/detail?routeId=2386" target="_blank">
				                    <img src="http://image.goutrip.com/7e/b3c257f1a5c5d48457ca788a011039.jpg" alt="" className="showPic bgImage"/>
				                </a>
				                <div className="pop pop2">
				                    <p><a href="/trip/detail?routeId=2386" target="_blank">【浓情蜜月】巴厘岛5晚7日私家团（2人独立成团）</a></p>
				                    <h5><a href="/trip/detail?routeId=2386" target="_blank"><span>3499</span>起/人<del>4799</del><span>元<span></span></span></a></h5>
				                </div>
				            </li>
				            
				            <li className="list list2">
				                <a href="/trip/detail?routeId=2398" target="_blank">
				                    <img src="http://image.goutrip.com/7e/d823968a6c44377e3ef29d82987f5b.png" alt="" className="showPic bgImage"/>
				                </a>
				                <div className="pop pop2">
				                    <p><a href="/trip/detail?routeId=2398" target="_blank">【定格瞬间】肯尼亚坦桑尼亚12日摄影之旅</a></p>
				                    <h5><a href="/trip/detail?routeId=2398" target="_blank"><span>29999</span>起/人<del>30999</del><span>元<span></span></span></a></h5>
				                </div>
				            </li>
				            
				            <li className="list list2">
				                <a href="/trip/detail?routeId=2399" target="_blank">
				                    <img src="http://image.goutrip.com/58/e80c2782ddc3a6a6b426d40df7cf6.jpg" alt="" className="showPic bgImage"/>
				                </a>
				                <div className="pop pop2">
				                    <p><a href="/trip/detail?routeId=2399" target="_blank">【船宿潜水】印尼科莫多6晚7日潜水探险之旅</a></p>
				                    <h5><a href="/trip/detail?routeId=2399" target="_blank"><span>13999</span>起/人<del>15599</del><span>元<span></span></span></a></h5>
				                </div>
				            </li>
				            
				            <li className="list list2">
				                <a href="/trip/detail?routeId=2407" target="_blank">
				                    <img src="http://image.goutrip.com/f9/1e65831202b5736b9d0c0e45bdf659.jpg" alt="" className="showPic bgImage"/>
				                </a>
				                <div className="pop pop2">
				                    <p><a href="/trip/detail?routeId=2407" target="_blank">【欢乐亲子】马达加斯加昂达西贝狐猴5晚7天探秘之旅（2人成团）</a></p>
				                    <h5><a href="/trip/detail?routeId=2407" target="_blank"><span>17800</span>起/人<del>18999</del><span>元<span></span></span></a></h5>
				                </div>
				            </li>
				            
				            <li className="list list2">
				                <a href="/trip/detail?routeId=2434" target="_blank">
				                    <img src="http://image.goutrip.com/a6/e9cdedcbf26c4f7767d154cbfa0159.jpg" alt="" className="showPic bgImage"/>
				                </a>
				                <div className="pop pop2">
				                    <p><a href="/trip/detail?routeId=2434" target="_blank">【稀世秘境】失落世界，丹老群岛·7天</a></p>
				                    <h5><a href="/trip/detail?routeId=2434" target="_blank"><span>13495</span>起/人<del>15495</del><span>元<span></span></span></a></h5>
				                </div>
				            </li>
				            
				            <li className="list list2">
				                <a href="/trip/detail?routeId=2435" target="_blank">
				                    <img src="http://image.goutrip.com/37/1a9c5e997ed3095c4447600f80b68c.jpg" alt="" className="showPic bgImage"/>
				                </a>
				                <div className="pop pop2">
				                    <p><a href="/trip/detail?routeId=2435" target="_blank">【高棉的微笑】北京直飞吴哥窟3晚5日自由行</a></p>
				                    <h5><a href="/trip/detail?routeId=2435" target="_blank"><span>3499</span>起/人<del>3999</del><span>元<span></span></span></a></h5>
				                </div>
				            </li>
				            
				        </ul>
				        <p className="themes-more" >更多路线</p>
				
				    </div>
				</div>
			{/* 够产品结束*/}
			{/* 够定制开始*/}
			
			{/* 够定制结束*/}
			{/* 够服务开始*/}
			
			{/* 够服务结束*/}
			</div>
			</div>
		)
	}
}
export default Home;