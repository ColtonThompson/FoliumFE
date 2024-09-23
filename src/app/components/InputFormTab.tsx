"use client"
import React, {useState} from "react";
import {InputText} from "primereact/inputtext";

export default function MyInputFormTab() {
    const [zipCode, setZipCode] = React.useState("");
    const [isValid, setIsValid] = useState(true);

    const validateInput = (event: { target: { value: any; }; }) => {
        const newZipCode = event.target.value;
        setZipCode(newZipCode);

        // Regular expression for US zip codes (5 digits or 5+4 digits)
        const zipCodeRegex = /^\d{5}(-\d{4})?$/;
        setIsValid(zipCodeRegex.test(newZipCode));
    };

    return (
        <React.Fragment>
            <label>Zip Code Test Field</label>
            <br/>
            <InputText id="zip"
                       value={zipCode}
                       onChange={validateInput}
                       placeholder="Enter Zip Code"
            />
            <br/>
            <br/>
            {!isValid && <p>Invalid Zip Code format!</p>}
        </React.Fragment>
    )
}