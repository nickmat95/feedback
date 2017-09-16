import React from 'react';
import { connect } from 'react-redux';

class Field extends React.Component {
	render() {
	    return (
	    	<div className="field">
	    		<p>enter your </p>
	        	<input type="text" title="test" />
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(Field);