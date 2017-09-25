import React from 'react';
import { connect } from 'react-redux';
import './Comment-text.css';

class CommentText extends React.Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	value: this.props.value,
	    };

	    this.changeComment = this.changeComment.bind(this);
	}

	componentDidMount() {
		this.props.getChangeComment(this.state.value);
	}

	changeComment(event) {
		let comment = event.target.value;

		this.setState({
			value: comment
		});

		this.props.getChangeComment(comment);
	}

	render() {
		let editButtonState = (this.props.commentId !== this.props.editButtonState.id) ? 'edit' : this.props.editButtonState.state;

	    return (
	    	<div>
	    		<textarea value={this.state.value} onChange={this.changeComment} disabled={editButtonState === 'edit'} />
	    	</div>
	    );
	}
}

export default connect(
	state => ({
		editButtonState: state.getEditButtonState
	}),
	dispatch => ({
		getChangeComment: (item) => dispatch({ type: 'GET_CHANGE_COMMENT', payload: item }),
	})
)(CommentText);