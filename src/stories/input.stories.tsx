import React, {useRef, useState} from 'react';
import {Story} from '@storybook/react';
import {Rating, RatingPropsType} from '../components/Rating/Rating';

export default {
    title: 'input'
}

export const TrackValueFromInput: Story = () => {
    const [value, setValue] = useState<string>('')
    return <><input onChange={(e)=>{setValue(e.currentTarget.value)}} /> --- {value}</>
}
export const GetValueFromInput: Story = () => {
    const [value, setValue] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = ()=>{
        const val = inputRef.current as HTMLInputElement
        setValue(val.value)
    }
    return <><input ref={inputRef} />
        <button onClick={save}>save</button>
         --- {value}</>
}