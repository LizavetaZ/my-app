import React, {useState} from "react";
import s from "./OnOff.module.css"

type PropsType = {
    // on: boolean
    onChange: (on: boolean) => void
}

// export function SwitcherBody(props: SwitcherType) {
//     return (
//         <div className={s.figures}>
//             <div className={s.on} style={props.on ? {background: 'red'} : {background: 'white'}}>On</div>
//             <div className={s.off} style={props.on ? {background: 'white'} : {background: 'red'}}>Off</div>
//             <div className={s.round} style={props.on ? {background: 'red'} : {background: 'white'}}>ligth</div>
//         </div>
//     )
// }

export function UncontrolledOnOff(props: PropsType) {

    // let on = false
    console.log("UncontrolledOnOff rendering")

    let [on, setOn] = useState(false)
    console.log(on)
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white',
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red',
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: on ? 'green' : 'red',
    }
    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
        {/*{props. on && <True />}*/}
        {/*{!props. on && <False />}*/}
            <div style ={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style = {indicatorStyle}></div>

        </div>
    )
}
// function True() {
//     return (
//         <div className={s.figures}>
//             <div className={s.on} style ={{background: 'green'}}>On</div>
//             <div className={s.off} style={{background: 'red'}}>Off</div>
//             <div className={s.round} style={{background: 'green'}}>ligth</div>
//         </div>
//     )
// }
//
// function False() {
//     return (
//         <div className={s.figures}>
//             <div className={s.on} style ={{background: 'red'}}>On</div>
//             <div className={s.off} style={{background: 'green'}}>Off</div>
//             <div className={s.round} style={{background: 'red'}}>ligth</div>
//         </div>
//     )
// }