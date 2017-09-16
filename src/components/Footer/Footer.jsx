import React from 'react';
import { connect } from 'react-redux';

class Footer extends React.Component {
	render() {
	    return (
	    	<div className="footer">
		    	<div className="container">
		        	<span>some footer text..</span>
		    	</div>
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(Footer);