import "./Login.css";
import {useNavigate} from "react-router-dom";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {Task} from "../../../Models/Task";
import {yupResolver} from "@hookform/resolvers/yup";
import {Credentials, CredentialsRequest} from "../../../Models/Auth";
import {getAllTasks, login} from "../../../Services/WebApi";
import notify from "../../../Services/Notifications";
import store from "../../../Redux/Store";
import {loggedIn} from "../../../Redux/UserAppState";
import SuperInput from "../../Shared/SuperInput/SuperInput";
import {clearedAll, downloadedTasks} from "../../../Redux/TasksAppState";
import {useDispatch} from "react-redux";

function Login(): JSX.Element {

    const navigate = useNavigate();

    const dispatch = useDispatch();

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

    const {register, handleSubmit, formState: {errors, isValid, isDirty}} = useForm<Credentials>({
        mode: "all",
        resolver: yupResolver(schema)
    });

    const credentials = (credentials: Credentials) => {
        const credentialsReq = {email: credentials.email, password: credentials.password};
        login(credentialsReq).then(res => {
            notify.success("Login successfully");
            // store.dispatch(loggedIn(res.data));
            // store.dispatch(clearedAll());
            dispatch(loggedIn(res.data));
            dispatch(clearedAll());
            // TODO consider to remove it into async task
            getAllTasks().then(res => store.dispatch(downloadedTasks(res.data))).catch(err => notify.error(err));
            navigate("/home");
        }).catch(err => notify.error(err));


    }


    return (
        <div className="Login container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit(credentials)}>
                <SuperInput type={"text"} name={"email"} register={register} error={errors?.email}/>
                <SuperInput type={"password"} name={"password"} register={register} error={errors?.password}/>
                <SuperInput type={"password"} name={"confirm"} register={register} error={errors?.confirm}/>
                <br/>
                <button disabled={!isValid}>Login</button>
            </form>
        </div>
    );
}

export default Login;
