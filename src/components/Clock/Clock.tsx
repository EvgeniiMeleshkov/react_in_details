import React, {useEffect, useState} from 'react';
import './Clock.css'

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
        <>
            <div className="clock">
                <div
                    className="hour_hand"
                    style={{
                        transform: `rotateZ(${date.getHours() * 30}deg)`
                    }}
                />
                <div
                    className="min_hand"
                    style={{
                        transform: `rotateZ(${date.getMinutes() * 6}deg)`
                    }}
                />
                <div
                    className="sec_hand"
                    style={{
                        transform: `rotateZ(${date.getSeconds() * 6}deg)`
                    }}
                />
                <span className="twelve">12</span>
                <span className="one">1</span>
                <span className="two">2</span>
                <span className="three">3</span>
                <span className="four">4</span>
                <span className="five">5</span>
                <span className="six">6</span>
                <span className="seven">7</span>
                <span className="eight">8</span>
                <span className="nine">9</span>
                <span className="ten">10</span>
                <span className="eleven">11</span>
            </div>

            <div style={{fontSize: '50px', fontWeight: 'bolder', fontFamily: 'fantasy', color: 'forestgreen'}}>
                <span>{getTwoDigitsString(date.getHours())}</span>
                :
                <span>{getTwoDigitsString(date.getMinutes())}</span>
                :
                <span>{getTwoDigitsString(date.getSeconds())}</span>
            </div>
        </>

    );
};
