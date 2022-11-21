import "./Home.css";
import styled from "styled-components";
import {InheritedButton, MyButton, Wrapper} from "../../../Services/UI";


function Home(): JSX.Element {


    return (
        <div className="Home">
            <h1>Todo App</h1>
            <img src={"https://media.giphy.com/media/5YO4km322zuNy/giphy.gif"} alt={"Todo"}/>
            {/*<MyButton>Button</MyButton>*/}
            {/*<InheritedButton>Button</InheritedButton>*/}
            {/*<Wrapper height={8}>*/}
            {/*    One*/}
            {/*</Wrapper>*/}
            {/*<Wrapper height={80}>*/}
            {/*    Two*/}
            {/*</Wrapper>*/}
        </div>
    );
}

export default Home;
