import React from "react";
import { BsBell } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

const HeaderCart = () => {
    return (
        <div className="flex space-x-4">
            <a
                href="#"
                className="item relative bg-gray-100 rounded-full p-2 h-max"
            >
                <BsBell size="20" />
                <span className="absolute -top-2 -right-2 text-xs bg-primary w-5 h-5 text-center text-white rounded-full">
                    13
                </span>
            </a>
            <a href="#" className="item bg-gray-100 rounded-full p-2 h-max">
                <AiOutlineHeart size="20" />
            </a>
            <a
                href="#"
                className="item relative bg-gray-100 rounded-full p-2 h-max"
            >
                <AiOutlineShoppingCart size="20" />
                <span className="absolute -top-2 -right-2 text-xs bg-primary w-5 h-5 text-center text-white rounded-full">
                    13
                </span>
            </a>
            <div className="item">
                <p className="font-bold text-sm mb-0">My Cart</p>
                <span className="text-xs bg-primary-light">12,85,850 BDT</span>
            </div>
        </div>
    );
};

export default HeaderCart;
