import React from 'react';
import { connect } from 'react-redux';

class Field extends React.Component {

	constructor(props) {
	    super(props);

	    this.getFieldData = this.getFieldData.bind(this);
	}

	getFieldData(event) {
		let value = event.target.value;

		if(this.props.type === 'name') {
			this.props.getName(value);
		} else {
			this.props.getPhone(value);
		}
	}

	render() {
		let value = (this.props.type === 'name') ? 'name*' : 'phone';
		let required = (this.props.type === 'name') ? 'required' : 'false';
	    return (
	    	<div className="field">
	    		<p>enter your {value}</p>
	        	<input type="text" required={required} onChange={this.getFieldData} />
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({
		getName: (item) => dispatch({ type: 'GET_NAME', payload: item }),
		getPhone: (item) => dispatch({ type: 'GET_PHONE', payload: item }),
	})
)(Field);