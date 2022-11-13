import { combineReducers, createStore } from "redux";
import {tasksReducer} from "./TaskAppState";
import {userReducer} from "./UserAppState";


// Single Reducer
// const store = createStore(tasksReducer);


//Multiple reducers
 const reducers = combineReducers({tasksReducer: tasksReducer,userReducer:userReducer});
 const store = createStore(reducers);
// TODO : deprecated method

// For getting data
//const xyz = store.getState().catState.cats;

export default store;