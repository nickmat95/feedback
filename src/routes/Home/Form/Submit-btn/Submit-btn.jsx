import React from 'react';
import { connect } from 'react-redux';
import './Submit-btn.css';

class SubmitBtn extends React.Component {

	constructor(props) {
	    super(props);

	    this.addComment = this.addComment.bind(this);
	}

	addComment() {

		let storageComments = JSON.parse(localStorage.getItem('comments'));

		let currentDate = new Date();

		let commentsList = [];

		let comment = {
			id: '',
			name: this.props.name,
			phone: this.props.phone,
			date: currentDate,
			message: this.props.message
		};

		if (storageComments === null || !storageComments[0]) {
			comment.id = 0;
			commentsList = [comment];
		} else {
			let lastElement = storageComments.length - 1;
			let lastId = storageComments[lastElement].id;
			let newId = Number(lastId) + 1;

			comment.id = newId;
			storageComments.push(comment);
			commentsList = storageComments;
		}

		let serialComments = JSON.stringify(commentsList); 

		localStorage.setItem('comments', serialComments);

		this.props.getCommentsList(JSON.parse(localStorage.getItem('comments')));
	}

	render() {
	    return (
	    	<div>
	    		<button className="submit" type="button" disabled={!this.props.name || !this.props.message} onClick={this.addComment}>submit</button>
	    	</div>
	    );
	}
}

export default connect(
	state => ({
		name: state.getName,
		phone: state.getPhone,
		message: state.getMessage
	}),
	dispatch => ({
		getCommentsList: (item) => dispatch({ type: 'GET_COMMENTS', payload: item }),
	})
)(SubmitBtn);