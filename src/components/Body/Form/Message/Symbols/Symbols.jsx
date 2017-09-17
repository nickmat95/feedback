import React from 'react';
import { connect } from 'react-redux';

class Symbols extends React.Component {

	constructor(props) {
	    super(props);

	    this.getEnableAmount = this.getEnableAmount.bind(this);
	}

	getEnableAmount() {
		return (256 - Number(this.props.amount));
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
		amount: state.changeSymbolsAmount
	}),
	dispatch => ({

	})
)(Symbols);