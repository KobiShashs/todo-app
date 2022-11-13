import "./Total.css";
import {useEffect, useState} from "react";
import store from "../../../Redux/Store";


function Total(): JSX.Element {

    const [num, setNum] = useState(store.getState().tasksReducer.tasks.length);

    useEffect(() => {

        // if(num===0){
        //
        // }

        return  store.subscribe(() => {
            setNum(store.getState().tasksReducer.tasks.length); // Will let us notify
        });


    }, []);
    return (
        <div className="Total circle-with-text">
            <p className={"inner"}>{num}</p>
        {/*    Todo use Selector without state*/}
        </div>
    );
}

export default Total;
