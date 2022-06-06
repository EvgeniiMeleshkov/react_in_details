import React, {useState} from 'react';


export function OnOff() {



    const [value, setValue] = useState(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: value ? 'green' : 'white'
    }
    const offStyle = {
        padding: '2px',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '0.5rem',
        backgroundColor: value ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '1rem',
        backgroundColor: value ? 'green' : 'red'
    }


    return (
        <div>
            <div onClick={()=>setValue(true)} style={onStyle}>On</div>
            <div onClick={()=>setValue(false)} style={offStyle}>Off</div>
            <div style={indicatorStyle}> </div>
        </div>
    )
}