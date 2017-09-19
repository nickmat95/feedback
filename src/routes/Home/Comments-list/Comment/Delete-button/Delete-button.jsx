import React from 'react';
import { connect } from 'react-redux';
import './Delete-button.css';

class DeleteButton extends React.Component {

	constructor(props) {
	    super(props);

	    this.deleteComment = this.deleteComment.bind(this);
	}

	deleteComment() {
		let storageComments = JSON.parse(localStorage.getItem("comments"));
		let newCommentsList = storageComments.filter((object) => object.id != this.props.commentId);

		let serialComments = JSON.stringify(newCommentsList); 

		localStorage.setItem("comments", serialComments);

		this.props.getCommentsList(JSON.parse(localStorage.getItem("comments")));
	}

	render() {
	    return (
	    	<div>
	    		<button className="deleteButton" type="button" onClick={this.deleteComment}>delete</button>
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
)(DeleteButton);