import React from "react";

const Textarea = ({ label, id, name, placeholder }) => {
    return (
        <div>
            {label && (
                <label
                    htmlFor={id}
                    className="text-md text-black font-semibold"
                >
                    {label}
                    {required && <span className="text-primary">*</span>}
                </label>
            )}

            <textarea
                className="w-full min-h-32 p-3 mt-2 text-sm mb-4 rounded bg-gray-100 outline-none border-none transition-all duration-200 focus:outline-none focus:border-secondary focus:border focus:bg-white"
                id={id}
                name={name}
                placeholder={placeholder}
            ></textarea>
        </div>
    );
};

export default Textarea;
