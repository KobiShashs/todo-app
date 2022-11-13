import "./Logout.css";
import {useEffect} from "react";
import store from "../../../Redux/Store";
import {loggedOut} from "../../../Redux/UserAppState";

function Logout(): JSX.Element {
    useEffect(() => {
        store.dispatch(loggedOut());
    }, [])
    return (
        <></>
    );
}

export default Logout;
