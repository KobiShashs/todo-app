import "./DeleteTodo.css";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import notify from "../../../Services/Notifications";
import {deleteTask} from "../../../Services/WebApi";
import store from "../../../Redux/Store";
import {deletedTask} from "../../../Redux/TaskAppState";
import {useDispatch} from "react-redux";

function DeleteTodo(): JSX.Element {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const id = +(params.id || 0);
    // useEffect(()=>{
    //     notify.success('hello Sagi : '+ id);
    // },[]);

    const no = () => {
        navigate("/todos")
    };

    const yes = () => {
        deleteTask(id)
            .then(res => {
                    notify.success("Deleted Successfully");
                    // store.dispatch(deletedTask(id));
                    dispatch(deletedTask(id));
                    navigate("/todos");
                }
            )
            .catch(err => notify.error(err))
    };
    return (
        <div className="DeleteTodo wide-box">
            <h2>Attention !</h2>
            <p>Are you sure you want to delete item #{id}?</p>
            <div className={"line"}>
                <button onClick={yes} className={"red"}>Yes</button>
                <button onClick={no}>No</button>
            </div>
        </div>
    );
}

export default DeleteTodo;
