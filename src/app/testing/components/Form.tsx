import React from "react"
import DropdownBox from "./DropdownBox"

export default function SubmitForm({label})
{

    const stateAbbreviations = [
        "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA",
        "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK",
        "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
    ];

     return (
        <React.Fragment>
            <form>
            <label>
                {label}:
                <input type="text" name="name" />
            </label>
            <DropdownBox options={stateAbbreviations} label="Choose your State"></DropdownBox>
            <br />
            <input type="submit" value="Submit" />
            </form>
        </React.Fragment>
    )
}