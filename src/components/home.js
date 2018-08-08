import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Trip from './trip'
import Hotel from './hotel'

class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <h1>Home</h1>
                <a href="/login">a外登录</a>
                <Router>
                    <div>
                        <Link to="/trip">旅游</Link>
                        <Link to="/hotel">酒店</Link>
                        <a href="/login">a登录</a>
                        {/* <Link to="/login">link登录</Link> */}

                        <div>
                            <Route path="/trip" component={Trip}></Route>
                            <Route path="/hotel" component={Hotel}></Route>
                        </div>
                    </div>
                   
                </Router>
            </div>
        )
    }
}

export default Home