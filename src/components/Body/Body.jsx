import React from 'react';
import { connect } from 'react-redux';
import CommentsList from './Comments-list/Comments-list.jsx';
import Form from './Form/Form.jsx';
//import './Body.css';

class Body extends React.Component {
	render() {
	    return (
	    	<div className="container">
	    		<CommentsList />
	        	<Form />
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(Body);