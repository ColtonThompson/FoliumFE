"use client"

import React from "react";
import { ReactDOM } from "react";
import DropdownBox from "@/app/testing/components/DropdownBox";
import SubmitForm from "./components/Form";


export default function TestPage()
{

    return (
        <React.Fragment>

            <h1>Hello world!</h1>
           
            <SubmitForm label="Enter your name:"></SubmitForm>

        </React.Fragment>
    );
}


