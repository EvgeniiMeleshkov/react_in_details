import React, {useState} from "react";
import {Accordion} from './Accordion';

export default {
    title: 'Accordion',
    component: Accordion
};

export const AccordionSample = () => {
    const [val, setVal] = useState<boolean>(false)
    return <Accordion elements={['first', 'second', 'therd']} setCollapsed={()=>setVal(!val)} titleValue={'Sample'} collapsed={val}/>
}

