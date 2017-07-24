// DEPENDENCIES //
import React from "react"

// COMPONENTS //
import TodoList from './TodoList'
import AddTodo from './AddTodo'

// REACT // 
export default class Home extends React.Component {
    componentWillMount(){

        const todo = {
          title: "todoTitle",
          description: "todoDesc",
          resolved: false
        }

        
        $.ajax({ 
             type: "GET",
             data: todo,
             url: "/get/todos?"+"myID=1234",
             success: function(data){        
                console.log(data);
             }
         });
         
    }

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
