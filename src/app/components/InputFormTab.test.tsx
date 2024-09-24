import React from 'react';
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import MyInputFormTab from './InputFormTab';


test("MyInputFormTab is rendering", () => {
    render(<MyInputFormTab></MyInputFormTab>);

    const element = document.getElementById("inputFormTab")
    expect(element).toBeInTheDocument();
})
