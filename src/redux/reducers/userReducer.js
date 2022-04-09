const initialState = {    
    users: [    
        { name: "Javier", lastname: "Araya", email: "jarayaporras@gmail.com", phone: "85285026", role: 1 },
        { name: "Jorge", lastname: "Araya", email: "jarayaporras@gmail.com", phone: "85285026", role: 1 },
        { name: "Alejandro", lastname: "Araya", email: "jarayaporras@gmail.com", phone: "85285026", role: 1 },
        { name: "Jose", lastname: "Araya", email: "jarayaporras@gmail.com", phone: "85285026", role: 1 }
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