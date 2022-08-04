import React, {useEffect, useState} from 'react';
import {Clock} from './Clock';

export default {
    title: 'Clock',
    component: Clock
}


export const ClockExample = () => {
    const [isAnalog, setIsAnalog] = useState(true)
    return <>
        <span onClick={()=>setIsAnalog(!isAnalog)} style={{fontSize: '30px',
            border: '1px solid gray',
            borderRadius: '10px',
            cursor: 'pointer',
            color: 'darkgoldenrod',
            fontFamily: 'fantasy',
            padding: '10px',
            textAlign: 'center'
        }}>Change visualisation</span>
        <Clock isAnalog={isAnalog}/>
    </>
}