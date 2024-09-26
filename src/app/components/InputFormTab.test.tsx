import React from 'react';
import {cleanup, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import MyInputFormTab from './InputFormTab';
import {Dropdown} from "primereact/dropdown";
import {afterEach} from "@jest/globals";

const user = userEvent.setup()

afterEach(() => {
    cleanup()
});

const states = [
    {name: 'ALABAMA', abbreviation: 'AL'},
    {name: 'ALASKA', abbreviation: 'AK'},
    {name: 'ARIZONA', abbreviation: 'AZ'},
    {name: 'ARKANSAS', abbreviation: 'AR'},
    {name: 'CALIFORNIA', abbreviation: 'CA'},
    {name: 'COLORADO', abbreviation: 'CO'},
    {name: 'CONNECTICUT', abbreviation: 'CT'},
    {name: 'DELAWARE', abbreviation: 'DE'},
    {name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC'},
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
    {name: 'OHIO', abbreviation: 'OH'},
    {name: 'OKLAHOMA', abbreviation: 'OK'},
    {name: 'OREGON', abbreviation: 'OR'},
    {name: 'PENNSYLVANIA', abbreviation: 'PA'},
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

test("MyInputFormTab is rendering", async () => {
    render(<MyInputFormTab></MyInputFormTab>);

    const element = document.getElementById("inputFormTab")
    expect(element).toBeInTheDocument();
})

test('renders the dropdown with correct options', async () => {
    const handleChange = jest.fn();

    render(<Dropdown id="dropdown" options={states} onChange={handleChange}/>);
    const element = document.getElementById("dropdown");
    expect(element).toBeInTheDocument()
});

test('updates the value when an option is selected', async () => {
    const handleChange = jest.fn();
    render(<Dropdown id="dropdown" options={states} onChange={handleChange}/>);
    const element = document.getElementById("dropdown");
    expect(element).toBeInTheDocument()

    await user.click(element)

    const option = screen.getByText("TX")
    await user.click(option)

    const dd = screen.getByRole('option', {selected: true})

    await user.click(dd)
});
