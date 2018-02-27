import { combineReducers } from 'redux-immutable';
import app from './appReducers'

const rootReducer = combineReducers({
    app
})

export default rootReducer;