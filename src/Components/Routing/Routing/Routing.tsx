import "./Routing.css";
import {Route, Routes} from "react-router-dom";
import App from "../../../App";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Page404 from "../Page404/Page404";
import TodoList from "../../Todo/TodoList/TodoList";
import AddTodo from "../../Todo/AddTodo/AddTodo";
import UpdateTodo from "../../Todo/UpdateTodo/UpdateTodo";
import DeleteTodo from "../../Todo/DeleteTodo/DeleteTodo";
import TodoItem from "../../Todo/TodoItem/TodoItem";
import Logout from "../../Auth/Logout/Logout";
import Login from "../../Auth/Login/Login";
import Register from "../../Auth/Register/Register";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="home" element={<Home/>}/>
                <Route index element={<Home/>}/>
                <Route path="todos" element={<TodoList/>}/>
                {/*<Route path="todos/item" element={<TodoItem/>}/>*/}
                <Route path="todos/add" element={<AddTodo/>}/>
                <Route path="todos/update/:id" element={<UpdateTodo/>}/>
                <Route path="todos/delete/:id" element={<DeleteTodo/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="logout" element={<Logout/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}

export default Routing;
