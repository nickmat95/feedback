import React from 'react';
import { connect } from 'react-redux';
import Comment from './Comment/Comment.jsx';

class CommentsList extends React.Component {
	render() {
	    return (
	    	<div>
	    		<Comment />
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(CommentsList);