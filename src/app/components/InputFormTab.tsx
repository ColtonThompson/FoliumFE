"use client"
import React from "react";
import {InputText} from "primereact/inputtext";
import {Button} from 'primereact/button';
import {Dropdown} from "primereact/dropdown";

export default function MyInputFormTab() {
    const [zipCode, setZipCode] = React.useState("");
    const [state, setState] = React.useState("");
    const [isValid, setValid] = React.useState(true);

    const states = [
        {name: 'ALABAMA', abbreviation: 'AL'},
        {name: 'ALASKA', abbreviation: 'AK'},
        {name: 'AMERICAN SAMOA', abbreviation: 'AS'},
        {name: 'ARIZONA', abbreviation: 'AZ'},
        {name: 'ARKANSAS', abbreviation: 'AR'},
        {name: 'CALIFORNIA', abbreviation: 'CA'},
        {name: 'COLORADO', abbreviation: 'CO'},
        {name: 'CONNECTICUT', abbreviation: 'CT'},
        {name: 'DELAWARE', abbreviation: 'DE'},
        {name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC'},
        {name: 'FEDERATED STATES OF MICRONESIA', abbreviation: 'FM'},
        {name: 'FLORIDA', abbreviation: 'FL'},
        {name: 'GEORGIA', abbreviation: 'GA'},
        {name: 'GUAM', abbreviation: 'GU'},
        {name: 'HAWAII', abbreviation: 'HI'},
        {name: 'IDAHO', abbreviation: 'ID'},
        {name: 'ILLINOIS', abbreviation: 'IL'},
        {name: 'INDIANA', abbreviation: 'IN'},
        {name: 'IOWA', abbreviation: 'IA'},
        {name: 'KANSAS', abbreviation: 'KS'},
        {name: 'KENTUCKY', abbreviation: 'KY'},
        {name: 'LOUISIANA', abbreviation: 'LA'},
        {name: 'MAINE', abbreviation: 'ME'},
        {name: 'MARSHALL ISLANDS', abbreviation: 'MH'},
        {name: 'MARYLAND', abbreviation: 'MD'},
        {name: 'MASSACHUSETTS', abbreviation: 'MA'},
        {name: 'MICHIGAN', abbreviation: 'MI'},
        {name: 'MINNESOTA', abbreviation: 'MN'},
        {name: 'MISSISSIPPI', abbreviation: 'MS'},
        {name: 'MISSOURI', abbreviation: 'MO'},
        {name: 'MONTANA', abbreviation: 'MT'},
        {name: 'NEBRASKA', abbreviation: 'NE'},
        {name: 'NEVADA', abbreviation: 'NV'},
        {name: 'NEW HAMPSHIRE', abbreviation: 'NH'},
        {name: 'NEW JERSEY', abbreviation: 'NJ'},
        {name: 'NEW MEXICO', abbreviation: 'NM'},
        {name: 'NEW YORK', abbreviation: 'NY'},
        {name: 'NORTH CAROLINA', abbreviation: 'NC'},
        {name: 'NORTH DAKOTA', abbreviation: 'ND'},
        {name: 'NORTHERN MARIANA ISLANDS', abbreviation: 'MP'},
        {name: 'OHIO', abbreviation: 'OH'},
        {name: 'OKLAHOMA', abbreviation: 'OK'},
        {name: 'OREGON', abbreviation: 'OR'},
        {name: 'PALAU', abbreviation: 'PW'},
        {name: 'PENNSYLVANIA', abbreviation: 'PA'},
        {name: 'PUERTO RICO', abbreviation: 'PR'},
        {name: 'RHODE ISLAND', abbreviation: 'RI'},
        {name: 'SOUTH CAROLINA', abbreviation: 'SC'},
        {name: 'SOUTH DAKOTA', abbreviation: 'SD'},
        {name: 'TENNESSEE', abbreviation: 'TN'},
        {name: 'TEXAS', abbreviation: 'TX'},
        {name: 'UTAH', abbreviation: 'UT'},
        {name: 'VERMONT', abbreviation: 'VT'},
        {name: 'VIRGIN ISLANDS', abbreviation: 'VI'},
        {name: 'VIRGINIA', abbreviation: 'VA'},
        {name: 'WASHINGTON', abbreviation: 'WA'},
        {name: 'WEST VIRGINIA', abbreviation: 'WV'},
        {name: 'WISCONSIN', abbreviation: 'WI'},
        {name: 'WYOMING', abbreviation: 'WY'}
    ];

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

                            <div className="mb-4">

                                <label htmlFor="stateDropDown"
                                       className="block text-gray-700 text-sm font-bold mb-2">
                                    State
                                </label>
                                <Dropdown id="stateDropDown" value={state} onChange={(e) => setState(e.value)}
                                          options={states} optionLabel="name"
                                          editable
                                          className="shadow border rounded w-full md:w-14rem py-2 px-3 text-black focus:shadow-outline"/>

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

export function validateZipCode(zipCode) {
    // Check if the zip code is 5 digits or 5 digits followed by a hyphen and 4 digits
    const zipCodeRegex = /^\d{5}(?:-\d{4})?$/;
    return zipCodeRegex.test(zipCode);

}
