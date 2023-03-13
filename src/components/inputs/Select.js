import React from "react";

const Select = ({ name, id, data, label }) => {
    return (
        <div className="w-full">
            {label && (
                <label htmlFor={id} className="font-semibold">
                    {label}
                </label>
            )}
            <select
                name={name}
                id={id}
                className="w-full p-3 text-sm mt-2 mb-4 rounded bg-gray-100 uppercase outline-none border-none transition-all duration-200 focus:outline-none focus:border-primary focus:border focus:bg-white"
            >
                {data.map((item, index) => (
                    <option key={index}>{item}</option>
                ))}
            </select>
        </div>
    );
};

export default Select;
