import React, {useState} from 'react';

type OnOffPropsType = {
    value: boolean
    setValue: (value: boolean) => void
}
export function OnOff(props: OnOffPropsType) {

const onClickHandlerOn = () => {
    props.setValue(true)
}
const onClickHandlerOff = () => {
    props.setValue(false)
}


    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.value ? 'green' : 'white'
    }
    const offStyle = {
        padding: '2px',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '0.5rem',
        backgroundColor: props.value ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '1rem',
        backgroundColor: props.value ? 'green' : 'red'
    }


    return (
        <div>
            <div onClick={onClickHandlerOn} style={onStyle}>On</div>
            <div onClick={onClickHandlerOff} style={offStyle}>Off</div>
            <div style={indicatorStyle}> </div>
        </div>
    )
}