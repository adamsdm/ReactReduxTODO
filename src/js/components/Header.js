// DEPENDENCIES //
import React from "react"
import { Link } from 'react-router';

// REACT // 
export default class Header extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Brand</a>
          </div>

          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>

            <ul class="nav navbar-nav navbar-right">
              <li><Link to="/sign-in">Sign in</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      )
  }
}
