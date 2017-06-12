import { combineReducers } from "redux"
import { routerReducer } from 'react-router-redux'

import user from "./userReducer"
import todos from "./todoReducer"

export default combineReducers({
  todos, routing: routerReducer
})
