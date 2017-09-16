import React from 'react';
import { connect } from 'react-redux';

class SubmitBtn extends React.Component {
	render() {
	    return (
	    	<div>
	    		<button className="submit" type="button">submit</button>
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(SubmitBtn);