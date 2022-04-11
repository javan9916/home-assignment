/**
 * 
 * @param {*} member: New member to add
 * @returns dispatch object with action type and payload
 */
export const addMember = (member) => {
    return (dispatch) => {
        dispatch({
            type: "ADD",
            payload: member
        })
    }
}

/**
 * 
 * @param {*} member: Member object to edit
 * @returns dispatch object with action type and payload
 */
export const editMember = (member) => {
    return (dispatch) => {
        dispatch({
            type: "EDIT",
            payload: member
        })
    }
}

/**
 * 
 * @param {*} memberId: memberId of member to delete
 * @returns dispatch object with action type and payload
 */
export const deleteMember = (memberId) => {
    return (dispatch) => {
        dispatch({
            type: "DELETE",
            payload: memberId
        })
    }
}