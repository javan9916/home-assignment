const initialState = {    
    users: [    
        { name: "Javier", lastname: "Araya", email: "jarayaporras@gmail.com", phone: "85285026", role: 1 }
    ]    
};    
   

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE":
            return {
                ...state,
                users: state.users.concat(action.payload)
            }
        default:
            return state;
    }
}

export default reducer;