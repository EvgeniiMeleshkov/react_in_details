import React from 'react';

type RatingPropsType = {
    value: number
}

export function Rating(props: RatingPropsType) {
    console.log('Rating rendering')

    return (
        <div className="span">
            <Star selected={ props.value > 0}/>
            <Star selected={ props.value > 1}/>
            <Star selected={ props.value > 2}/>
            <Star selected={ props.value > 3}/>
            <Star selected={ props.value > 4}/>
        </div>
    )
}

type StarPropType = {
    selected: boolean
}

function Star(props: StarPropType) {
    return props.selected === true ?  <span><b> star </b></span> : <span> star </span>
}

