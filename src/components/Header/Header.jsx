import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
	render() {
	    return (
	    	<div className="header">
		    	<div className="container">
		        	<p className="title">Feedback</p>
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
)(Header);