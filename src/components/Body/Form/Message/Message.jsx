import React from 'react';
import { connect } from 'react-redux';
import Symbols from './Symbols/Symbols.jsx';
import './Message.css';

class Message extends React.Component {

	constructor(props) {
	    super(props);
	    
	    this.state = {
	    	commentValue: '',
	    };

	    this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		let value = event.target.value;

		this.setState({
			commentValue: value
		});

		this.props.getMessage(value);
	}

	render() {
	    return (
	    	<div className="field">
	    		<p>enter your message*: </p>
	        	<textarea maxLength="256" value={this.state.commentValue} onChange={this.handleChange} />
	        	<Symbols />
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({
		getMessage: (item) => dispatch({ type: 'GET_MESSAGE', payload: item }),
	})
)(Message);