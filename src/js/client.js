import React from "react"
import ReactDOM from "react-dom"
import { createStore, combineReducers } from 'redux'
import { Provider } from "react-redux"
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


import Home from "./components/Home"
import About from "./components/About"
import SignIn from "./components/SignIn"
import Layout from "./components/Layout"
import store from "./store"
import reducer from "./reducers"

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Layout}>
            	<IndexRoute component={Home}/>
            	<Route path="/about" component={About}/>
            	<Route path="/sign-in" component={SignIn}/>
            </Route>
        </Router>
    </Provider>, 
document.getElementById('app'));
