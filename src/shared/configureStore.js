import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux'

// import createHistory from 'history/createHashHistory';
// import createHistory from 'history/createMemoryHistory';

export default function configureStore(initialState) {
    console.log("initialState === ", initialState)

    const middleware = [
        thunk,
        logger,
        // routerMiddleware(createHistory())
    ];

    const composedEnhancers = compose(
        applyMiddleware(...middleware)
    );

    return createStore(
        rootReducer,
        initialState,
        composedEnhancers
    )
}