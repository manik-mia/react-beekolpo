import React from "react";
import { BsTelephone, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { RiCustomerServiceLine } from "react-icons/ri";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import Image from "next/image";
const Footer = () => {
    return (
        <div className="footer">
            <div className="bg-[url('/assets/images/footer-bg.png')] bg-cover bg-no-repeat bg-center">
                <div className="backdrop-brightness-50">
                    <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-white py-6 gap-8">
                        <div>
                            <h3 className="text-xl mb-2">
                                <span className="text-xl ">Contact Us</span>
                            </h3>
                            <div className="w-2/5 border-b-2 "></div>
                            <ul className="mt-5">
                                <li className="flex items-center my-2">
                                    <BsTelephone size={16} />
                                    <span className="ml-4 font-bold">
                                        +8801316372924
                                    </span>
                                </li>
                                <li className="flex items-center my-2">
                                    <RiCustomerServiceLine size={16} />
                                    <span className="ml-4">
                                        Service hour 24/7
                                    </span>
                                </li>
                                <li className="flex items-center my-2">
                                    <HiOutlineMail size={16} />
                                    <span className="ml-4">info@gmail.com</span>
                                </li>
                                <li className="flex items-center my-2">
                                    <HiOutlineLocationMarker size={20} />
                                    <span className="ml-4">
                                        House-33, Road-15, Sector-11, Uttara,
                                        Dhaka
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl mb-2">
                                <span className="text-xl ">User Info</span>
                            </h3>
                            <div className="w-2/5 border-b-2 "></div>
                            <ul className="mt-5">
                                <li className="flex items-center my-2">
                                    My Account
                                </li>
                                <li className="flex items-center my-2">
                                    My Order
                                </li>
                                <li className="flex items-center my-2">
                                    Track My Order
                                </li>
                                <li className="flex items-center my-2">
                                    Map Location
                                </li>
                                <li className="flex items-center my-2">
                                    Sitemap
                                </li>
                            </ul>
                            <ul className="flex space-x-3 mt-5">
                                <li className="flex items-center my-2">
                                    <a
                                        href=""
                                        className="p-2 bg-primary rounded-full"
                                    >
                                        <FaFacebookF size={20} />
                                    </a>
                                </li>
                                <li className="flex items-center my-2">
                                    <a
                                        href=""
                                        className="p-2 bg-primary rounded-full"
                                    >
                                        <BsInstagram size={20} />
                                    </a>
                                </li>

                                <li className="flex items-center my-2">
                                    <a
                                        href=""
                                        className="p-2 bg-primary rounded-full"
                                    >
                                        <BsYoutube size={20} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl mb-2">
                                <span className="text-xl ">Our Services</span>
                            </h3>
                            <div className="w-2/5 border-b-2 "></div>
                            <ul className="mt-5">
                                <li className="flex items-center my-2">
                                    My Account
                                </li>
                                <li className="flex items-center my-2">
                                    About Us
                                </li>
                                <li className="flex items-center my-2">
                                    Whole Sale
                                </li>
                                <li className="flex items-center my-2">
                                    Privacy Policy
                                </li>
                                <li className="flex items-center my-2">
                                    Terms & Conditions
                                </li>
                                <li className="flex items-center my-2">FAQs</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-md mb-2">
                                <span className="text-xl uppercase">
                                    Join With Us
                                </span>
                            </h3>
                            <p>
                                Sign Up to get our latest products updates &
                                events
                            </p>
                            <div className="newslatter mt-4">
                                <form action="" method="post" className="flex">
                                    <input
                                        type="text"
                                        name="email"
                                        id=""
                                        className="bg-white rounded-l-md border-transparent w-3/5 focus:outline-0 focus:border-1 focus:border-transparent focus:ring-0"
                                    />
                                    <button
                                        type="submit"
                                        className="flex items-center w-2/5 bg-primary rounded-r-md px-2 py-1 font-semibold"
                                    >
                                        Join Now
                                        <FiSend className="ml-2" size={20} />
                                    </button>
                                </form>
                            </div>
                            <h4 className="text-xl font-semibold uppercase mt-5">
                                We Accept
                            </h4>
                            <Image
                                src="/assets/images/payment.png"
                                width={270}
                                height={35}
                                alt="payment logo"
                                className="mt-2"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
