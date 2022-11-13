import "./Card.css";
import moment from "moment";
import {Link} from "react-router-dom";
import {FaEdit, FaTrash} from "react-icons/fa";
import {dummy} from "../../../Services/Constants";
import CustomLink from "../../Routing/CustomLink/CustomLink";

interface CardProps {
    id: number;
    title: string;
    description: string;
    group: string;
    date: Date;
}

function Card(props: CardProps): JSX.Element {
    return (
        <div className="card">
            <img src={dummy.src} alt={dummy.alt}/>
            <h1>{props.title}</h1>
            <span className="id flex">id : {props.id}</span>
            <span className="description flex">{props.description}</span>
            <span className="group flex label info">{props.group}</span>
            <span className="when">{moment(props.date).format("DD/mm/yy")}</span>
            <div className="buttons">
                {/*<button>Call to Action</button>*/}
                <CustomLink to={`delete/${props.id}`}><FaTrash size={42}/></CustomLink>
                <CustomLink to={`update/${props.id}`}><FaEdit size={42}/></CustomLink>
            </div>
        </div>
    );
}

export default Card;
