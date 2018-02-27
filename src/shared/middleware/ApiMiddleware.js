const apiMiddleware = ({dispatch, getState}) => next => action => {
    if (!action.api || !action.types) {
        return next(action)
    }
    const {api, types: [START, SUCCESS, ERROR], data} = action;
    const request = data;

    dispatch({
        type: START,
        request,
        data
    });

    return api(data)
        .then(response => {
            const result = response && response.data || null;
            dispatch({
                type: SUCCESS,
                data: result,
                request: data
            });
            return result;
        })
        .catch(error => {
            dispatch({
                type: ERROR,
                error
            });
            const errorMessage = error && error.response
                && error.response.data && error.response.data.message;
            errorDisplay(errorMessage);
            return Promise.reject(errorMessage);
            // throw new Error(errorMessage);
        })
};
export default apiMiddleware;


let showError = true;
function errorDisplay(errorMessage = "Error") {
    if (showError) {
        showError = false;
        // alert(errorMessage);
        setTimeout(() => {
            showError = true;
        }, 3000);
    }
}