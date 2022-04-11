// Reducer initial state list
const initialState = {
    members: [
        { id: 1, name: "Javier", lastname: "Araya", email: "javier@gmail.com", phone: "8528-5026", role: "admin" },
    ]
};

/**
 * 
 * @param {*} state: Initial state of the reducer
 * @param {*} action: Action to take, eg: "ADD" new team member, "EDIT" existing team member, etc...
 * @returns a redux reducer with team member handling actions
 */
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                members: state.members.concat(action.payload)
            }
        case "EDIT":
            return {
                ...state,
                members: state.members.map((content, i) =>
                    content.id === action.payload.id ? {
                        ...content,
                        name: action.payload.name,
                        lastname: action.payload.lastname,
                        email: action.payload.email,
                        phone: action.payload.phone,
                        role: action.payload.role,
                    } : content)
            };
        case "DELETE":
            return {
                ...state,
                members: state.members.filter(item => item.id !== action.payload)
            }
        default:
            return state;
    }
}

export default reducer;