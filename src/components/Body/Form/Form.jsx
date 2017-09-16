import React from 'react';
import { connect } from 'react-redux';
import UserData from './User-data/User-data.jsx';
import Message from './Message/Message.jsx';
import SubmitBtn from './Submit-btn/Submit-btn.jsx';

class Form extends React.Component {
	render() {
	    return (
	    	<div className="Form">
	        	<UserData />
	        	<Message />
	        	<SubmitBtn />
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(Form);