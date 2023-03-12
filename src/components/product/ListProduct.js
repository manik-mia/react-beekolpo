import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsCartPlusFill } from "react-icons/bs";
const ListProduct = () => {
    return (
        <div className="flex gap-4 bg-white p-4 rounded border border-transparent transition-all duration-500 hover:border hover:border-primary hover:shadow-xl group">
            <Image
                src="/assets/images/products/p1.png"
                height={150}
                width={150}
                alt="Product 1"
                className="w-5/12  bg-primary-light hover:scale-105 transition duration-300 rounded-md"
            />

            <div className="w-7/12">
                <h3 className="text-md font-bold text-text-primary">
                    <Link href="/product-details">Product Name Goes here</Link>
                </h3>
                <p className="text-justify mt-2 text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <div className="flex items-center justify-between mt-2 p-2 border-2 border-primary rounded-md">
                    <h5 className="text-sm font-bold">
                        ৳ 500 <span className="text-sm">/ pcs</span>
                    </h5>
                    <p className="text-sm font-bold text-[#F60000]">10% OFF</p>
                    <p className="text-xs line-through">৳ 550</p>
                </div>
                <div className="flex gap-4 mt-4">
                    <button
                        type="submit"
                        className="flex gap-2 items-center justify-center bg-primary w-full text-white py-1 rounded-md"
                    >
                        <BsCartPlusFill />
                        <span className="text-sm">ADD TO CART</span>
                    </button>
                    <span className="bg-white text-primary p-1 text-xs rounded-full border-primary border hover:bg-primary hover:text-white transition duration-300 ease-in">
                        <AiFillHeart size={26} />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ListProduct;
