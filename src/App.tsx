import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from './components/Rating/Rating';

function App() {
    return (
        <div>
            <Hello title = {"this is APP component"}/>
            <Hello title = {"this is my friends"}/>
            <Accordion title = {"меню"} collapsed = {true}/>
            <Accordion title = {"Неменю"} collapsed = {false}/>
            <p>title</p>
            <Rating value = {0}/>
            <Rating value = {1}/>
            <Rating value = {2}/>
            <Rating value = {3}/>
            <Rating value = {4}/>
        </div>
    );
}

export default App;
// export default Accordion;

type HelloPropsType = {
    title: string;
}

function Hello(props: HelloPropsType) {
    return <h1>{props.title}</h1>
}
// hello()