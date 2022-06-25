import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/Accordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/Rating/UncontrolledRating';

function App() {
    console.log('App rendering')
    const [toggle, setToggle] = useState<boolean>(true)
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [value1, setValue1] = useState(false)
    const [value2, setValue2] = useState(false)
    const [value,setValue] = useState(0)
    return (
        <div className="App">
            <PageTitle title={'This is APP COMPONENT'}/>
            <hr/>

            <Accordion titleValue={'First Accordion Title'} collapsed={collapsed} setCollapsed={()=>setCollapsed(!collapsed)}/>
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
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return (
        <div>{props.title}</div>
    )
}


export default App;
