import "./AuthMenu.css";
import {useState} from "react";
import store from "../../../Redux/Store";
import CustomLink from "../../Routing/CustomLink/CustomLink";
import {Link, NavLink} from "react-router-dom";

function AuthMenu(): JSX.Element {

    const [user, setUser] = useState(store.getState().userReducer.user);
    return (
        <div className="AuthMenu">
            {user && (
                <>
            <span>
              Hello {user.email}
            </span>
                    <span> &nbsp; </span>
                    <Link to="/logout">Logout</Link>
                </>
            )}

            {!user && (
                <>
                    <span>Hello Guest</span>
                    <span> &nbsp; </span>
                    <NavLink to="/login">Login</NavLink>
                    <span> &nbsp; </span>
                    <NavLink to="/register">Register</NavLink>
                </>
            )}
        </div>
    );
}

export default AuthMenu;
