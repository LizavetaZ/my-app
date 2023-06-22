import React from "react";

type AccordionPropsType = {
    title: string,
    collapsed: boolean
}


function Accordion(props: AccordionPropsType) {
    if (props.collapsed) {
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
}

type AccordionTitlePropsType = {
    title:string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle")
    return (
        <h3>{props.title}</h3>
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
export default Accordion;