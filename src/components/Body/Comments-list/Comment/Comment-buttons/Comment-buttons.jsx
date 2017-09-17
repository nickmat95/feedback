import React from 'react';
import { connect } from 'react-redux';
import CommentButton from './Comment-button/Comment-button.jsx';
import './Comment-buttons.css';

class CommentButtons extends React.Component {
	render() {
	    return (
	    	<div>
	    		<CommentButton key="1" type="edit" />
	    		<CommentButton key="2" type="delete" />
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