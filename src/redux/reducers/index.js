import { combineReducers } from 'redux';
import memberReducer from './memberReducer';

// Function to combine all existing reducers
const reducers = combineReducers({
    members: memberReducer
});

export default reducers;