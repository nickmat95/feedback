import React from 'react';
import { connect } from 'react-redux';
import Header from './Header/Header.jsx';
import Body from './Body/Body.jsx';
import Footer from './Footer/Footer.jsx';

class App extends React.Component {
	render() {
	    return (
	    	<div>
	    		<Header />
	        	<Body />
	        	<Footer />
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(App);