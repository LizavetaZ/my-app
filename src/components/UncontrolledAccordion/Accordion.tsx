import React, {useState} from "react";

type AccordionPropsType = {
    title: string,
}


function UncontrolledAccordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(false)
    console.log(collapsed)
     return (
        <>
            <AccordionTitle title = {props.title} onClick = {() => {setCollapsed(!collapsed)}}/>
            {/*<button onClick = {() => {setCollapsed(!collapsed)}}>TOGGLE</button>*/}
            {/*{props.collapsed === false && <AccordionBody/>}*/}
            {!collapsed && <AccordionBody />}
        </>

    );
}

type AccordionTitlePropsType = {
    title:string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle")
    return (
        <h3 onClick={() => {props.onClick()}}>{props.title}</h3>
    );
}

function AccordionBody() {
    console.log("AccordionBody")
    return (
        <ul>
            <li>star</li>
            <li>star</li>
            <li>star</li>
            <li>star</li>
            <li>star</li>
        </ul>
    );
}

export default UncontrolledAccordion;


/*function Accordion2(props: AccordionPropsType) {
    if (collapsed === true) {
        return (
            <>
                <AccordionTitle title = {props.title}/>
            </>

        );
    }
    else   return (
        <>
            <AccordionTitle title = {props.title}/>
            <AccordionBody/>
        </>

    );
}*/