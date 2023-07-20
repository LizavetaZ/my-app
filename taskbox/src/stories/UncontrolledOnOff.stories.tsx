import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {action} from '@storybook/addon-actions'
import './button.css';
import {UncontrolledOnOff} from "../../../src/components/OnOff/UncontrolledOnOff";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff
}

const callback = action('on or off clicked')


export const OnMode = () => <UncontrolledOnOff onChange={callback}/>

// export const ModeChanging = () => {
//     const [value, setValue] = useState<boolean>(true)
//     return <ControlledOnOff on={value} onChange={setValue}/>
// }

