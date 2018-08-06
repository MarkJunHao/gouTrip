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
				
	      		<Link to='/home'>首页</Link>
	      		<Link to='/trip'>主题旅行</Link>
	      		<Link to='/hotel'>主题酒店</Link>
	      		<Link to='/custom'>私人订制</Link>
	      		<Link to='/vr'>vr旅行</Link>
	      		<Link to='/impression'>主题印象</Link>
	      		<Link to='/heart'>零感触发</Link>
	      		<Link to='/register'>注册/</Link>
	      		<Link to='/login'>登录</Link>
						<hr/>
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
