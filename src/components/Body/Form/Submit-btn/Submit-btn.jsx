import React from 'react';
import { connect } from 'react-redux';
import './Submit-btn.css';

class SubmitBtn extends React.Component {

	constructor(props) {
	    super(props);

	    this.addComment = this.addComment.bind(this);
	}

	addComment() {

		let storageComments = JSON.parse(localStorage.getItem("comments"));

		let currentDate = new Date();

		let commentsList = [];

		let comment = {
			name: this.props.name,
			phone: this.props.phone,
			date: currentDate,
			message: this.props.message
		};

		if (storageComments === null) {
			commentsList = [comment];
		} else {
			storageComments.push(comment);
			commentsList = storageComments;
		}

		let serialComments = JSON.stringify(commentsList); 

		localStorage.setItem("comments", serialComments);
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

	})
)(SubmitBtn);