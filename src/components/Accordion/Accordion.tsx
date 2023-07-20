import React from "react";

type AccordionPropsType = {
    title: string,
    collapsed: boolean
    onChange: (collapsed: boolean) => void
}


export function Accordion(props: AccordionPropsType) {
     return (
        <>
            <AccordionTitle title = {props.title} onChange = {props.onChange} collapsed={props.collapsed}/>
            {props.collapsed === false && <AccordionBody/>}
            {/*{!props.collapsed  && <AccordionBody/>}*/}
        </>

    );
}

/*function Accordion2(props: AccordionPropsType) {
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
}*/

type AccordionTitlePropsType = {
    title:string
    collapsed: boolean
    onChange: (collapsed: boolean) => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle")
    return (
        <h3 onClick={(e) => {props.onChange(props.collapsed)}}>{props.title}</h3>
    );
}

export function AccordionBody() {
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