import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import MyInputFormTab from './InputFormTab';
import {Dropdown} from "primereact/dropdown";


test("MyInputFormTab is rendering", () => {
    render(<MyInputFormTab></MyInputFormTab>);

    const element = document.getElementById("inputFormTab")
    expect(element).toBeInTheDocument();
})

test('renders the dropdown with correct options', () => {
    const options = [
        {label: 'Option 1', value: '1'},
        {label: 'Option 2', value: '2'},
    ];

    render(<Dropdown data-testid="red" options={options} value={null}/>);

    const dropdown = screen.getByTestId("red")
    expect(dropdown).toBeInTheDocument();

    fireEvent.click(dropdown);

    const option1 = screen.getByText('Option 1');
    const option2 = screen.getByText('Option 2');
    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
});

test('updates the value when an option is selected', () => {
    const options = [
        {label: 'Option 1', value: '1'},
        {label: 'Option 2', value: '2'},
    ];

    const handleChange = jest.fn();

    render(<Dropdown data-testid="orange" options={options} value={null} onChange={handleChange}/>);

    const dropdown = screen.getByTestId("orange")
    fireEvent.click(dropdown);
    
    const option2 = screen.getByText('Option 2');
    fireEvent.click(option2);

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(screen.getByDisplayValue('Option 2')).toBeInTheDocument()
});
