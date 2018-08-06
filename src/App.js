import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './font/iconfont.css'

import Custom from './components/custom'
import Home from './components/home'
import Heart from './components/heart'
import Login from './components/login'
import Trip from './components/trip'
import Vr from './components/vr'
import Impression from './components/impression'
import Register from './components/register'
import Hotel from './components/hotel'


class App extends Component {
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
		      		<Link to='/register'>注册</Link>
		      		<Link to='/login'>登录</Link>
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
				
      </div>
    );
  }
}

export default App;