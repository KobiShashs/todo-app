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
import {downloadedTasks} from "../../../Redux/TaskAppState";
import store from "../../../Redux/Store";

function TodoList(): JSX.Element {

    const [tasks, setTasks] = useState<Task[]>(store.getState().tasksReducer.tasks);

    useEffect(() => {

        if (!tasks?.length) {
            getAllTasks()
                .then(res => {
                    setTasks(res.data);
                    store.dispatch(downloadedTasks(res.data));
                    notify.success("ha ha!")
                });
        }

        // return store.subscribe(() => {
        //     setTasks(store.getState().tasksReducer.tasks); // Will let us notify
        // });


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
