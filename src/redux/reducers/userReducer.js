const initialState = {    
    users: [    
        { name: "Javier", lastname: "Araya", email: "javier@gmail.com", phone: "8528-5026", role: "admin" },
        { name: "Jorge", lastname: "Araya", email: "jorge@gmail.com", phone: "8528-5027", role: "regular" },
        { name: "Alejandro", lastname: "Araya", email: "alejandro@gmail.com", phone: "8528-5028", role: "regular" },
        { name: "Jose", lastname: "Araya", email: "jose@gmail.com", phone: "8528-5029", role: "regular" }
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