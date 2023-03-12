import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderCart from "./HeaderCart";

const HeaderMain = () => {
    return (
        <div className="container py-4">
            <div className="flex flex-col lg:flex-row justify-between justify-items-center px-2 lg:px-0">
                <div className="logo mx-auto lg:text-left lg:mx-0">
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            width={150}
                            alt="Logo"
                            height={50}
                        />
                    </Link>
                </div>
                <div className="search w-full lg:w-3/6 flex mt-2 lg:mt-0 ">
                    <input
                        type="search"
                        name="search"
                        id=""
                        className="w-full border-primary border-2 form-input focus:outline-0 focus:border-2 focus:border-primary focus:ring-0 rounded-l"
                        placeholder="Enter Keyword for search project"
                    />
                    <button
                        type="submit"
                        className="bg-primary text-white px-4 py-2 rounded-r"
                    >
                        Search
                    </button>
                </div>
                <div className="cart mt-4 lg:mt-0 mx-auto lg:mx-0">
                    <HeaderCart />
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;
