import React, {useState} from 'react';
import './button.css';
import {action} from "@storybook/addon-actions";
import {UncontrolledRating} from "../../../src/components/UncontrolledRating/Rating";


export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating
}



export const UncontrolledRatingChanging = () => <UncontrolledRating/>

// export const ModeChanging = () => {
//     const [value, setValue] = useState<boolean>(true)
//
// }


