// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable';
import { Record, List, Map, fromJS } from 'immutable';

export const LOADED_QUESTIONS = 'LOADED_QUESTIONS';

const Home = new Record({
    res: null,
    item: null
})

const test = (state = new Home(), action) => {
    switch (action.type) {
        case LOADED_QUESTIONS:
            return state.set('res', Map(action.response));
            break;

        default:
            return state
    }
}

const rootReducer = combineReducers({
    test
})

export default rootReducer