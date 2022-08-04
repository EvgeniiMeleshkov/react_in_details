import React, { useState } from 'react';

export default {
    title: 'Use State Demo'
}

function generateData () {
    console.log('generateData called')
    return 230852039514 - 230852039513
}

export const UseStateDemoStories = () => {
    console.log('UseState Render')
    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => state + 1


    return <>
        <button onClick={() => setCounter(changer)}>+</button>
       {counter}
    </>
}