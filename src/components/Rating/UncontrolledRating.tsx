import React, {useState} from 'react';


export function UncontrolledRating() {
    console.log('UncontrolledRating rendering')

    const [star, setStar] = useState(0)
    const starsValue = (num: number) => {
        setStar(num)
    }

    return (
        <div className="span">
            <Star starsValue={starsValue} num={1} selected={star > 0}/>
            <Star starsValue={starsValue} num={2} selected={star > 1}/>
            <Star starsValue={starsValue} num={3} selected={star > 2}/>
            <Star starsValue={starsValue} num={4} selected={star > 3}/>
            <Star starsValue={starsValue} num={5} selected={star > 4}/>
        </div>
    )
}

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

