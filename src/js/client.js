import React from "react"
import ReactDOM from "react-dom"
import { createStore, combineReducers } from 'redux'
import { Provider } from "react-redux"
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


import Layout from "./components/Layout"
import About from "./components/About"
import store from "./store"
import reducer from "./reducers"

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Layout} />
            <Route path="/about" component={About}/>
        </Router>
    </Provider>, 
    document.getElementById('app'));
