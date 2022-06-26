import React, {useState} from "react";
import {Rating, RatingPropsType} from './Rating';
import {Story} from '@storybook/react';


export default {
    title: 'Rating',
    component: Rating
}

export const OneStarRating = () => {return <Rating value={1} onClick={x=>x}/>}
export const TwoStarRating = () => {return <Rating value={2} onClick={x=>x}/>}
export const ThreeStarRating = () => {return <Rating value={3} onClick={x=>x}/>}
export const FourStarRating = () => {return <Rating value={4} onClick={x=>x}/>}
export const FiveStarRating = () => {return <Rating value={5} onClick={x=>x}/>}

export const ChangingRating: Story<RatingPropsType> = (args) => {
    const [rating, setRating] = useState<number>(0)
    return <Rating value={rating} onClick={setRating}/>
}