import { combineReducers } from "redux";
import memberReducer from "./memberReducer";

const reducers = combineReducers({
    members: memberReducer
});

export default reducers;