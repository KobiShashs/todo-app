import "./UpdateTodo.css";
import {useNavigate, useParams} from "react-router-dom";
import {useForm, useFormState} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {Task} from "../../../Models/Task";
import SuperInput from "../../Shared/SuperInput/SuperInput";
import {useState} from "react";
import {updateTask} from "../../../Services/WebApi";
import notify from "../../../Services/Notifications";
import store from "../../../Redux/store";
import {updatedTask} from "../../../Redux/TaskAppState";

function UpdateTodo(): JSX.Element {

    const params = useParams();
    const id = +(params.id || 0);
    const [task, setTask] = useState<Task>({
        id: id,
        title: "title mock",
        description: "description mock",
        group: "group mock",
        when: new Date()
    });
    const navigate = useNavigate();

    const schema = yup.object().shape({
        title:
            yup.string()
                .required("Title is required"),
        description:
            yup.string()
                .required("Description is required"),
        group:
            yup.string()
                .required("Group is required"),
        when:
            yup.date()
                // .max(new Date(),'Umm... future dob? come on!')
                .default(new Date())
                .typeError("You must specify a date")
                .required("date is required")
                .nullable().default(() => new Date()),
    });

    let defaultValuesObj = {...task};

    const {register, handleSubmit, control, formState: {errors, isDirty, isValid}}
        = useForm<Task>({defaultValues: defaultValuesObj, mode: "all", resolver: yupResolver(schema)});

    const {dirtyFields} = useFormState({
        control
    });

    const updated = async (task: Task) => {
        await updateTask(id, task)
            .then(res => {
                notify.success("Updated successfully");
                store.dispatch(updatedTask(res.data));
                navigate("/todos")
            })
            .catch(err => notify.error(err));
    }

    return (
        <div className="UpdateTodo container">
            <h2>Update Task</h2>
            <form onSubmit={handleSubmit(updated)}>
                <label htmlFor="id"> id</label>
                <input type={"number"} name={"id"} value={id} disabled={true}/>
                <SuperInput type={"text"} name={"title"} register={register} error={errors?.title}/>
                <SuperInput type={"text"} name={"description"} register={register} error={errors?.description}/>
                <SuperInput type={"text"} name={"group"} register={register} error={errors?.group}/>
                <SuperInput type={"datetime-local"} name={"when"} register={register} error={errors?.when}/>
                <br/>
                <button disabled={!isDirty }>Update Task</button>
            </form>
        </div>
    );
}

export default UpdateTodo;
