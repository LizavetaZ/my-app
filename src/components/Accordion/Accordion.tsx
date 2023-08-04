import React from "react";
type ItemType = {
    title: string
    value:any
}

type AccordionPropsType = {
    title: string,
    collapsed: boolean
    onChange: () => void
    items:ItemType[]
    onClick:(value: any) => void
}


export function Accordion(props: AccordionPropsType) {
     return (
        <>
            <AccordionTitle title = {props.title} onChange = {props.onChange}/>
            {!props.collapsed && <AccordionBody items = {props.items} onClick={props.onClick}/>}
        </>

    );
}
type AccordionTitlePropsType = {
    title:string
    onChange: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle")
    return (
        <h3 onClick={(e) => {props.onChange()}}>{props.title}</h3>
    );
}

export type AccordionBodyPropsType = {
    items:ItemType[]
    onClick:(value: any) => void
}

export function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody")
    return (
        <ul>
            {props.items.map((el, index)=> <li onClick={() => {props.onClick(el.value)}} key={index}>{el.title}</li>)}
        </ul>
    );
}