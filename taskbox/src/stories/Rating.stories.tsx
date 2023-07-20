import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './button.css';
import Rating, {RatingValueType} from "../../../src/components/Rating/Rating";

export default {
    title: 'Rating',
    component: Rating
}

export const EmptyRating = () => <Rating value={0} onClick={() => {}}/>
export const Rating1 = () => <Rating value={1} onClick={() => {}}/>
export const Rating2 = () => <Rating value={2} onClick={() => {}}/>
export const Rating3 = () => <Rating value={3} onClick={() => {}}/>
export const Rating4 = () => <Rating value={4} onClick={() => {}}/>
export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(3)
    return <Rating value={rating} onClick={setRating}/>
}


//  Button.propTypes = {
//     /**
//      * Is this the principal call to action on the page?
//      */
//     primary: PropTypes.bool,
//     /**
//      * What background color to use
//      */
//     backgroundColor: PropTypes.string,
//     /**
//      * How large should the button be?
//      */
//     size: PropTypes.oneOf(['small', 'medium', 'large']),
//     /**
//      * Button contents
//      */
//     label: PropTypes.string.isRequired,
//     /**
//      * Optional click handler
//      */
//     onClick: PropTypes.func,
// };

// Button.defaultProps = {
//     backgroundColor: null,
//     primary: false,
//     size: 'medium',
//     onClick: undefined,
// };
