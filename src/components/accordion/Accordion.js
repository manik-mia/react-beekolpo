import React, { useState } from "react";
import { TfiAngleDown } from "react-icons/tfi";
const Accordion = ({ title, description }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="relative max-h-max bg-primary-light p-2 rounded my-4">
            <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                <h4 className="text-lg font-bold">Q. {title}</h4>
                <TfiAngleDown
                    className={`${
                        open ? "rotate-180" : "rotate-0"
                    }  transition-all duration-500 ease-in-out text-xl`}
                />
            </div>
            <div
                className={`${
                    open ? "min-h-max block" : "hidden"
                } mt-6 transition-all duration-500 ease-in-out`}
            >
                {description}
            </div>
        </div>
    );
};

export default Accordion;
