"use client"
import React from "react";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";

export async function login(credentials) {
    return fetch('http://localhost:4000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json())
}

export default function LoginForm() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [token, setToken] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(`Login button was clicked!`);
        const token = await login({username, password});
        console.log(`Session token: ${token}`);
        setToken(token);
    }

    return (
        <React.Fragment>
            <div className="h-screen flex flex-col
                    items-center justify-center">
                <form className="rounded-lg bg-gray-800 space-y-6 px-5 py-5 w-1/5 min-w-80" onSubmit={handleSubmit}>
                    <p className="text-lg font-bold text-center bg-gray-800">LOGIN</p>
                    <div className="mt-2">
                        <label htmlFor="usernameField" className="block font-bold">Username</label>
                        <InputText className="w-full bg-gray-900 px-2 mt-2" id="usernameField" value={username}
                                   onChange={(e) => {
                                       setUsername(e.target.value)
                                   }}/>

                    </div>
                    <div className="mt-2">
                        <label htmlFor="passwordField" className="block font-bold">Password</label>
                        <InputText className="w-full bg-gray-900 px-2 mt-2" id="passwordField" type="password"
                                   value={password}
                                   onChange={(e) => {
                                       setPassword(e.target.value)
                                   }}/>
                    </div>
                    <div className="mt-2">
                        <p className="mt-4 mb-4 text-sm text-center font-bold text-red-600">{errorMessage}</p>
                        <Button
                            className="flex w-full justify-center rounded font-md uppercase leading-normal bg-indigo-600 py-3 shadow-lg hover:bg-indigo-800"
                            label="Submit"
                        />
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}