import React, {useState} from 'react';
import './button.css';
import {Select} from "../../../src/Select/Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select
}

export const WithValue = () => {
    const [value, setValue] = useState('2')

    return <>
        <Select items={[
            {value: '1', title: 'Minsk'},
            {value: '2', title: 'Moscow'},
            {value: '3', title: 'Kiev'}]}
                onChange={setValue}
                value={value}/>
    </>
}


export const WithoutValue = () => {

    const [value, setValue] = useState(null)
    return <>
        <Select items={[
            {value: '1', title: 'Minsk'},
            {value: '2', title: 'Moscow'},
            {value: '3', title: 'Kiev'}]}
                onChange={setValue}
                value={value}
        />
    </>
}