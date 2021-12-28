import React from 'react';
import {useState} from "react";
import "./ColorPicker.css"
// import "bootstrap/dist/css/bootstrap.min.css"

// No es responsive!! Funciona bien hasta una resolucion de 730 x 860
function ColorPicker() {
    const [backgroundColor, setColor] = useState("#000000");

    return (
    <div className="background" style={{backgroundColor: backgroundColor}}>
       <div className="pickerCard">
           <h1 className="pickerTitle">Color Picker</h1>
           <div className="picker">
               <input className="pickerInput" id="color" type="color" onChange={(event => setColor(event.target.value))}></input>
               <label className="pickerText" htmlFor="color">{backgroundColor}</label>
           </div>
       </div> 
    </div> 
    );
}

export default ColorPicker;