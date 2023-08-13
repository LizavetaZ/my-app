import React, {useMemo, useState} from 'react';
import './button.css';
import {Select} from "../../../src/Select/Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'MultiplySelect',
    component: Select
}

export type InformType = {
    value: string
    title: string,
    citizensCount: number
}

const SelectSort = (props: {items: string[]}) => {
    console.log('SelectSorting')
    return <div>{props.items.map((u,i) => <div key={i}>{u}</div>)}</div>
}

const SelectAfterSorting = React.memo(SelectSort)

export const WithValue = () => {

    const [value, setValue] = useState('2')
    const [counter, setCounter] = useState(0)
    const [items, setItems] = useState<string[]>(['Minsk', 'Vitebsk', 'Orsha', 'Moscow', 'Mogilev', 'Varshawa'])



    const newArray = useMemo(() => {
        const newArray  = items.filter(el => el.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [items])


    return <>
        <SelectAfterSorting items={items}/>
        <Select items={[
            {value: '1', title: 'Minsk', citizensCount: 100500},
            {value: '2', title: 'Vitebsk', citizensCount: 300},
            {value: '3', title: 'Orsha', citizensCount: 200},
            {value: '4', title: 'Moscow', citizensCount: 13000},
            {value: '5', title: 'Mogilev', citizensCount: 5000},
            {value: '6', title: 'Varshawa', citizensCount: 140000}
        ]}
                onChange={setValue}
                value={value}
        />
        <button onClick={() => {}}>Show city with 'a' in name</button>
        <button onClick={() => setCounter(counter+1)}>+</button> {counter}
    </>
}


export const AValue = () => {

    const [value, setValue] = useState('2')
    const [counter, setCounter] = useState(0)
    const [items, setItems] = useState<string[]>(['Minsk', 'Vitebsk', 'Orsha', 'Moscow', 'Mogilev', 'Varshawa'])



    const newArray = useMemo(() => {
        const newArray  = items.filter(el => el.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [items])


    return <>
        <SelectAfterSorting items={items}/>
        <Select items={[
            {value: '1', title: 'Minsk', citizensCount: 100500},
            {value: '2', title: 'Vitebsk', citizensCount: 300},
            {value: '3', title: 'Orsha', citizensCount: 200},
            {value: '4', title: 'Moscow', citizensCount: 13000},
            {value: '5', title: 'Mogilev', citizensCount: 5000},
            {value: '6', title: 'Varshawa', citizensCount: 140000}
        ]}
                onChange={setValue}
                value={newArray}
        />
        <button onClick={() => {}}>Show city with 'a' in name</button>
        <button onClick={() => setCounter(counter+1)}>+</button> {counter}
    </>
}



// export const WithoutValue = () => {
//     const [value, setValue] = useState(null)
//     return <>
//         <Select items={[
//             {value: '1', title: 'Minsk'},
//             {value: '2', title: 'Moscow'},
//             {value: '3', title: 'Kiev'}]}
//                 onChange={setValue}
//                 value={value}
//         />
//     </>
// }