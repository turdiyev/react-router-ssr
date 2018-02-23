import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux'
import configureStore from './configureStore';
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import rootReducers from './reducers'

import { Helmet } from "react-helmet";
import Template from './template';
import App from './App';
import thunk from 'redux-thunk'
import axios from 'axios';

export default function serverRenderer({ clientStats, serverStats }) {
	return (req, res, next) => {
		console.log("Server Renderer =====> ",req, res, next)
		axios.get('https://api.github.com/')
			.then((resT) => {


				console.log("REEEEEEEEEEEEEEEEE");
				
				const context = {};
				// Create a new Redux store instance
				const store = configureStore();
				// console.log('ready')
				const markup = ReactDOMServer.renderToString(
					<Provider store={store}>
						<StaticRouter location={req.url} context={context}>
							<App />
						</StaticRouter>
					</Provider>
				);
				const helmet = Helmet.renderStatic();

				// Grab the initial state from our Redux store
				const preloadedState = store.getState();


				res.status(200).send(Template({
					markup: markup,
					helmet: helmet,
					resData: resT.data,
					preloadedState
				}));


			})

	};
}