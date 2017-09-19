import React from 'react';
import { connect } from 'react-redux';
import './Edit-button.css';

class EditButton extends React.Component {

	constructor(props) {
	    super(props);

	    this.edditComment = this.edditComment.bind(this);

	    this.state = {
	    	type: 'edit',
	    };
	}

	edditComment() {

		let buttonType = (this.state.type === 'edit') ? 'save' : 'edit';

		this.setState({
			type: buttonType
		});

		this.props.getEditButtonState(buttonType);

		if (buttonType === 'edit') {
			let storageComments = JSON.parse(localStorage.getItem("comments"));

			storageComments.forEach((item, i, arr) => {
				if(item.id === Number(this.props.commentId)) {
					item.message = this.props.comment
				}
			});

			console.log('storage:', storageComments);

			let serialComments = JSON.stringify(storageComments); 
			localStorage.setItem("comments", serialComments);
			this.props.getCommentsList(JSON.parse(localStorage.getItem("comments")));
		}
	}

	render() {
		let value = (this.state.type === 'edit') ? 'edit' : 'save';
	    return (
	    	<div>
	    		<button className="editButton" type="button" onClick={this.edditComment}>{value}</button>
	    	</div>
	    );
	}
}

export default connect(
	state => ({
		comment: state.getChangeComment
	}),
	dispatch => ({
		getCommentsList: (item) => dispatch({ type: 'GET_COMMENTS', payload: item }),
	})
)(EditButton);