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
    return <Rating value={rating} onClick={setRating}/>}