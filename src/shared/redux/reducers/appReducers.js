import createReducer from './createReducer';
import { Record, List, Map, fromJS } from 'immutable';

import * as ActionType from '../actionTypes/appTypes';

const DefaultState = {
    res: null,
    item: null
}

const Reducers = {
    [ActionType.LOADED_QUESTIONS](state, { response }) {
        console.log(state);
        return state.set('res', Map(response));
    }
}

export default createReducer(DefaultState, Reducers);