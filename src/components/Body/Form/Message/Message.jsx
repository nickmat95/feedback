import React from 'react';
import { connect } from 'react-redux';

class Message extends React.Component {
	render() {
	    return (
	    	<div className="field">
	    		<p>enter your message: </p>
	        	<textarea title="message.."></textarea>
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(Message);