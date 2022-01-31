import './bootstrap.css';
import React, { useState } from "react";
import Addcontentform from "./components/addcontentform";

function App() {
    //VARIABLES
    //These are the variables for the style of the tabs buttons
    const botonUnselected = "btn btn-dark ";
    const botonSelected = "btn btn-primary ";

    //STATES
    //State to show in Tab Info section
    const [contentShow, setContentShow] = useState('')
    //Uplifted State
    const [tabArray, setTabArray] = useState([])

    //HANDLERS
    const handleSelectedTab = (indexTab) => {
        setContentShow(tabArray[indexTab].content);
        const tempTabsArray = tabArray.map((item, index) => {
            if (indexTab === index) {
                item.selected = !item.selected;
            } else {
                item.selected = false;
            }
            return item;
        })
        setTabArray(tempTabsArray);
    }

    //MAIN RETURN OF THE APP.JS
  return (
    <div className={"container"}>
        <h2>Fucking TABS app again</h2>
        <hr/>
        {/*Form component*/}
        <Addcontentform
            // Uplift States
            tabArray = {tabArray}
            setTabArray = {setTabArray}
        />
        <hr/>
        {/*Tabs rendering starts here*/}
        {/*Mapping the tabs in the state*/}
        <h3>TABS</h3>
        <div className={"d-flex"}>
            {tabArray.map((item, index)=> {
                let boton = '';
                (item.selected === false) ? boton = botonUnselected : boton = botonSelected;

                return (
                    <div className={"mr-2"} key={index}>
                        <button className={boton} onClick={event => handleSelectedTab(index)}>{item.name}</button>
                    </div>
                )
            })}
        </div>
        <hr/>
        {/*Showing the info of each tab selected*/}
        <h4>Tab info:</h4>
        <h5>{contentShow}</h5>
    </div>

  );
}

export default App;
