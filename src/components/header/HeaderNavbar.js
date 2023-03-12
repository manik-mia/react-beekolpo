import React from "react";

import Categoreis from "./Categoreis";
import Navbar from "./Navbar";
const HeaderNavbar = () => {
    return (
        <div className="container flex flex-col md:flex-row">
            <div className="w-4/5 flex  items-center space-x-10">
                <Categoreis />
                <Navbar />
            </div>
        </div>
    );
};

export default HeaderNavbar;
