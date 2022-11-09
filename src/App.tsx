import React from 'react';
import './App.css';
import Menu from "./Components/Layout/Menu/Menu";
import Main from "./Components/Layout/Main/Main";
import Footer from "./Components/Layout/Footer/Footer";
import Header from "./Components/Layout/Header/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <Menu/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
