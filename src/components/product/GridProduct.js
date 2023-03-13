import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import BtnFull from "../buttons/BtnFull";
const GridProduct = () => {
    return (
        <div className="relative bg-white p-4 rounded-md border-2 border-transparent transition-all duration-500 custom-drop-shadow hover:border-primary hover:border-2 overflow-hidden">
            <Link href="/product-details">
                <Image
                    src="/assets/images/products/p1.png"
                    height={300}
                    width={300}
                    alt="Product 1"
                    className="bg-primary-light rounded-md hover:scale-105 transition duration-300"
                />
            </Link>
            <span className="badge absolute top-6 left-6 bg-white text-primary p-2 text-xs rounded-full border-primary border hover:bg-primary hover:text-white transition duration-300 ease-in">
                <AiFillHeart size={26} />
            </span>

            <div className="product-content mt-4">
                <h3 className="text-xl font-bold text-text-primary">
                    <Link href="/product-details">Product Name Goes here</Link>
                </h3>
                <div className="flex items-center justify-between mt-4">
                    <h5 className="text-lg font-bold">
                        ৳ 500 <span className="text-sm">/ pcs</span>
                    </h5>
                    <p className="text-lg font-bold text-[#F60000]">10% OFF</p>
                    <p className="text-md line-through">৳ 550</p>
                </div>

                <div className="mt-4">
                    <BtnFull
                        text="ADD TO CART"
                        className="rounded-xl bg-primary"
                    />
                </div>
            </div>
        </div>
    );
};

export default GridProduct;
