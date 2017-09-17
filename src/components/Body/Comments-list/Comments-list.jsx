import React from 'react';
import { connect } from 'react-redux';
import Comment from './Comment/Comment.jsx';
import './Comments-list.css';

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