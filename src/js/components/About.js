import React from "react"

import { connect } from "react-redux"

@connect()

export default class About extends React.Component {
    
    render() {
        console.log(this.props);
        return <h1> About page </h1>
    }
}
