import React, {useState} from "react";
import {Accordion, AccordionPropsType} from './Accordion';
import {Story} from '@storybook/react';

export default {
    title: 'Accordion',
    component: Accordion
};

export const AccordionSample: Story<AccordionPropsType> = (args) => {
    const [val, setVal] = useState<boolean>(false)
    return <Accordion {...args} collapsed={val} setCollapsed={()=>setVal(!val)}/>
}

AccordionSample.args = {
    elements: ['first', 'second', 'therd'],
    titleValue: 'Sample',
}