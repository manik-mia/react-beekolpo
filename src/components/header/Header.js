import React from "react";
import HeaderMain from "./HeaderMain";
import HeaderNavbar from "./HeaderNavbar";
import HeaderTop from "./HeaderTop";

const Header = () => {
    return (
        <div className="">
            <HeaderTop />
            <HeaderMain />
            <HeaderNavbar />
        </div>
    );
};

export default Header;
