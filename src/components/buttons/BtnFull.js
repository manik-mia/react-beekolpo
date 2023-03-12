import React from "react";

const BtnFull = ({ text, className }) => {
    return (
        <button
            type="submit"
            className={`w-full text-white py-3 ${
                className ? className : "bg-primary rounded"
            } `}
        >
            {text}
        </button>
    );
};

export default BtnFull;
