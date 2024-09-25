"use client"
import React from "react";
import {InputText} from "primereact/inputtext";
import {Button} from 'primereact/button';

export default function MyInputFormTab() {
    const [zipCode, setZipCode] = React.useState("");
    const [isValid, setValid] = React.useState(true);

    const handleButtonClick = () => {
        if (validateZipCode(zipCode)) {
            console.log('Zip code is valid')
            setValid(true)
        } else {
            console.log('Zip code is invalid')
            setValid(false)
        }
        console.log("User entered " + zipCode + " zip code, isValid: " + isValid)
    }

    return (
        <React.Fragment>
            <div id="inputFormTab">
                <div
                    className="rounded-t-lg overflow-hidden px-3 py-10 flex justify-center">
                    <div className="w-full max-w-xs md:mt-0">
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                                <label htmlFor="zip" className="block text-gray-700 text-sm font-bold mb-2">
                                    Zip Code
                                </label>
                                <InputText
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="zip" value={zipCode} placeholder="#####-####"
                                    onChange={(e) => {
                                        setZipCode(e.target.value);
                                    }}
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="other" className="block text-gray-700 text-sm font-bold mb-2">
                                    Other
                                </label>
                                <InputText
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="other" value="" placeholder="Other useful info!">Other</InputText>
                            </div>

                            <p className="text-black">You entered: {zipCode}</p>
                            <Button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                icon="pi pi-check" id="submitButton" label="Click Me"
                                onClick={handleButtonClick}></Button>

                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export function validateZipCode(zipCode: string) {
    // Check if the zip code is 5 digits or 5 digits followed by a hyphen and 4 digits
    const zipCodeRegex = /^\d{5}(?:-\d{4})?$/;
    return zipCodeRegex.test(zipCode);

}