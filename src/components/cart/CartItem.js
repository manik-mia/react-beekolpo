import React from "react";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";
const CartItem = ({ cart }) => {
    return (
        <div className="flex justify-between items-center p-4 bg-gray-100 rounded mt-1">
            <div className="flex items-center gap-4 w-6/12">
                <input
                    type="checkbox"
                    class=" checked:bg-primary"
                    name="product-id"
                    id="product-id"
                />
                <Image
                    src={cart.image}
                    alt="product image"
                    width="50"
                    height="50"
                />
                <div className="">
                    <p className="text-sm text-black">
                        Product Code/SKU: {cart.product_code}
                    </p>
                    <h4 className="text-md font-bold text-black">
                        {cart.name}
                    </h4>
                </div>
            </div>
            <div className="w-1/12"> TK {cart.price}</div>
            <div className="w-2/12 flex gap-4">
                <button
                    type="button"
                    className="bg-gray-300 w-8 h-8 rounded"
                    disabled={cart.qty <= 1 ? true : false}
                >
                    -
                </button>
                {cart.qty}
                <button type="button" className="bg-gray-300 w-8 h-8 rounded">
                    +
                </button>
            </div>
            <div className="w-1/12">TK {cart.qty * cart.price}</div>
            <div className="w-2/12 text-right">
                <button className="text-lg mx-auto bg-red-600 text-white p-1 rounded-md">
                    <RxCross1 />
                </button>
            </div>
        </div>
    );
};

export default CartItem;
