"use client"
import React from "react";
import {InputMask} from "primereact/inputmask";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
        
export default function MyInputFormTab() {
    const [zipCode, setZipCode] = React.useState("");

    const validate = (e) => {

    }

    const handleButtonClick = () => {
        console.log("button was clicked!")
        if (validateZipCode(zipCode))
        {
            console.log('Zip code is valid')
        } else {
            console.log('Zip code is invalid')
        }
    }

    return (
        <React.Fragment>
            <div className="card flex justify-content-center">
                <div>
                    <label htmlFor="zip" className="font-bold block mb-2">
                        Zip Code Example:
                    </label>
                    <InputMask id="zip" value={zipCode} onChange={(e) => { setZipCode(e.target.value); validate(e)}} mask="99999?-9999"
                               placeholder="12345-1234"

                    />
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