import React from "react";

export default function DropdownBox({options, label}) {
    return (
        <React.Fragment>
            <label>{label}</label>
            <br/>
            <select>
                {options.map((option: string) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </React.Fragment>
    );
}
