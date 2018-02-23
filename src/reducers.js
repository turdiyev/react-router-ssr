import { combineReducers } from 'redux'


export const LOADED_QUESTIONS = 'LOADED_QUESTIONS';

const test = (state = { olma: 122 }, action) => {
    console.log(action.type, action.response);
    switch (action.type) {
        case LOADED_QUESTIONS:
            // console.log(action.type, action.response);
            return { ...state, list: action.response }
            break;

        default:
            return state
    }
}

const rootReducer = combineReducers({
    test
})

export default rootReducer