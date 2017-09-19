import React from 'react';
import { connect } from 'react-redux';
import './Test.css';

class Test extends React.Component {
	render() {
	    return (
	    	<div className="container">
	    		<h1>Welcome to routing demonstration page!</h1>
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(Test);