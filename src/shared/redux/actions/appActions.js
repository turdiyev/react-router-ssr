import * as ActionType from "../actionTypes/appTypes"
import axios from "axios"

export function loadQuestions(data) {
  return (dispatch, getState) => {
    dispatch({
      type: ActionType.LOADED_QUESTIONS_PARAMS,
      data
    })
    return axios.get("https://api.github.com/").then(res => {
      if (res) {
        dispatch({ type: ActionType.LOADED_QUESTIONS, response: res.data })
      }
    })
  }
}
