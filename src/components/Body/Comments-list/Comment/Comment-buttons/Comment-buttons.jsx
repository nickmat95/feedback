import React from 'react';
import { connect } from 'react-redux';
import CommentButton from './Comment-button/Comment-button.jsx';
import './Comment-buttons.css';

class CommentButtons extends React.Component {
	render() {
	    return (
	    	<div>
	    		<CommentButton
	    		key="1"
	    		type="edit"
	    		commentId={this.props.commentId}
	    		/>
	    		<CommentButton
	    		key="2"
	    		type="delete"
	    		commentId={this.props.commentId}
	    		/>
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(CommentButtons);