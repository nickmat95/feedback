import React from 'react';
import { connect } from 'react-redux';
import CommentButtons from './Comment-buttons/Comment-buttons.jsx'
import './Comment.css';

class Comment extends React.Component {
	render() {
	    return (
	    	<div className="comment">
	    		<p className="commentItem">date: ...</p>
	    		<p className="commentItem">name: ...</p>
	    		<p className="commentItem">phone: ...</p>
	    		<p className="commentItem">comment: </p>
	    		<textarea value="comment text.." disabled="disabled" />
	    		<CommentButtons />
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(Comment);