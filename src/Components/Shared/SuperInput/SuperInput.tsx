import "./SuperInput.css";

interface SuperInputProps {
    type: string;
    name: string;
    register: Function;
    error?: any;
}

function SuperInput(props: SuperInputProps): JSX.Element {
    return (
        <>
            <label htmlFor={props.name}> {props.name}</label>
            <input {...props.register(props.name)} type={props.type} name={props.name}
                   placeholder={props.name + '...'}/>

            {/*{props.errors[props.name] && <span>{props.errors[props.name].message}  </span>}*/}
            {props.error && <span>{props.error.message}  </span>}
        </>
    );
}

export default SuperInput;
