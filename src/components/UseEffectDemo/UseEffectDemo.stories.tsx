import React, {useEffect, useState} from 'react';

export default {
    title: 'Use Effect Demo'
}


export const UseEffectDemoStories = () => {
    console.log('Use Effect Component Render')
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)


    useEffect(()=>{
        console.log('Use effect every render')
        document.title = counter.toString()
    })

    useEffect(()=>{
        console.log('Use effect only first render ( Component did mount )')
        document.title = counter.toString()
    }, [])

    useEffect(()=>{
        console.log('Use effect dependence by counter & FIRST render')
        document.title = counter.toString()
    }, [counter])


    return <>
        Hello, {counter} {fake}
        <button onClick={() => setCounter(counter+1)}>Couter +</button>
        <button onClick={() => setFake(fake+1)}>Fake +</button>
    </>
}