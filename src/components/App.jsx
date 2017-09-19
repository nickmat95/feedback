import React from 'react';
import { connect } from 'react-redux';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import Menu from './Menu/Menu.jsx';

class App extends React.Component {
	render() {
	    return (
	    	<div>
	    		<Header />
	    		<Menu />
	        	{this.props.children}
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