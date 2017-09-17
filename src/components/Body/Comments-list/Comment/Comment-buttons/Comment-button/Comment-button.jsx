import React from 'react';
import { connect } from 'react-redux';

class CommentButton extends React.Component {
	render() {
		let value = (this.props.type === 'edit') ? 'edit' : 'delete';
	    return (
	    	<div>
	    		<button className="" type="button">{value}</button>
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