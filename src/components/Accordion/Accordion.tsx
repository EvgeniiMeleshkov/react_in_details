import React from 'react';

type AccordionPropsType = {
    setCollapsed: (collapsed: boolean)=>void
    titleValue: string,
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {



    return (
        <div>
            <AccordionTitle collapsed={props.collapsed} setCollapsed={props.setCollapsed} title={props.titleValue}/>
            {!props.collapsed &&
                <AccordionBody/>
            }
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: (collapsed: boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={()=>props.setCollapsed(!props.collapsed)}>{props.title}</h3>
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


export default Accordion