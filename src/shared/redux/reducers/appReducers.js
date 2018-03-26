import createReducer from "./createReducer"
import * as ActionType from "../actionTypes/appTypes"

const DefaultState = {
  res: null,
  item: null
}

const Reducers = {
  [ActionType.LOADED_QUESTIONS](state, { response }) {
    console.log(state)
    return { ...state, res: response }
  }
}

export default createReducer(DefaultState, Reducers)
