import "./Card.css";
import moment from "moment";
import {Link} from "react-router-dom";
import {FaEdit, FaTrash} from "react-icons/fa";

interface CardProps {
    title: string;
    description: string;
    group: string;
    date: Date;
}

function Card(props: CardProps): JSX.Element {
    return (
        <div className="card">
            <img src="https://www.w3schools.com/w3images/team2.jpg" alt="John"/>
            <h1>{props.title}</h1>
            <p className="title">{props.description}</p>
            <p>{props.group}</p>
            <p>{moment(props.date).format("DD/mm/yy")}</p>
            <p>
                {/*<button>Call to Action</button>*/}
                <Link to={"delete/123"}><FaTrash size={42}/></Link>
                <Link to={"update/123"}><FaEdit size={42}/></Link>
            </p>
        </div>
    );
}

export default Card;
