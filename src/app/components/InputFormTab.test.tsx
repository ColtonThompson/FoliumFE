import React from 'react';
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import MyInputFormTab from './InputFormTab';


test("MyInputFormTab is rendering", () => {
    render(<MyInputFormTab></MyInputFormTab>);

    const element = document.getElementById("inputFormTab")
    expect(element).toBeInTheDocument();
})
