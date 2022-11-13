import "./Footer.css";
import Total from "../../Todo/Total/Total";

function Footer(): JSX.Element {
    return (
        <div className="Footer row">
            <div className={"center"}>All rights &#169; reserved to Ensilo & Kobi</div>
            <div>
                <Total/>
            </div>


        </div>

    );
}

export default Footer;
