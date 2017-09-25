import React from 'react';
import { connect } from 'react-redux';
import DeleteButton from './Delete-button/Delete-button.jsx';
import EditButton from './Edit-button/Edit-button.jsx';
import CommentText from './Comment-text/Comment-text.jsx';
import './Comment.css';

class Comment extends React.Component {

	constructor(props) {
	    super(props);

	    this.displayedDate = this.displayedDate.bind(this);
	}

	displayedDate() {
		let commentDate = new Date(this.props.date);
		let currentDate = new Date();
		let difference = Math.floor(((currentDate - commentDate)/1000)/60);

		let displayedDate = (difference <= 3) ? `${difference} minutes ago` : commentDate.toLocaleString();
		
		return displayedDate;
	}

	render() {
	    return (
	    	<div className="comment">
	    		<DeleteButton commentId={this.props.id} />
	    		<p className="commentItem">date: {this.displayedDate()}</p>
	    		<p className="commentItem">name: {this.props.name}</p>
	    		<p className="commentItem">phone: {this.props.phone}</p>
	    		<p className="commentItem">comment: </p>
	    		<CommentText
	    			commentId={this.props.id}
	    			value={this.props.message}
	    		/>
	    		<EditButton commentId={this.props.id} />
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