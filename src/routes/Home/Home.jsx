import React from 'react';
import { connect } from 'react-redux';
import CommentsList from './Comments-list/Comments-list.jsx';
import Form from './Form/Form.jsx';
import './Home.css';

class Home extends React.Component {
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
)(Home);