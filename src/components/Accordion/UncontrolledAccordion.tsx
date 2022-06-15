import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string
    toggle: boolean
    setToggle: (toggle: boolean)=>void
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering')


    const toggleFun = () => {
        props.setToggle(!props.toggle)
    }

    return (
        <div>
            <AccordionTitle toggleFun={toggleFun} title={props.titleValue}/>
            {props.toggle &&
                <AccordionBody/>
            }
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    toggleFun: ()=>void

}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={props.toggleFun}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}


export default UncontrolledAccordion