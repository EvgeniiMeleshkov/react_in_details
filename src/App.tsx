import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from './OnOff/OnOff';
import UncontrolledAccordion from './components/Accordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/Rating/UncontrolledRating';

function App() {
    console.log("App rendering")
    return (
        <div className="App">
            <PageTitle title={'This is APP COMPONENT'}/>
            <hr/>

            <Accordion titleValue={'First Accordion Title'} collapsed={true} />
            <Accordion titleValue={'Second Accordion Title'} collapsed={false} />
            <hr/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <hr/>
            <OnOff/>
            <OnOff/>
            <hr/>
            <UncontrolledAccordion titleValue={'Uncontrolled first'}/>
            <UncontrolledAccordion titleValue={'Uncontrolled second'}/>
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
    console.log("PageTitle rendering")
    return (
        <div>{props.title}</div>
    )
}



export default App;
