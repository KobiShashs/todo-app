import "./Logout.css";
import {useEffect} from "react";
import store from "../../../Redux/Store";
import {loggedOut} from "../../../Redux/UserAppState";
import {useNavigate} from "react-router-dom";
import {clearedAll} from "../../../Redux/TaskAppState";

function Logout(): JSX.Element {

    const navigate = useNavigate();
    useEffect(() => {
        store.dispatch(loggedOut());
        store.dispatch(clearedAll());
        navigate("/login")
    }, [navigate])
    return (
        <></>
    );
}

export default Logout;
