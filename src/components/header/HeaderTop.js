import Link from "next/link";
import React from "react";
import { BsTelephoneX } from "react-icons/bs";
import { RiCaravanFill } from "react-icons/ri";
const HeaderTop = () => {
    return (
        <div className="border-b-2 border-gray-100 bg-white mx-auto">
            <div className="container py-2 flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="flex justify-between px-2 md:px-0 space-x-4">
                    <div className="flex">
                        <BsTelephoneX size="20" />
                        <p className="text-bold ml-2">+8801316372924</p>
                    </div>
                    <div className="flex">
                        <BsTelephoneX size="20" />
                        <p className="text-bold ml-2">+8801407681024</p>
                    </div>
                </div>
                <div className="flex justify-between mt-2 md:mt-0 px-2 md:px-0 space-x-4">
                    <Link className="font-[500] flex items-center" href="">
                        <RiCaravanFill size="20" />
                        <span className="text-md ml-2">Track My Order</span>
                    </Link>
                    <Link
                        href="/signin"
                        className="text-primary border-primary border-2 rounded-md px-4 py-1 font-semibold hover:bg-primary hover:text-white transition duration-500"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/signup"
                        className="text-primary border-primary border-2 rounded-md px-4 py-1 font-semibold hover:bg-primary hover:text-white transition duration-500"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;
