import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import './App.css';

import Home from './components/home'
import Login from './components/login'
import Regist from './components/regist'

class App extends Component {
  render() {
    return (
      <div className="App">
			<header className="App-header">
			
			</header>
        
			<Router>
				<div>
					<Switch>
						<Route path='/home' component={Home}></Route>
						<Route path='/login' component={Login}></Route>
						<Route path='/regist' component={Regist}></Route>

						<Redirect to='/home' />
					</Switch>
				</div>	
			</Router>

      </div>
    );
  }
}

export default App;
