export const createUser = (user) => {
    return (dispatch) => {
        dispatch({
            type: "CREATE",
            payload: user
        })
    }
}