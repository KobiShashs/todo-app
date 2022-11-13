import "./Register.css";
import {useNavigate} from "react-router-dom";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {Credentials} from "../../../Models/Auth";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import { registerToService} from "../../../Services/WebApi";
import notify from "../../../Services/Notifications";
import store from "../../../Redux/Store";
import { registered} from "../../../Redux/UserAppState";
import SuperInput from "../../Shared/SuperInput/SuperInput";

function Register(): JSX.Element {

    const navigate = useNavigate();

    const schema = yup.object().shape({
        email:
            yup.string()
                .email()
                .required("Title is required"),
        password:
            yup.string()
                .min(4, "Password too short")
                .required("Description is required"),
        confirm:
            yup.string()
                .test('passwords-match', 'Passwords must match', function (value) {
                    return this.parent.password === value
                })
    });

    const {register, handleSubmit, formState: {errors, isValid}} = useForm<Credentials>({
        mode: "all",
        resolver: yupResolver(schema)
    });

    const credentials = (credentials: Credentials) => {
        const credentialsReq = {email: credentials.email, password: credentials.password};
        registerToService(credentialsReq).then(res => {
            notify.success("Login successfully");
            store.dispatch(registered());
            navigate("/login");
        }).catch(err => notify.error(err));


    }


    return (
        <div className="Register container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit(credentials)}>
                <SuperInput type={"text"} name={"email"} register={register} error={errors?.email}/>
                <SuperInput type={"password"} name={"password"} register={register} error={errors?.password}/>
                <SuperInput type={"password"} name={"confirm"} register={register} error={errors?.confirm}/>
                <br/>
                <button disabled={!isValid}>Register</button>
            </form>
        </div>
    );
}

export default Register;
