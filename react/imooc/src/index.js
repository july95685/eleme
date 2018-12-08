
import ReactDom from 'react-dom'
import createStore from './store'
import thunk from 'redux-thunk'
import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom'
import App from './App'
import Login from './components/login/login.js'
import AuthRouter from './components/authrouter/authrouter.js'
import Geniusinfo from './components/geniusinfo/geniusinfo.js'
import Register from './components/register/register.js'
import Bossinfo from './components/Bossinfo/Bossinfo.js'
import Dashboard from './components/Dashboard/Dashboard.js'
import { Provider } from 'react-redux'
import { counter } from './index.redux'


const store = createStore({})
console.log(store.getState())

function Boss() {
    return <h1>123</h1>
}
// function Dashboard() {
//     return <h2>Dashboard</h2>
// }

ReactDom.render(
    <Provider store = {store} >
        <BrowserRouter>
            <div>
                <AuthRouter></AuthRouter> 
                <Switch>
                    <Route path='/bossinfo' component={Bossinfo}></Route>
                    <Route path='/geniusinfo' component={Geniusinfo}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/register' component={Register}></Route>
                    <Route component = {Dashboard}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
