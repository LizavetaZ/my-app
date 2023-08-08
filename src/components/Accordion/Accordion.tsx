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

export const Accordion = React.memo(AccordionCommon)

export function AccordionCommon(props: AccordionPropsType) {
     return (
        <>
            <AccordionTitle title = {props.title} collapsed={props.collapsed} onChange = {props.onChange}/>
            {!props.collapsed && <AccordionBody items = {props.items} onClick={props.onClick}/>}
        </>

    );
}
type AccordionTitlePropsType = {
    title:string
    collapsed: boolean
    onChange: () => void
}

export const AccordionTitle = React.memo(AccordionMainTitle)

export function AccordionMainTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle")
    return (
        <h3 onClick={(e) => {props.onChange()}}>{props.title}</h3>
    );
}

export type AccordionBodyPropsType = {
    items:ItemType[]
    onClick:(value: any) => void
}

export const AccordionBody = React.memo(AccordionMainBody)

export function AccordionMainBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody")
    return (
        <ul>
            {props.items.map((el, index)=> <li onClick={() => {props.onClick(el.value)}} key={index}>{el.title}</li>)}
        </ul>
    );
}