import "./Logo.css";
import {dummy2} from "../../../Services/Constants";
import logoImage from '../../../Assets/Images/logo.png';

function Logo(): JSX.Element {
    return (
        <div className="Logo flex">
            <img src={logoImage} alt={"logo"}/>
        </div>
    );
}

export default Logo;
