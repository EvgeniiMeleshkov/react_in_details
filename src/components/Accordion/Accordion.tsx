import React from 'react';

export type AccordionPropsType = {
    setCollapsed: () => void
    titleValue: string,
    collapsed: boolean
    elements: Array<string>
}

export const Accordion = (props: AccordionPropsType) => {

    return (
        <div>
            <AccordionTitle setCollapsed={props.setCollapsed} title={props.titleValue}/>
            {!props.collapsed &&
                <AccordionBody elements={props.elements}/>
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

type AccordionBodyPropsType = {
    elements: Array<string>
}
export const AccordionBody = (props: AccordionBodyPropsType) => {
    const mappedElements = props.elements.map(el => {
        return (
            <ul>
                <li>{el}</li>
            </ul>
        )
    })
    return (
        <>
            {mappedElements}
        </>
    )
}
