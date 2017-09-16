import React from 'react';
import { connect } from 'react-redux';
import Field from './Field/Field.jsx';

class UserData extends React.Component {
	render() {
	    return (
	    	<div>
	    		<Field key="1" type="name" />
	        	<Field key="2" type="phone" />
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(UserData);