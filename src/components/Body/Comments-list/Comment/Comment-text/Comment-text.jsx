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
	    return (
	    	<div>
	    		<textarea value={this.state.value} onChange={this.changeComment} disabled={this.props.editButtonState === 'edit'} />
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({
		getChangeComment: (item) => dispatch({ type: 'GET_CHANGE_COMMENT', payload: item }),
	})
)(CommentText);