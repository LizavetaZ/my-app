import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './button.css';
import {action} from "@storybook/addon-actions";
import {Accordion} from "../../../src/components/Accordion/Accordion";


export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action('accordion mode change event fired')


export const MenuCollapsedMode = () => <Accordion title={'Menu'} collapsed={true} onChange={callback}/>
export const UsersUncollapsedMode = () => <Accordion title={'Users'} collapsed={false} onChange={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion title={'Users'} collapsed={value} onChange={() => setValue(!value)}/>
}


