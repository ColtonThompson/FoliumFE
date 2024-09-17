"use client"

import React from "react";
import DropdownBox from "@/app/testing/components/DropdownBox";

export default function TestPage()
{
    const stateAbbreviations = [
        "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA",
        "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK",
        "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
    ];
    return (
        <React.Fragment>
            <head>
                <title>Testing Playground</title>
            </head>

            <h1>Hello world!</h1>
            <DropdownBox options={stateAbbreviations} label="Choose your State"></DropdownBox>


        </React.Fragment>
    );
}


