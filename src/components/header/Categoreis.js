import Image from "next/image";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import {
    MdOutlineKeyboardArrowDown,
    MdOutlineKeyboardArrowRight,
} from "react-icons/md";
const Categoreis = () => {
    const [showCategory, setShowCategory] = useState(false);

    return (
        <div className="w-1/4">
            <div className="categories relative transition-all duration-1000 ">
                <div
                    className="flex justify-between items-center bg-primary px-3 py-2 text-white cursor-pointer z-50"
                    onClick={() => setShowCategory(!showCategory)}
                >
                    <div className="toggler flex items-center">
                        <FaBars size="20" />
                        <span className="ml-4">Browse Categoreis</span>
                    </div>
                    <MdOutlineKeyboardArrowDown size={20} className="" />
                </div>

                <ul
                    className={`absolute w-full  transition-all duration-500  bg-white  ease-in-out ${
                        showCategory ? "z-10" : "hidden z-0"
                    }`}
                >
                    <li className="flex justify-between p-3 border-b">
                        <a href="" className="flex">
                            <Image
                                src="/assets/images/t-shirt.png"
                                width={25}
                                height={25}
                                alt="category name"
                            />
                            <span className="ml-4"> Mens Fashion</span>
                        </a>
                        <MdOutlineKeyboardArrowRight size={24} />
                    </li>
                    <li className="flex justify-between p-3 border-b">
                        <a href="" className="flex">
                            <Image
                                src="/assets/images/t-shirt.png"
                                width={25}
                                height={25}
                                alt="category name"
                            />
                            <span className="ml-4"> Mens Fashion</span>
                        </a>
                        <MdOutlineKeyboardArrowRight size={24} />
                    </li>
                    <li className="flex justify-between p-3 border-b">
                        <a href="" className="flex">
                            <Image
                                src="/assets/images/t-shirt.png"
                                width={25}
                                height={25}
                                alt="category name"
                            />
                            <span className="ml-4"> Mens Fashion</span>
                        </a>
                        <MdOutlineKeyboardArrowRight size={24} />
                    </li>
                    <li className="flex justify-between p-3 border-b">
                        <a href="" className="flex">
                            <Image
                                src="/assets/images/t-shirt.png"
                                width={25}
                                height={25}
                                alt="category name"
                            />
                            <span className="ml-4"> Mens Fashion</span>
                        </a>
                        <MdOutlineKeyboardArrowRight size={24} />
                    </li>
                    <li className="flex justify-between p-3 border-b">
                        <a href="" className="flex">
                            <Image
                                src="/assets/images/t-shirt.png"
                                width={25}
                                height={25}
                                alt="category name"
                            />
                            <span className="ml-4"> Mens Fashion</span>
                        </a>
                        <MdOutlineKeyboardArrowRight size={24} />
                    </li>
                    <li className="flex justify-between p-3 border-b">
                        <a href="" className="flex">
                            <Image
                                src="/assets/images/t-shirt.png"
                                width={25}
                                height={25}
                                alt="category name"
                            />
                            <span className="ml-4"> Mens Fashion</span>
                        </a>
                        <MdOutlineKeyboardArrowRight size={24} />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Categoreis;
