"use client"
import React from "react";
import {InputMask} from "primereact/inputmask";

export default function MyInputFormTab() {
    const [zipCode, setZipCode] = React.useState("");

    return (
        <React.Fragment>
            <div className="card flex justify-content-center">
                <div>
                    <label htmlFor="zip" className="font-bold block mb-2">
                        Zip Code Example:
                    </label>
                    <InputMask id="zip" value={zipCode} onChange={(e) => setZipCode(e.target.value)} mask="99999?-9999"
                               placeholder="12345-1234"
                    />
                    <br/>
                    You entered a zip code for: {zipCode}
                </div>
            </div>
        </React.Fragment>
    )
}