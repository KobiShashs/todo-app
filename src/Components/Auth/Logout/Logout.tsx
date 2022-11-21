import "./Logout.css";
import {useEffect} from "react";
import store from "../../../Redux/Store";
import {loggedOut} from "../../../Redux/UserAppState";
import {useNavigate} from "react-router-dom";
import {clearedAll} from "../../../Redux/TasksAppState";
import {useDispatch} from "react-redux";

function Logout(): JSX.Element {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    useEffect(() => {
        // store.dispatch(loggedOut());
        // store.dispatch(clearedAll());
        dispatch(loggedOut())
        dispatch(clearedAll())
        navigate("/login")
    }, [navigate])
    return (
        <></>
    );
}

export default Logout;
