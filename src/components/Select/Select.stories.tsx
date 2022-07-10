import React, {useState} from 'react';
import {Story} from '@storybook/react';
import {Select, SelectPropsType} from './Select';


export default {
    title: 'Select',
    component: Select
};

export const SelectStory: Story<SelectPropsType> = (args) => {
    const [val, setVal] = useState(args.elements[0])

    return <Select {...args} onChange={setVal}/>
}

SelectStory.args = {
    elements: ['One', 'Two', 'Three', 'Four', 'Five']
}