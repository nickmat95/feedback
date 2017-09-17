import React from 'react';
import { connect } from 'react-redux';

class Field extends React.Component {

	render() {
		let value = (this.props.type === 'name') ? 'name*' : 'phone';
		let required = (this.props.type === 'name') ? 'required' : 'false';
	    return (
	    	<div className="field">
	    		<p>enter your {value}</p>
	        	<input type="text" required={required} />
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