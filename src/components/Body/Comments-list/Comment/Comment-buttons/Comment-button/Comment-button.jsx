import React from 'react';
import { connect } from 'react-redux';

class CommentButton extends React.Component {
	render() {
	    return (
	    	<div>
	    		<button className="" type="button">val</button>
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(CommentButton);