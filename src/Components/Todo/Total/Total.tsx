import "./Total.css";
import {useEffect, useState} from "react";
import store from "../../../Redux/Store";


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
        {/*    Todo use Selector without state*/}
        </div>
    );
}

export default Total;
