import React from 'react';
import { connect } from 'react-redux';
import './Comment-button.jsx';

class CommentButton extends React.Component {

	constructor(props) {
	    super(props);

	    this.buttonAction = this.buttonAction.bind(this);
	    this.edditComment = this.edditComment.bind(this);
	    this.deleteComment = this.deleteComment.bind(this);
	}

	buttonAction() {
		if (this.props.type === 'edit') {
			this.edditComment();
		} else {
			this.deleteComment();
		}
	}

	edditComment() {
		console.log('eddit');
	}

	deleteComment() {
		let storageComments = JSON.parse(localStorage.getItem("comments"));
		let newCommentsList = storageComments.filter((object) => object.id != this.props.commentId);

		let serialComments = JSON.stringify(newCommentsList); 

		localStorage.setItem("comments", serialComments);

		this.props.getCommentsList(JSON.parse(localStorage.getItem("comments")));
	}

	render() {
		let value = (this.props.type === 'edit') ? 'edit' : 'delete';
	    return (
	    	<div>
	    		<button className="" type="button" onClick={this.buttonAction}>{value}</button>
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({
		getCommentsList: (item) => dispatch({ type: 'GET_COMMENTS', payload: item }),
	})
)(CommentButton);