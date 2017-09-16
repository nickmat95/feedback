import React from 'react';
import { connect } from 'react-redux';
import CommentButtons from './Comment-buttons/Comment-buttons.jsx'

class Comment extends React.Component {
	render() {
	    return (
	    	<div className="comment">
	    		<p className="commentItem">date: ...</p>
	    		<p className="commentItem">name: ...</p>
	    		<p className="commentItem">phone: ...</p>
	    		<p className="commentItem">comment: </p>
	    		<textarea disabled="disabled">comment text</textarea>
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