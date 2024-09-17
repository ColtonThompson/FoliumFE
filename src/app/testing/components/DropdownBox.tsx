import React from "react";

export default function DropdownBox({options, label})
{
    console.log(options);
    return (
        <React.Fragment>
            <label>{label}</label>
            <select>
                {options.map((option) => (
                    <option value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </React.Fragment>
    );
}
