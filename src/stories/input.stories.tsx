import React, {ChangeEvent, useRef, useState} from 'react';
import {Story} from '@storybook/react';
import {Rating, RatingPropsType} from '../components/Rating/Rating';
import {action} from '@storybook/addon-actions';

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

export const ControlledInput: Story = () => {
    const [parentValue, setParentValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChangeHandler}/>
}
export const ControlledCheckBox: Story = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type={'checkbox'} checked={parentValue} onChange={onChangeHandler}/>
}
export const ControlledSelect: Story = () => {
    const [parentValue, setParentValue] = useState('2')
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChangeHandler}>
        <optgroup label='City'>
            <option value='1'>Minsk</option>
            <option value='2'>Gomel</option>
            <option value='3'>Praga</option>
        </optgroup>
    </select>
}