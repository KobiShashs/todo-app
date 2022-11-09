import "./TodoItem.css";
import {Task} from "../../../Models/Task";
import Card from "../../Shared/Card/Card";

interface TodoItemProps{
    task:Task;
}
function TodoItem(props:TodoItemProps): JSX.Element {
    return (
        <div className="TodoItem">
			<Card title={props.task.title} description={props.task.description} group={props.task.group} date={props.task.when}/>
        </div>
    );
}

export default TodoItem;
