// Step 1 - Manage a global collection
import {LoginResponse, User} from "../Models/Auth";
import store from "./Store";
import {clearedAll} from "./TaskAppState";

export class UserAppState {

    public user?: User = {token: '', email: ''};

    public constructor() {
        try {
            this.user = JSON.parse(localStorage.getItem("user"));
        } catch (Error) {
            console.log("Woho...");
        }
    }

}

// Step 2 - Manage all possible actions
export enum UserActionType {


    REGISTERED = "REGISTERED",
    LOGGED_IN = "LOGGED_IN",
    LOGGED_OUT = "LOGGED_OUT"
}

// Step 3 - Define forREGISTERED each action its own payload
export interface UserAction {
    type: UserActionType;
    payload: any;
}

// Step 4 - Creator Function which handle the payload per action
export function registered(): UserAction {
    return {type: UserActionType.REGISTERED, payload: null};
}

export function loggedIn(res: LoginResponse): UserAction {
    return {type: UserActionType.LOGGED_IN, payload: res};
}

export function loggedOut(): UserAction {
    return {type: UserActionType.LOGGED_OUT, payload: null};
}


// Step 5 - Reducer function perform the required action
export function userReducer(currentState: UserAppState = new UserAppState(), action: UserAction): UserAppState {


    const newState = {...currentState} //Spread Operator
    switch (action.type) {
        case UserActionType.REGISTERED: {
            break;
        }
        case UserActionType.LOGGED_IN: {

            newState.user = action.payload;
            localStorage.setItem("user", JSON.stringify(newState.user));

            break;
        }
        case UserActionType.LOGGED_OUT: {
            localStorage.setItem("user", null);

            newState.user = null;

            break;
        }
    }
    return newState;

}