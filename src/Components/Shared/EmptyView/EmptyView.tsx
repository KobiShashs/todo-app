import "./EmptyView.css";

interface EmptyViewProps {
    msg: string;
}
function EmptyView(props:EmptyViewProps): JSX.Element {
    return (
        <div className="EmptyView wide-box">
            <h1>Empty View</h1>
            <h2>{props.msg}</h2>
            <img src="https://media.giphy.com/media/iEq554yYHbjNbDVdsv/giphy.gif"/>
        </div>
    );
}

export default EmptyView;
