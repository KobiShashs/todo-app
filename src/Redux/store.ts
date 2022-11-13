import { combineReducers, createStore } from "redux";
import {tasksReducer} from "./TaskAppState";


// Single Reducer
// const store = createStore(tasksReducer);


//Multiple reducers
 const reducers = combineReducers({tasksReducer: tasksReducer});
 const store = createStore(reducers)

// For getting data
//const xyz = store.getState().catState.cats;

export default store;