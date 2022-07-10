import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from './CustomSelect.module.css'

export type ItemType = {
    id: string
    title: string
}
export type CustomSelectPropsType = {
    items: ItemType[]
    value?: ItemType
    onChangeValue: (item: any) => void
}
export const CustomSelect: React.FC<CustomSelectPropsType> = (props) => {


        const [isHidden, setIsHidden] = useState(true)
        const [hoveredItemValue, setHoveredItemValue] = useState(props.value)


        let selectedItem = props.items.find(i => i.id === props.value?.id)
        let hoveredItem = props.items.find(i => i.id === hoveredItemValue?.id)

        useEffect(() => {
            setHoveredItemValue(props.value)
        }, [props.value] )

        const onItemClickHandler = (i: ItemType) => {
            setIsHidden(true)
            props.onChangeValue(i)
        }
        const onBlurHandler = () => {
            setIsHidden(true)
        }
        const onKeyHandler = (e: KeyboardEvent<HTMLDivElement>) => {
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                for (let i = 0; i < props.items.length; i++) {
                    if (props.items[i].id === hoveredItemValue?.id) {
                        const pretendentElement = e.key === 'ArrowDown'
                            ? props.items[i + 1]
                            : props.items[i - 1]
                        if (pretendentElement) {
                            props.onChangeValue(pretendentElement)
                            return
                        }
                    }
                }
                if(!selectedItem) {
                    props.onChangeValue(props.items[0])
                }
            }
            if (e.key === 'Enter' || e.key === 'Escape') {
                setIsHidden(true)
            }
        }

        return (
            <div
                onBlur={onBlurHandler}
                className={s.main}
                tabIndex={0}
                onKeyUp={onKeyHandler}>
                {<span
                    className={s.select}
                    onClick={() => setIsHidden(!isHidden)}
                >
                {isHidden
                    ? `${props.value ? props.value.title : ''} ▼ `
                    : `${props.value ? props.value.title : ''} ▲ `}
            </span>}
                {!isHidden &&
                    <div className={s.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() => {
                                setHoveredItemValue(i)
                            }}
                            onClick={() => onItemClickHandler(i)}
                            className={s.item + ' ' + (hoveredItem === i ? s.selected : '')}
                            key={i.id}
                        >{i.title}</div>)}
                    </div>}
            </div>
        );
    }
;
