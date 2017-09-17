import React from 'react';
import { connect } from 'react-redux';
import './Submit-btn.css';

class SubmitBtn extends React.Component {

	constructor(props) {
	    super(props);

	    this.addComment = this.addComment.bind(this);
	}

	addComment() {
		
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