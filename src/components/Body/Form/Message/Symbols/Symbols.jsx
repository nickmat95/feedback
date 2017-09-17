import React from 'react';
import { connect } from 'react-redux';
import './Symbols.css';

class Symbols extends React.Component {

	constructor(props) {
	    super(props);

	    this.getEnableAmount = this.getEnableAmount.bind(this);
	}

	getEnableAmount() {
		return (256 - (this.props.message).length);
	}

	render() {
	    return (
	    	<div>
	    		<span>enable symbols are: {this.getEnableAmount()}</span>
	    	</div>
	    );
	}
}

export default connect(
	state => ({
		message: state.getMessage
	}),
	dispatch => ({

	})
)(Symbols);