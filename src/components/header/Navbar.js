import React from "react";

const Navbar = () => {
    return (
        <ul className="navbar w-3/4 flex space-x-6">
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
