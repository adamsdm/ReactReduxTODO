// DEPENDENCIES //
import React from "react"

// COMPONENTS //
import TodoList from './TodoList'
import AddTodo from './AddTodo'

// REACT // 
export default class Home extends React.Component {
  render() {
    return (
    	<div>
	        <h1> My todo-list app </h1>
	        <AddTodo />
	        <TodoList />
      	</div>
      )
  }
}
