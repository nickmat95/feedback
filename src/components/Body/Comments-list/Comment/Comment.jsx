import React from 'react';
import { connect } from 'react-redux';
import CommentButtons from './Comment-buttons/Comment-buttons.jsx'
import './Comment.css';

class Comment extends React.Component {
	render() {
	    return (
	    	<div className="comment">
	    		<p className="commentItem">date: {this.props.date}</p>
	    		<p className="commentItem">name: {this.props.name}</p>
	    		<p className="commentItem">phone: {this.props.phone}</p>
	    		<p className="commentItem">comment: </p>
	    		<textarea value={this.props.message} disabled="disabled" />
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