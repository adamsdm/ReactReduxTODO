import React from "react"
import { connect } from "react-redux"

import { removeTodo } from "../actions/todoActions"

import Todo from "./Todo"

@connect((store) => {
  return {
    todos: store.todos
  };
})


export default class TodoList extends React.Component {

  handleRemove(e){
    this.props.dispatch(removeTodo(e.target.innerHTML));
  }

  render() {
    const that = this;
    const { todos } = this.props.todos;

    console.log(this.props);
    
    const mappedtodos = todos.map(function(todo) {
      return <Todo todo={todo}/>
    })

    return <div>
      <h2> Todos </h2>
      {mappedtodos}
    </div>
  }
}
