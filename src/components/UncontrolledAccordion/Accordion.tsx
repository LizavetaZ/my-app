import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";

type AccordionPropsType = {
    title: string,
}

export const UncontrolledAccordion = React.memo(UncontrolledAccordionMain)

export function UncontrolledAccordionMain(props: AccordionPropsType) {
    // let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})


     return (
        <>
            {/*<AccordionTitle title = {props.title} onClick = {() => {setCollapsed(!collapsed)}}/>*/}
            <AccordionTitle title = {props.title} onClick = {() => {dispatch({type: TOGGLE_COLLAPSED})}}/>
            {!state.collapsed && <AccordionBody />}
        </>

    );
}

type AccordionTitlePropsType = {
    title:string
    onClick: () => void
}

export const AccordionTitle = React.memo(AccordionMainTitle)

function AccordionMainTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle")
    return (
        <h3 onClick={() => {props.onClick()}}>{props.title}</h3>
    );
}

export const AccordionBody = React.memo(AccordionMainBody)

function AccordionMainBody() {
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