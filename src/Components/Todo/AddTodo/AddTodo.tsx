import "./AddTodo.css";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {Task} from "../../../Models/Task";
import notify from "../../../Services/Notifications";
import {addTask} from "../../../Services/WebApi";
import {useNavigate} from "react-router-dom";

function AddTodo(): JSX.Element {

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

    const {register, handleSubmit, formState: {errors, isValid}} = useForm<Task>({
        mode: "all",
        resolver: yupResolver(schema)
    });


    const added = (task: Task) => {
        console.log(JSON.stringify(task))
        notify.success("Woho!!!");

        navigate("/todos");
        // addTask(task).then(res => {
        //         console.log(res.data);
        //
        //     }
        // ).catch(err => notify.error(err));
    }

    return (
        <div className="AddTodo">
            <h2>Add Task</h2>
            <form onSubmit={handleSubmit(added)}>
                <label htmlFor={"title"}>{errors?.title ? <span>{errors.title.message}</span> : "Title"}</label>
                <input {...register("title")} type={"text"} name={"title"} placeholder={"name..."}/>
                <label htmlFor={"description"}>{errors?.description ?
                    <span>{errors.description.message}</span> : "description"}</label>
                <input {...register("description")} type={"text"} name={"description"} placeholder={"description..."}/>
                <label htmlFor={"group"}>{errors?.group ? <span>{errors.group.message}</span> : "group"}</label>
                <input {...register("group")} type={"text"} name={"group"} placeholder={"group..."}/>
                <label htmlFor={"when"}>{errors?.when ? <span>{errors.when.message}</span> : "when"}</label>
                <input {...register("when")} type={"date"} name={"when"} placeholder={"when..."}/>
                <button disabled={!isValid}>Add Task</button>
            </form>
        </div>
    );
}

export default AddTodo;
