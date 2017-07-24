import React from "react"

import { connect } from "react-redux"

@connect()

export default class SignIn extends React.Component {
    
    render() {
        return(
        	<div>
        		<button>Facebook</button>
        		<button>Google</button>
        	</div>
    	);
    }
}
