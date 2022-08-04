import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/Accordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/Rating/UncontrolledRating';
import {Select} from './components/Select/Select';
import {CustomSelect, ItemType} from './components/Select/CustomSelect/CustomSelect';
import {Clock} from './components/Clock/Clock';

function App() {
    console.log('App rendering')
    const [toggle, setToggle] = useState<boolean>(true)
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [value1, setValue1] = useState(false)
    const [value2, setValue2] = useState(false)
    const [value,setValue] = useState(0)
    const elements = [{value: 'Dimich', id: '1'},
        {value: 'Sveta', id: '2'},
        {value: 'Victor', id: '3'},
        {value: 'Igor', id: '4'}]
    const onItemClick = (value: string) => {
        alert(`${value} clicked`)
    }
    const itemsForCustomSelect: ItemType[] = [
        {id: '1', title: 'John'},
        {id: '2', title: 'Bob'},
        {id: '3', title: 'William'}
    ]
    const [item, setItem] = useState()
    const [isAnalog, setIsAnalog] = useState(true)
    return (
        <div className="App">
            <PageTitle title={'This is APP COMPONENT'}/>
            <hr/>

            <Accordion onItemClick={onItemClick} elements={elements} titleValue={'First Accordion Title'} collapsed={collapsed} setCollapsed={()=>setCollapsed(!collapsed)}/>
            <hr/>


            <Rating value={value} onClick={setValue}/>
            <hr/>
            <OnOff value={value1} setValue={setValue1}/>
            <OnOff value={value2} setValue={setValue2}/>

            <hr/>

            <UncontrolledAccordion toggle={toggle} setToggle={setToggle} titleValue={'Uncontrolled accordion'}/>

            <hr/>

            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>

            <hr/>
            <CustomSelect items={itemsForCustomSelect} onChangeValue={setItem} value={item}/>
            <hr/>
            <Clock isAnalog={isAnalog}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <div>{props.title}</div>
    )
}


export default App;
