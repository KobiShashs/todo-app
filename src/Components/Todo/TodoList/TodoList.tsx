import "./TodoList.css";
import {useEffect, useState} from "react";
import {Task} from "../../../Models/Task";
import {getAllTasks} from "../../../Services/WebApi";
import notify from "../../../Services/Notifications";
import TodoItem from "../TodoItem/TodoItem";
import {FaPlusCircle} from "react-icons/fa";
import {Link} from "react-router-dom";

function TodoList(): JSX.Element {

    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        getAllTasks()
            .then(res => setTasks(res.data))
            .catch(err => notify.error(err));
    }, []);
    return (
        <div className="TodoList">
            <div className={"flex"}>
            <Link to={"add"}><FaPlusCircle size={70}/></Link>
            </div>
            <div className={"list"}>
                {
                    tasks.map(task => <TodoItem key={task.id} task={task}/>)
                }
            </div>
        </div>
    );
}

export default TodoList;
