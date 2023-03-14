import React from "react";
import BtnFull from "../buttons/BtnFull";

const CartTotal = ({ text }) => {
    return (
        <div className="rounded-md bg-gray-200 py-4">
            <div className="px-4 space-y-4">
                <h2 className="font-bold text-lg">Cart Total</h2>
                <div className="flex justify-between font-semibold">
                    <p>Product Items</p>
                    <p>8</p>
                </div>
                <div className="flex justify-between font-semibold">
                    <p>Product Quantity</p>
                    <p>25</p>
                </div>
                <div className="flex justify-between font-semibold">
                    <p>Total Price</p>
                    <p>TK 958755</p>
                </div>
            </div>
            <div className="border-b w-full border-gray-200 mt-3"></div>
            <div className="p-4 uppercase">
                <div className="flex justify-between mb-3">
                    <p>Pay Now</p>
                    <p>TK 958755</p>
                </div>
                <BtnFull text={text} className="uppercase bg-primary rounded" />
            </div>
        </div>
    );
};

export default CartTotal;
