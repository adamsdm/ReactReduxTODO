import React from "react"

import { connect } from "react-redux"

@connect()

export default class SignIn extends React.Component {
    
    render() {
        return(
        	<div>
        		<a href="/auth/facebook">Facebook</a>
        		<button>Google</button>
        	</div>
    	);
    }
}
