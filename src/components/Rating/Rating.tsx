import React, {Dispatch, SetStateAction} from 'react';

export type RatingPropsType = {
    value: number
    onClick: (val: number)=>void
}

export function Rating(props: RatingPropsType) {
    return (
        <div className="span">
            <Star selected={ props.value > 0} num={1} starsValue={props.onClick}/>
            <Star selected={ props.value > 1} num={2} starsValue={props.onClick}/>
            <Star selected={ props.value > 2} num={3} starsValue={props.onClick}/>
            <Star selected={ props.value > 3} num={4} starsValue={props.onClick}/>
            <Star selected={ props.value > 4} num={5} starsValue={props.onClick}/>
        </div>
    )
}

// type StarPropType = {
//     selected: boolean
//     onClick?: (val: number)=>void
// }
//
// function Star(props: StarPropType) {
//     return props.selected === true ?  <span ><b> star </b></span> : <span> star </span>
// }

type StarPropType = {
    selected: boolean
    starsValue: (num: number) => void
    num: number
}

function Star(props: StarPropType) {
    return (
        props.selected === true
            ? (<span onClick={() => props.starsValue(props.num)}>
            <b> star </b>
        </span>)
            : (<span onClick={() => props.starsValue(props.num)}> star </span>)
    )
}