import "./TodoList.css";
import {useEffect, useState} from "react";
import {Task} from "../../../Models/Task";
import {getAllTasks} from "../../../Services/WebApi";
import notify from "../../../Services/Notifications";
import TodoItem from "../TodoItem/TodoItem";
import {FaPlusCircle} from "react-icons/fa";
import {Link} from "react-router-dom";
import CustomLink from "../../Routing/CustomLink/CustomLink";
import EmptyView from "../../Shared/EmptyView/EmptyView";

function TodoList(): JSX.Element {

    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        getAllTasks()
            .then(res => setTasks(res.data));
            //.catch(err => notify.error(err));
    }, []);
    return (
        <div className="TodoList">
            <div className={"add flex"}>
                <CustomLink to={"add"}><FaPlusCircle size={70}/></CustomLink>
            </div>
            <div className={tasks.length ? "list" : "center"}>
                {
                    tasks?.length ?
                        tasks.map(task => <TodoItem key={task.id} task={task}/>) :
                        <EmptyView msg={'No Tasks for you!'}/>
                }
            </div>
        </div>
    );
}

export default TodoList;
