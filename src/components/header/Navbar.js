import React from "react";

const Navbar = () => {
    return (
        <ul className="hidden md:flex w-3/4 space-x-6 overflow-scroll md:overflow-hidden">
            <li>
                <a
                    href=""
                    className="font-semibold text-primary hover:text-primary"
                >
                    Home
                </a>
            </li>
            <li>
                <a href="" className="font-semibold hover:text-primary">
                    Shop
                </a>
            </li>
            <li>
                <a href="" className="font-semibold hover:text-primary">
                    Flash Sale
                </a>
            </li>
            <li>
                <a href="" className="font-semibold hover:text-primary">
                    New Arrivals
                </a>
            </li>
            <li>
                <a href="" className="font-semibold hover:text-primary">
                    Low MOQ
                </a>
            </li>
            <li>
                <a href="" className="font-semibold hover:text-primary">
                    Help
                </a>
            </li>
        </ul>
    );
};

export default Navbar;
