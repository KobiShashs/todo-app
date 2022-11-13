import "./AuthMenu.css";
import {useEffect, useState} from "react";
import store from "../../../Redux/Store";
import CustomLink from "../../Routing/CustomLink/CustomLink";
import {Link, NavLink} from "react-router-dom";
import {User} from "../../../Models/Auth";

function AuthMenu(): JSX.Element {

    const [user, setUser] = useState<User>(store.getState().userReducer.user);


    useEffect(()=>{
        return store.subscribe(() => {
            setUser(store.getState().userReducer.user);
        });
    },[]);

    return (
        <div className="AuthMenu">
            {user?.token?.length && (
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
