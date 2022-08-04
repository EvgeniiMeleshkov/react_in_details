import React, {useEffect, useState} from 'react';

export default {
    title: 'Use Effect Set Timeout Demo'
}


export const UseEffectSetTimeoutDemoStories = () => {
    console.log('SetTimeout Example Component Render')
    const [counter, setCounter] = useState<string>('1')
    const [fake, setFake] = useState(1)

    const changer = (state: number) => state + 1
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            document.title = new Date().toLocaleTimeString()
            setCounter(new Date().toLocaleTimeString())
            setFake(changer)
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])


    return <>
        Current time: {counter}  Fake: {fake}
        <button onClick={() => setCounter(counter + ' Hello World!!!')}>Couter +</button>
        <button onClick={() => setFake(fake+1)}>Fake +</button>
    </>
}