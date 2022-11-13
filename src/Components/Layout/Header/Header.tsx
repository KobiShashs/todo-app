import "./Header.css";
import AuthMenu from "../../Auth/AuthMenu/AuthMenu";
import Logo from "../../Shared/Logo/Logo";

function Header(): JSX.Element {
    return (
        <div className="Header">
            <Logo/>
            <h1>Ensilo Todo App</h1>
            <AuthMenu/>
        </div>
    );
}

export default Header;
