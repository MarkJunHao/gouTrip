import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom';

import Custom from './custom'
import Home from './home'
import Heart from './heart'

import Trip from './trip'
import Vr from './vr'
import Impression from './impression'

import Hotel from './hotel'


class Nav extends Component {
  render() {
    return (
      <div>
      	<Router>
      		<div>
			<div className='home_nav'>
				<ul>
					<li><a href='/'></a></li>
		      		<li><Link to='/home'>首页</Link></li>
		      		<li><Link to='/trip'>主题旅行</Link></li>
		      		<li><Link to='/hotel'>主题酒店</Link></li>
		      		<li><Link to='/custom'>私人订制</Link></li>
		      		<li><Link to='/vr'>vr旅行</Link></li>
		      		<li><Link to='/impression'>主题印象</Link></li>
		      		<li><Link to='/heart'>零感触发</Link></li>
		      	</ul>
		      	<div className='home_nav_right'>
		      		<a href='/register'>注册</a>
		      		<a href='/login'>登录</a>
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
					
					<Redirect to='/home'/>
      			</Switch>
      		</div>
      	</Router>
				
      </div>
    );
  }
}

export default Nav;
