import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';
//import PropTypes from 'prop-types';



import './App.css';
import './font/iconfont.css'
import $ from 'jquery'
import Custom from './components/custom'
import Home from './components/home'
import Heart from './components/heart'
import Login from './components/login'
import Trip from './components/trip'
import Vr from './components/vr'
import Impression from './components/impression'
import Register from './components/register'
import Hotel from './components/hotel'


import weibo from './images/weibo_xl.png';
import baijia from './images/baijia.png';
import toutiao from './images/toutiao.png';
import weixin from './images/appGoutrip.png';

import Mock from 'mockjs';

Mock.mock('http://www.nav.com/nav',{
	'list|9':[
		{
			'id|+1':0,
			'tit':'@ctitle(4)',
			'address|2-7':[{
				'name':'@city()'
			}]
		}
	]
});
class App extends Component {
//	static contextTypes = {
//	    router: PropTypes.object.isRequired
//	  }

	constructor(props){
		super(props);
		this.state={
			arr:[]
		}
	}
	
  render() {
  	
    return (
      <div>
      	<Router>
      		<div>
      		<div className='nav_wrap'>
				<div className='home_nav'>
					<ul>

					<li><span className='logopic'></span></li>
		      		<li><NavLink to='/home' activeStyle={{color:'rgb(242, 175, 51)',textDecoration: 'none'}}>首页</NavLink></li>
		      		<li className='nav_sub'>
		      			<NavLink to='/trip' activeStyle={{color:'rgb(242, 175, 51)',textDecoration: 'none'}}>主题旅行<i></i></NavLink>
		      			<div className='drop_down'>
		      				<p></p>
		      				<div className='nav_list clearfix'>
		      					{
		      						this.state.arr.map(function(item,i){
		      							return(
		      								<div className="drop-module clearfix fl" key={i}>
									            <p className="drop-module-title clearfix">
									                <img className="type-img" src="http://image.goutrip.com/eb/ebeca8f8ff392d9b09a5e0a6326831.png"/>
									                <span className="module-title-name fl" >{item.tit}</span>
									                <span className="module-title-more fr" >更多</span>
									            </p>
									            <ul className="drop-module-inner clearfix">
									            	{
									            		item.address.map(function(val,idx){
									            			return (
									                			<li key={idx} className="module-inner-nation fl">{val.name}</li>
									            			)
									            		})
									            	}


									            </ul>
									        </div>
		      							)
		      						})
		      					}
		      					



		      				</div>
		      			</div>
		      		</li>
		      		<li><NavLink to='/hotel' activeStyle={{color:'rgb(242, 175, 51)',textDecoration: 'none'}}>主题酒店</NavLink></li>
		      		<li><NavLink to='/custom' activeStyle={{color:'rgb(242, 175, 51)',textDecoration:'none'}}>私人订制</NavLink></li>
		      		<li><NavLink to='/vr' activeStyle={{color:'rgb(242, 175, 51)',textDecoration:'none'}}>vr旅行</NavLink></li>
		      		<li><NavLink to='/impression' activeStyle={{color:'rgb(242, 175, 51)',textDecoration:'none'}}>主题印象</NavLink></li>
		      		<li><NavLink to='/heart' activeStyle={{color:'rgb(242, 175, 51)',textDecoration:'none'}}>零感触发</NavLink></li>
		      		</ul>
			      	<div className='home_nav_right'>
			      		<span className='iconfont icon-gerenzhongxin'></span>
			      		<Link to='/register'>注册</Link>
			      		<a href='/' onClick={this.tap.bind(this)}>/</a>
			      		<Link to='/login' >登录</Link>
					</div>
				</div>
			</div>
						
				<Switch>
					<Route path='/home' component={Home}></Route>
					<Route path='/trip' component={Trip}></Route>
					<Route path='/hotel' component={Hotel}></Route>
					<Route path='/custom' component={Custom}></Route>
					<Route path='/vr' component={Vr}></Route>
					<Route path='/impression' component={Impression}></Route>
					<Route path='/heart' component={Heart}></Route>
					<Route path='/register' component={Register}></Route>
					<Route path='/login' component={Login}></Route>
				
      				<Redirect to='/home'/>
      			</Switch>
      			
      		</div>
      	</Router>
				
				
			<footer>
				<div className='app_btm'>
					<div className='app_btm_left'>
						<p>关于够旅游</p>
						<ul className='clearfix'>
							<li><span>关于我们</span></li>
							<li><span>媒体报道</span></li>
							<li><span>工作机会</span></li>
							<li><span>联系我们</span></li>
							<li><span>隐私免责</span></li>
							<li><span>服务条款</span></li>
						</ul>
						<p className='font_color'>客服电话：400-065-5161</p>
						<p className='font_color'>客户服务邮箱：server@goutrip.com</p>
					</div>
					<div className='app_btm_lf'>
						<p>旅行服务</p>
						<ul>
							<li><span>境外wifi</span></li>
							<li><span>签证预定</span></li>
						</ul>
					</div>
					<div className='app_btm_rgt'>
						<p>关注我们</p>
						<div>
							<img src={weibo} alt='关注'/>
							<img src={baijia} alt='关注'/>
							<img src={toutiao} alt='关注'/>
						</div>
					</div>
					<div className='app_btm_right'>
						 <ul className='clearfix'>
							<li><img src={weixin} alt='weixin'/></li>
							<li><img src={weixin} alt='weixin'/></li>
						</ul>
					</div>
				</div>
				<div className='app_ft'>
					<p>
						Copyright ©2017 Gtrip.com  丨 京ICP备14016142号-1 丨 京公网安备11010802014913号 丨 北京汇智纵横信息技术有限公司 丨 地址：北京市海淀区中关村东路18号财智国际大厦A座17层
					</p>
				</div>
			</footer>
      </div>
    );
  }
//以上是页面
	componentDidMount(){
		var _this = this;
		 $('.nav_sub').mouseenter(function(){
		 		$('.drop_down').css('display','block');
		 });
		 $('.nav_sub').mouseleave(function(){
		 		$('.drop_down').css('display','none');
		 });
		$.ajax({
			type:'get',
			url:'http://www.nav.com/nav',
			dataType:'json',
			success:function(data){
				_this.setState({arr:data.list});
				
			}
		});
	}
	tap(){
		
		
	}
}


export default App;
