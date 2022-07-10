import React, {useState} from 'react';
import s from './CustomSelect.module.css'

export type ItemType = {
    id: string
    title: string
}
export type CustomSelectPropsType = {
    items: ItemType[]
    value?: ItemType
    onChangeValue: (item: any)=>void
}
export const CustomSelect:React.FC<CustomSelectPropsType> = (props) => {
    let [isHidden, setIsHidden] = useState(true)
    const onItemClickHandler = (i: ItemType) => {
        setIsHidden(true)
        props.onChangeValue(i)
    }
    return (
        <div className={s.main}>
            {<span className={s.select}
                                  onClick={()=>setIsHidden(!isHidden)}>
                {isHidden ? `${props.value ? props.value.title : ''} ▼ ` : `${props.value ? props.value.title : ''} ▲ `}
            </span>}
            {
                !isHidden &&
                <div className={s.items}>
                {props.items.map(i => <div onClick={()=>onItemClickHandler(i)} className={s.item} key={i.id}>{i.title}</div>)}
            </div>
            }
        </div>
    );
};
