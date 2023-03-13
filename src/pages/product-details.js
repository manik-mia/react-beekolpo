import GridProduct from "@/components/product/GridProduct";
import { MdArrowForwardIos } from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaUsers, FaAngleDown } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { FaFacebookF, FaWhatsapp, FaTwitter, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Select from "@/components/inputs/Select";
import BtnFull from "@/components/buttons/BtnFull";
import Accordion from "@/components/accordion/Accordion";
const ProductDetails = () => {
    const [open, setOpen] = useState("description");
    const colors = ["Red", "Green", "Blue"];
    const sizes = ["sm", "md", "lg", "xl", "2xl", "2xl"];
    return (
        <div className="py-8 bg-white">
            <div className="container flex justify-between gap-6">
                <div className="w-9/12">
                    <div className="flex justify-between gap-6">
                        <div className="w-1/2 overflow-hidden">
                            <div className="w-full bg-primary-light rounded-md">
                                <Image
                                    src="/assets/images/products/p1.png"
                                    alt="Product Name"
                                    width="700"
                                    height="700"
                                />
                            </div>
                            <div className="flex gap-4 mt-4">
                                <div className="flex items-center border-2 border-gray-200 p-2 gap-2 rounded-md">
                                    <FaUsers
                                        className="text-black"
                                        size="50px"
                                    />
                                    <div>
                                        <h6 className="text-sm font-semibold">
                                            24 Hour Customer Support
                                        </h6>
                                    </div>
                                </div>
                                <div className="flex items-center border-2 border-gray-200 p-2 gap-2 rounded-md">
                                    <TbTruckDelivery
                                        className="text-black"
                                        size="50px"
                                    />
                                    <div>
                                        <h6 className="text-sm font-semibold">
                                            24 Hour Customer Support
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <nav class="flex py-3 " aria-label="Breadcrumb">
                                <ul className="inline-flex gap-2">
                                    <li className="flex gap-1 items-center">
                                        <Link
                                            href="#"
                                            className="flex gap-1 items-center"
                                        >
                                            <HiHome /> Home
                                        </Link>
                                        <MdArrowForwardIos />
                                    </li>
                                    <li className="flex gap-1 items-center">
                                        <Link
                                            href="#"
                                            className="flex gap-1 items-center"
                                        >
                                            Products
                                        </Link>
                                        <MdArrowForwardIos />
                                    </li>
                                    <li>Product Name</li>
                                </ul>
                            </nav>
                            <h2 className="text-2xl font-bold">
                                New Product 2023
                            </h2>
                            <div className="flex items-center mt-6">
                                <div className="rating-star flex">
                                    <AiFillStar className="text-rating text-sm" />
                                    <AiFillStar className="text-rating text-sm" />
                                    <AiFillStar className="text-rating text-sm" />
                                    <AiFillStar className="text-rating text-sm" />
                                    <AiFillStar className="text-gray-300 text-sm" />
                                </div>
                                <div className="total-rating ml-2 text-sm">
                                    (5)
                                </div>
                                <div className="total-rating ml-4 text-sm">
                                    35 Sold
                                </div>
                            </div>
                            <div className="flex items-center my-4">
                                <p>
                                    Product Code / SKU : <span>T10-852455</span>
                                </p>
                                <p className="flex items-center ml-6">
                                    <IoMdCheckmarkCircleOutline className="text-green-500 font-bold text-xl" />
                                    <span className="ml-2">In Stock</span>
                                </p>
                            </div>
                            <div className="border-b-2 border-gray-200"></div>
                            <div className="flex items-center gap-8 my-6">
                                <h5 className="text-lg font-bold">
                                    TK 500{" "}
                                    <span className="text-sm">/ pcs</span>
                                </h5>
                                <p className="text-lg font-bold text-[#F60000]">
                                    10% OFF
                                </p>
                                <p className="text-md line-through">TK 550</p>
                            </div>
                            <div className="border-b-2 border-gray-200"></div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                                <div>
                                    <label
                                        htmlFor="qty"
                                        className="text-md text-black font-semibold"
                                    >
                                        Quantity
                                        <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        type="number"
                                        className="w-full p-3 mt-2 text-sm mb-4 rounded bg-gray-100 outline-none border-none transition-all duration-200 focus:outline-none focus:border-secondary focus:border focus:bg-white"
                                        id="qty"
                                        name="qty"
                                        value="1"
                                        min="1"
                                    />
                                </div>
                                <Select
                                    data={colors}
                                    name="color"
                                    id="color"
                                    label="Select Color"
                                />
                                <Select
                                    data={sizes}
                                    name="size"
                                    id="size"
                                    label="Select Size"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <BtnFull text="Add To Cart" />
                                <BtnFull
                                    className="bg-[#4B035D] rounded"
                                    text="Buy Now"
                                />
                            </div>
                            <div className="flex items-center gap-5 mt-8">
                                <span>Share with your friend</span>
                                <Link href="#">
                                    <FaFacebookF color="#3b5998" />
                                </Link>
                                <Link href="#">
                                    <FaWhatsapp color="#25D366" />
                                </Link>
                                <Link href="#">
                                    <FaTwitter color="#00acee" />
                                </Link>
                                <Link href="#">
                                    <FaEnvelope color="#BB001B" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="border-b-2 border-gray-400 mt-8 mb-3"></div>
                    <nav>
                        <ul className="flex items-center gap-6 text-md">
                            <li
                                className={`cursor-pointer uppercase font-semibold ${
                                    open === "description" && "text-primary"
                                }`}
                                onClick={() => setOpen("description")}
                            >
                                Descriptions
                            </li>
                            <li
                                className={`cursor-pointer uppercase font-semibold ${
                                    open === "review" && "text-primary"
                                }`}
                                onClick={() => setOpen("review")}
                            >
                                Reviews (24)
                            </li>
                            <li
                                className={`cursor-pointer uppercase font-semibold ${
                                    open === "faq" && "text-primary"
                                }`}
                                onClick={() => setOpen("faq")}
                            >
                                FAQs
                            </li>
                        </ul>
                    </nav>
                    <div className="border-b-2 border-gray-200 mt-3"></div>
                    <div className="mt-8 mb-4">
                        <div
                            className={
                                open === "description" ? "block" : "hidden"
                            }
                        >
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Repellat tenetur dolorem iusto
                                voluptate eligendi veritatis nisi laborum
                                voluptatibus sunt tempora?
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Rem et quam, fugit dicta quos
                                molestias. Voluptatem natus laborum enim nam
                                optio quibusdam eveniet est ducimus iste
                                dolores? Placeat pariatur voluptatem deleniti
                                necessitatibus dolor ullam, at voluptate
                                doloribus consequuntur, aut nemo aliquid
                                expedita a repellat ex cumque aspernatur. Sunt,
                                architecto esse.
                            </p>
                        </div>
                        <div className={open === "review" ? "block" : "hidden"}>
                            <div className="flex">
                                <div className="w-4/12">
                                    <div className="flex gap-4">
                                        <h5 className="text-rating text-3xl font-bold">
                                            4.5
                                        </h5>
                                        <div>
                                            <span>Avarage Rating</span>
                                            <div className="flex mt-4 items-center">
                                                <AiFillStar className="text-rating text-sm" />
                                                <AiFillStar className="text-rating text-sm" />
                                                <AiFillStar className="text-rating text-sm" />
                                                <AiFillStar className="text-rating text-sm" />
                                                <AiFillStar className="text-gray-300 text-sm" />
                                                <span className="ml-4">
                                                    (5 Reviews)
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm mt-4">
                                        <span className="font-bold text-md mr-4">
                                            100%
                                        </span>
                                        Recomended (4 of 5)
                                    </p>
                                </div>
                                <div className="w-4/12">
                                    <div className="flex items-center gap-4">
                                        <div className="flex">
                                            <AiFillStar className="text-rating text-sm" />
                                            <AiFillStar className="text-rating text-sm" />
                                            <AiFillStar className="text-rating text-sm" />
                                            <AiFillStar className="text-rating text-sm" />
                                            <AiFillStar className="text-rating text-sm" />
                                        </div>
                                        <div class="w-full bg-gray-200 rounded-full h-2 mt-1">
                                            <div
                                                class="bg-heading-border h-2 rounded-full"
                                                style={{ width: "75%" }}
                                            ></div>
                                        </div>
                                        <div>75%</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex">
                                            <AiFillStar className="text-rating text-sm" />
                                            <AiFillStar className="text-rating text-sm" />
                                            <AiFillStar className="text-rating text-sm" />
                                            <AiFillStar className="text-rating text-sm" />
                                            <AiFillStar className="text-gray-300 text-sm" />
                                        </div>
                                        <div class="w-full bg-gray-200 rounded-full h-2 mt-1">
                                            <div
                                                class="bg-heading-border h-2 rounded-full"
                                                style={{ width: "50%" }}
                                            ></div>
                                        </div>
                                        <div>50%</div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex">
                                            <AiFillStar className="text-rating text-sm" />
                                            <AiFillStar className="text-rating text-sm" />
                                            <AiFillStar className="text-rating text-sm" />
                                            <AiFillStar className="text-rating text-sm" />
                                            <AiFillStar className="text-gray-300 text-sm" />
                                        </div>
                                        <div class="w-full bg-gray-200 rounded-full h-2 mt-1">
                                            <div
                                                class="bg-heading-border h-2 rounded-full"
                                                style={{ width: "25%" }}
                                            ></div>
                                        </div>
                                        <div>25%</div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex">
                                            <AiFillStar className="text-rating text-sm" />
                                            <AiFillStar className="text-rating text-sm" />
                                            <AiFillStar className="text-gray-300 text-sm" />
                                            <AiFillStar className="text-gray-300 text-sm" />
                                            <AiFillStar className="text-gray-300 text-sm" />
                                        </div>
                                        <div class="w-full bg-gray-200 rounded-full h-2 mt-1">
                                            <div
                                                class="bg-heading-border h-2 rounded-full"
                                                style={{ width: "15%" }}
                                            ></div>
                                        </div>
                                        <div>15%</div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex">
                                            <AiFillStar className="text-rating text-sm" />
                                            <AiFillStar className="text-gray-300 text-sm" />
                                            <AiFillStar className="text-gray-300 text-sm" />
                                            <AiFillStar className="text-gray-300 text-sm" />
                                            <AiFillStar className="text-gray-300 text-sm" />
                                        </div>
                                        <div class="w-full bg-gray-200 rounded-full h-2 mt-1">
                                            <div
                                                class="bg-heading-border h-2 rounded-full"
                                                style={{ width: "10%" }}
                                            ></div>
                                        </div>
                                        <div>10%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <div className="flex gap-4">
                                    <div className="avater">
                                        <Image
                                            src="/assets/images/testimonial/t1.png"
                                            alt="user image"
                                            width="200"
                                            height="200"
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl">
                                            John Deo
                                        </h4>
                                        <p className="text-sm mt-2">
                                            5 Minutes Ago
                                        </p>
                                        <div className="flex gap-4 mt-4">
                                            <AiFillStar className="text-rating text-sm" />
                                            <AiFillStar className="text-rating text-sm" />
                                            <AiFillStar className="text-rating text-sm" />
                                            <AiFillStar className="text-rating text-sm" />
                                            <AiFillStar className="text-rating text-sm" />
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-sm">
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Cupiditate eligendi, ratione
                                                enim possimus pariatur autem
                                                quisquam distinctio fugiat sint
                                                voluptates dolor veniam quas.
                                                Velit, deserunt! Fugiat ullam
                                                rem praesentium mollitia aliquid
                                                commodi blanditiis explicabo,
                                                placeat velit eaque, repellat
                                                libero neque maiores,
                                                repellendus sequi voluptates
                                                culpa sunt illum dolorum amet
                                                labore!
                                            </p>
                                            <p className="text-sm">
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Cupiditate eligendi, ratione
                                                enim possimus pariatur autem
                                                quisquam distinctio fugiat sint
                                                voluptates dolor veniam quas.
                                                Velit, deserunt! Fugiat ullam
                                                rem praesentium mollitia aliquid
                                                commodi blanditiis explicabo,
                                                placeat velit eaque, repellat
                                                libero neque maiores,
                                                repellendus sequi voluptates
                                                culpa sunt illum dolorum amet
                                                labore!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={open === "faq" ? "block" : "hidden"}>
                            <div className="w-1/2">
                                <Accordion
                                    title="How can I order from Beekolpo"
                                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, impedit!"
                                />
                                <Accordion
                                    title="How can I order from Beekolpo"
                                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, impedit!"
                                />
                                <Accordion
                                    title="How can I order from Beekolpo"
                                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, impedit!"
                                />
                                <Accordion
                                    title="How can I order from Beekolpo"
                                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, impedit!"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-3/12 bg-gray-200">
                    <h3 className="text-lg uppercase text-center font-bold p-4">
                        top rated product
                    </h3>
                    <div className="border-b-2 border-gray-500 my-2"></div>
                    <div className="grid grid-cols-1 p-4 gap-4">
                        <GridProduct />
                        <GridProduct />
                        <GridProduct />
                        <GridProduct />
                        <GridProduct />
                        <GridProduct />
                        <GridProduct />
                        <GridProduct />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
