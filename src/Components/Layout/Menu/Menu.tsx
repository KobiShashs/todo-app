import "./Menu.css";
import {Link} from "react-router-dom";
import CustomLink from "../../Routing/CustomLink/CustomLink";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <br/>
            <CustomLink to={"home"}>Home</CustomLink>
            <CustomLink to={"todos"}>Todos</CustomLink>
            <CustomLink to={"todos/add"}>Add Todo</CustomLink>
            <CustomLink to={"about"}>About</CustomLink>
        </div>
    );
}

export default Menu;
