import {fromJS} from 'immutable';

export default function createReducer(initialState, handlers) {
    return (state = initialState, action) => {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](fromJS(state), action)
        } else {
            return fromJS(state)
        }
    }
}