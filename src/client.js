import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

import configureStore from './shared/configureStore'
import App from './shared/App';
import {fromJS} from 'immutable';
// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = fromJS(window.__PRELOADED_STATE__);

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

// Create Redux store with initial state
//const enhancers = compose()
const store = configureStore(preloadedState);

ReactDOM.render((
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
), document.getElementById('root'));