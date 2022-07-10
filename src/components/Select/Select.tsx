import React, {ChangeEvent} from 'react';

export type SelectPropsType = {
    elements: any[]
    onChange?: (element: any) => void
}
export const Select: React.FC<SelectPropsType> = ({onChange, elements}) => {
    const mappedElements = elements.map((el, index)=>(
        <option key={index} value={el}>{el}</option>
    ))
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e.currentTarget.value)
    }
    return (
        <div>
            <select
                onChange={onChangeHandler}>
                {mappedElements}
            </select>
        </div>
    );
};
