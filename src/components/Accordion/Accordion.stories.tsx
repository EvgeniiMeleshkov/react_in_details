import React, {useState} from "react";
import {Accordion, AccordionPropsType} from './Accordion';
import {Story} from '@storybook/react';

export default {
    title: 'Accordion',
    component: Accordion
};

export const AccordionSample: Story<AccordionPropsType> = (args) => {
    const [val, setVal] = useState<boolean>(false)
    const onItemClicked = (value: string) => {
        alert(`${value} clicked`)
    }
    return <Accordion {...args} onItemClick={onItemClicked} collapsed={val} setCollapsed={()=>setVal(!val)}/>
}

AccordionSample.args = {
    elements: [{value: 'Dimich', id: '1'},
        {value: 'Sveta', id: '2'},
        {value: 'Victor', id: '3'},
        {value: 'Igor', id: '4'}],
    titleValue: 'Sample',
}