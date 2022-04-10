export const addMember = (member) => {
    return (dispatch) => {
        dispatch({
            type: "ADD",
            payload: member
        })
    }
}

export const editMember = (member) => {
    return (dispatch) => {
        dispatch({
            type: "EDIT",
            payload: member
        })
    }
}

export const deleteMember = (memberId) => {
    return (dispatch) => {
        dispatch({
            type: "DELETE",
            payload: memberId
        })
    }
}