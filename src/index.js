import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Test from './routes/Test/Test.jsx';
import Home from './routes/Home/Home.jsx';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

const store = createStore(reducer);

class Main extends React.Component {
    render() {
        return (
            <Provider store={store}>
				<Router history={hashHistory}>
		                <Route path={"/"} component={App} >
		                    <IndexRoute component={Home} />
		                    <Route path={"test"} component={Test} />
		                    <Route path={"home"} component={Home} />
		                </Route>
		        </Router>
			</Provider>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));