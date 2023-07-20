import React, {useState} from 'react';
import './button.css';
import {action} from "@storybook/addon-actions";
import {UncontrolledAccordion} from "../../../src/components/UncontrolledAccordion/Accordion";


export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion
}


export const MenuCollapsedMode = () => <UncontrolledAccordion title={'Menu'}/>
export const UsersUncollapsedMode = () => <UncontrolledAccordion title={'Users'}/>

// export const ModeChanging = () => {
//     const [value, setValue] = useState<boolean>(true)
//
// }


