import "./Footer.css";
import Total from "../../Todo/Total/Total";

function Footer(): JSX.Element {
    return (
        <div className="Footer flex">
			<p>All rights &#169; reserved to Ensilo & Kobi </p>

            <Total/>
        </div>
    );
}

export default Footer;
