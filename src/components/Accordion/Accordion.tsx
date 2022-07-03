import React from 'react';

export type AccordionPropsType = {
    setCollapsed: () => void
    titleValue: string,
    collapsed: boolean
    elements: any
    onItemClick: (value: string) => void
}

export const Accordion = (props: AccordionPropsType) => {

    return (
        <div>
            <AccordionTitle setCollapsed={props.setCollapsed} title={props.titleValue}/>
            {!props.collapsed &&
                <AccordionBody onItemClick={props.onItemClick} elements={props.elements}/>
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
    elements: any
    onItemClick: (id: string) => void
}
export const AccordionBody = (props: AccordionBodyPropsType) => {
    const mappedElements = props.elements.map((el: {value: string, id: string}) => {
        return (
            <ul key={el.id}>
                <li onClick={()=>props.onItemClick(el.value)}>{el.value}</li>
            </ul>
        )
    })
    return (
        <>
            {mappedElements}
        </>
    )
}
