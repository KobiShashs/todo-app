import "./Total.css";
import {useEffect, useState} from "react";
import store, {AppState} from "../../../Redux/Store";
import {useSelector} from "react-redux";
import {tasksReducer} from "../../../Redux/TaskAppState";


function Total(): JSX.Element {

    const total = useSelector((state: AppState) => state.tasksReducer.tasks?.length || 0);
    //const [num, setNum] = useState(total);

    useEffect(() => {

        // return store.subscribe(() => {
        //     setNum(total); // Will let us notify
        // });




    }, []);
    return (
        <div className="Total circle-with-text">
            <p className={"inner"}>{total}</p>
        </div>
    );
}

export default Total;
