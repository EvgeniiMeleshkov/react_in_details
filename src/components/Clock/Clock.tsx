import React, {useEffect, useState} from 'react';
import {cleanup} from '@testing-library/react';

export type ClockPropstype = {

}

export const Clock: React.FC<ClockPropstype> = () => {

    const [date, setDate] = useState(new Date())

    useEffect(()=>{
        const intervalID = setInterval(()=>{
            setDate(new Date())
        }, 1000)
        return ()=>{
            clearInterval(intervalID)
        }
    }, [])

    function getTwoDigitsString(number: number) {
        return number < 10 ? '0' + number : number
    }
    return (
        <div>
            <span>{getTwoDigitsString(date.getHours())}</span>
            :
            <span>{getTwoDigitsString(date.getMinutes())}</span>
            :
            <span>{getTwoDigitsString(date.getSeconds())}</span>
        </div>
    );
};