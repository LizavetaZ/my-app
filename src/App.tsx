import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from './components/Rating/Rating';
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/Accordion";
import {UncontrolledRating} from "./components/UncontrolledRating/Rating";
import {Accordion} from "./components/Accordion/Accordion";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0 )
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [switchOn, setswitchOn] = useState<boolean>(false)

    const handleItemClick = (value: any) => {
        // Ваш код обработки клика на элемент аккордеона
    };

    return (
        <div className={"App"}>
            {/*<Hello title = {"this is APP component"}/>*/}
            {/*<Hello title = {"this is my friends"}/>*/}
            {/*<Accordion title = {"меню"} collapsed = {true}/>*/}
            <Accordion
                title="Неменю"
                collapsed={accordionCollapsed}
                onChange={() => setAccordionCollapsed(!accordionCollapsed)}
                items={[]}
                onClick={handleItemClick}
            />
                        {/*<p>title</p>*/}
            <Rating value = {ratingValue} onClick = {setRatingValue}/>

            {/*<UncontrolledRating/>*/}
            <UncontrolledRating/>
            {/*<UncontrolledRating/>*/}
            {/*<Rating value = {1}/>*/}
            {/*<Rating value = {2}/>*/}
            {/*<Rating value = {3}/>*/}
            {/*<Rating value = {4}/>*/}

        <UncontrolledAccordion title = {"Menu"}/>
        <UncontrolledAccordion title = {"Users"}/>
            {/*<ControlledOnOff on = {switchOn} onChange = {setswitchOn}/>*/}
            <UncontrolledOnOff onChange = {setswitchOn}/> {switchOn.toString()}
            {/*<UncontrolledOnOff />*/}
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