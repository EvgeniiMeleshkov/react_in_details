import React, {useState} from "react";
import {OnOff} from "../OnOff/OnOff";
import {action} from '@storybook/addon-actions';

export default {
    title: 'OnOff',
    component: OnOff
};

export const ControlledOnOff = () => {
    const [val, setVal] = useState<boolean>(false)
    return <OnOff value={val} setValue={setVal}/>
}