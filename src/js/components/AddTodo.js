import React from "react"
import { connect } from "react-redux"
import {browserHistory} from 'react-router';
import $ from "jquery";

import { addTodo, fetchTodos } from "../actions/todoActions"


@connect()

export default class AddTodo extends React.Component {

  handleSubmit(e) {
    e.preventDefault();

    const titleField = document.getElementById("titleInput");
    const descField = document.getElementById("descInput");

    const todoTitle = titleField.value;
    const todoDesc = descField.value;

    const todo = {
      title: todoTitle,
      text: todoDesc,
      resolved: false
    }

    $.ajax({
      type: 'POST',
      url: '/',
      data: todo
    })

    this.props.dispatch(addTodo(todo));
    titleField.value = "";
    descField.value = "";


  }

  render() {
    const { todos } = this.props;

    return <form onSubmit={this.handleSubmit.bind(this)} autoComplete="off" >
          <input type="text" id="titleInput" placeholder="Title" /><br/>
          <input type="text" id="descInput" placeholder="Description" />
          <input id="submitButton"type="submit" value="Submit" />
        </form>
  }
}
