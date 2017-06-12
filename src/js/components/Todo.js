import React from "react"

import { connect } from "react-redux"
import { removeTodo } from "../actions/todoActions"

@connect((store) => {
  return {
    todos: store.todos
  };
})



export default class Todo extends React.Component {
    handleRemove(e){
        this.props.dispatch(removeTodo(this.props.todo.text));
    }

    render() {

        const { todo } = this.props;

        var textStyle = {};
        if(todo.resolved)
            textStyle = {color: "green"}

        return <div className="todoPostIt" onClick={this.handleRemove.bind(this)} style={textStyle}> 
                <h3> {todo.title} </h3>
                <p> {todo.text} </p>
            </div>
        
    }
}
