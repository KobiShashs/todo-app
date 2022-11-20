import {applyMiddleware, combineReducers, createStore} from "redux";
import {tasksReducer} from "./TaskAppState";
import {userReducer} from "./UserAppState";
import logger from 'redux-logger'

//Multiple reducers
 const reducers = combineReducers({tasksReducer: tasksReducer,userReducer:userReducer});
 const store = createStore(reducers,applyMiddleware(logger));
// TODO : deprecated method
export type AppState  = ReturnType<typeof reducers>;
export default store;