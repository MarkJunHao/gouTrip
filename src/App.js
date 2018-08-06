import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom';
import logo from './logo.svg';
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







class App extends Component {
		tap(){
  		window.location.reload()
  	}
	
  render() {
    return (
      <div>
      	<Router>
      		<div>
						<div className='home_nav'>
	      		<Link to='/home' onClick={this.tap.bind(this)}>首页</Link>
	      		<Link to='/trip' onClick={this.tap.bind(this)}>主题旅行</Link>
	      		<Link to='/hotel' onClick={this.tap.bind(this)}>主题酒店</Link>
	      		<Link to='/custom' onClick={this.tap.bind(this)}>私人订制</Link>
	      		<Link to='/vr' onClick={this.tap.bind(this)}>vr旅行</Link>
	      		<Link to='/impression' onClick={this.tap.bind(this)}>主题印象</Link>
	      		<Link to='/heart' onClick={this.tap.bind(this)}>零感触发</Link>
	      		<Link to='/register' onClick={this.tap.bind(this) }>注册/</Link>
	      		<Link to='/login' onClick={this.tap.bind(this)}>登录</Link>
						</div>
					</div>	
				</Router>
						<hr/>
				<Router>
      		<div>		
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
