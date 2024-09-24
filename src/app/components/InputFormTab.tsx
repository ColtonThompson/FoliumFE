"use client"
import React from "react";
import {InputMask} from "primereact/inputmask";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
        
export default function MyInputFormTab() {
    const [zipCode, setZipCode] = React.useState("");
    const [isValid, setValid] = React.useState(true);

    const validate = (e) => {

    }

    const handleButtonClick = () => {
        const buttonElement = document.getElementById("zip")
        console.log("button was clicked!")
        if (validateZipCode(zipCode))
        {
            console.log('Zip code is valid')
            setValid(true)
        } else {
            console.log('Zip code is invalid')
            setValid(false)
        }
        console.log(zipCode)
    }


        
        
        
        <InputText id="zip" value={zipCode} placeholder="#####-####" onChange={(e) => { setZipCode(e.target.value); validate(e)}}
        />
    

    return (
        <React.Fragment>
            <div id="inputFormTab">
                <div className="card flex justify-content-center">
                    <div>
                        <label htmlFor="zip" className="font-bold block mb-2">
                            Zip Code Example:
                        </label>


                        <br/>
                        <br/>
                        <InputText id="lol" value="bla">Other</InputText>
                        <br/>
                        You entered a zip code for: {zipCode}
                        <br/>
                        <br/>
                        <Button className="p-button" id="submitButton" label="Click Me" onClick={handleButtonClick}></Button>
                    </div>
                </div>
            </div>    
        </React.Fragment>
    )
}

export function validateZipCode(zipCode) {
    // Check if the zip code is 5 digits or 5 digits followed by a hyphen and 4 digits
    const zipCodeRegex = /^\d{5}(?:-\d{4})?$/;
  
    if (zipCodeRegex.test(zipCode)) {
      return true;
    } else {
      return false;
    }
  }