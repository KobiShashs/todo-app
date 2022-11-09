import "./DeleteTodo.css";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import notify from "../../../Services/Notifications";

function DeleteTodo(): JSX.Element {
    const params = useParams();
    const id = +(params.id || 0);
    useEffect(()=>{
        notify.success('hello Sagi : '+ id);
    },[]);
    return (
        <div className="DeleteTodo">
			are you sure you want to delete item #123?
            Yes? No?
        </div>
    );
}

export default DeleteTodo;
