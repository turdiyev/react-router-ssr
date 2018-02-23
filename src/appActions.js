export const LOADED_QUESTIONS = 'LOADED_QUESTIONS';
import axios from 'axios'

export function loadQuestions() {
    return (dispatch, getState) => {
        return axios.get('https://api.github.com/')
            .then((res) => {
                if (res) {
                     dispatch({ type: LOADED_QUESTIONS, response: res.data });
                }
            })
    }
}