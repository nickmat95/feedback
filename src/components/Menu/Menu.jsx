import React from 'react';
import { connect } from 'react-redux';
import './Menu.css';
import { Link } from 'react-router';

class Menu extends React.Component {
	render() {
	    return (
	    	<div className="menu">
		    	<div className="container">
		        	<ul className="menuItems">
		        		<li>
		        			<Link to="/">home page</Link>
		        		</li>
		        		<li>
		        			<Link to="/test">test page</Link>
		        		</li>
		        	</ul>
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
)(Menu);