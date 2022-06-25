import React from 'react';

type AccordionPropsType = {
    setCollapsed: ()=>void
    titleValue: string,
    collapsed: boolean
}

export const Accordion = (props: AccordionPropsType) => {

    return (
        <div>
            <AccordionTitle setCollapsed={props.setCollapsed} title={props.titleValue}/>
            {!props.collapsed &&
                <AccordionBody/>
            }
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.setCollapsed}>{props.title}</h3>
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
