import {useEffect, useState} from "react";
import notify from "../Services/Notifications";
import {useNavigate} from "react-router-dom";

import store, {AppState} from "../Redux/Store";
import {useStore} from "react-redux";
import {userReducer} from "../Redux/UserAppState";

const useRedirect = () => {

    const navigate = useNavigate();

    const val = useStore<AppState>();

    const token = store.getState().userReducer.user?.token;
    //const token2 = val.getState().userReducer.user?.token;

    useEffect(() => {
        if (!token) {
            // notify.error("Pls Login");
            navigate("/login");
        }
    }, []);

    return;
};

export default useRedirect;