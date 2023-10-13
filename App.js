import React from "react";
import ReactDOM from "react-dom/client";
import "./public/style.css";
import Header from "./Components/Header";
import TodoContainer from "./Components/TodoContainer";

const App = () => {
    return (
        <>
        <Header/>
        <TodoContainer/>
        
        
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)
























