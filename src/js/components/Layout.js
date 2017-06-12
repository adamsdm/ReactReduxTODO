// DEPENDENCIES //
import React from "react"
import { Link } from 'react-router';

// COMPONENTS //
import TodoList from './TodoList'
import AddTodo from './AddTodo'

// REACT // 
export default class Layout extends React.Component {
  render() {
    return <div className="container">
        <h1> My todo-list app </h1>
        <AddTodo />
        <TodoList />
        <Link to="/about"> Click Here </Link>
      </div>
  }
}
