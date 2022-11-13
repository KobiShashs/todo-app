import "./Total.css";
import {useEffect, useState} from "react";
import store from "../../../Redux/store";


function Total(): JSX.Element {

    const [num, setNum] = useState(0);

    useEffect(() => {

        // if(num===0){
        //
        // }

        return  store.subscribe(() => {
            setNum(store.getState().tasksReducer.tasks.length); // Will let us notify
        });


    }, []);
    return (
        <div className="Total circle">
            <p>{num}</p>
        </div>
    );
}

export default Total;
