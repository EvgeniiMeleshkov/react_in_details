import React, {useState} from 'react';
import {Story} from '@storybook/react';
import {CustomSelect, CustomSelectPropsType} from './CustomSelect';

const someItemsArr = [
    {id: '1', title: 'JS'},
    {id: '2', title: 'React'},
    {id: '3', title: 'Redux'},
    {id: '4', title: 'MUI'}
]


export default {
    title: 'Select',
    component: CustomSelect
};

export const CustomSelectStory: Story<CustomSelectPropsType> = (args) => {
    const [val, setVal] = useState()

    return <CustomSelect {...args} items={args.items} value={val} onChangeValue={setVal}/>
}

CustomSelectStory.args = {
    items: someItemsArr
}