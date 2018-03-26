import { createStore, applyMiddleware, compose } from "redux"
import rootReducer from "./redux/reducers/reducers"
import thunk from "redux-thunk"
import logger from "redux-logger"
import { routerMiddleware } from "react-router-redux"

// import createHistory from 'history/createHashHistory';
// import createHistory from 'history/createMemoryHistory';

export default function configureStore(initialState = {}) {
  console.log("initialState === ", initialState)
  console.log("env === ", process.env.NODE_ENV)

  const middleware = [
    thunk
    // ,routerMiddleware(createHistory())
  ]
  if (process.env.NODE_ENV !== "production") {
    middleware.push(logger)
  }

  const composedEnhancers = compose(applyMiddleware(...middleware))

  return createStore(rootReducer, initialState, composedEnhancers)
}
