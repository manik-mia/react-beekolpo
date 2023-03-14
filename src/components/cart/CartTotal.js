import React, { useState } from "react";
import BtnFull from "../buttons/BtnFull";
import { RxCrossCircled } from "react-icons/rx";
const CartTotal = ({ text }) => {
    const [totalAmount, setTotalAmount] = useState(25000);
    const [promoCode, setPromoCode] = useState();
    const [discount, setDiscount] = useState(null);
    const handlePromoCode = () => {
        setPromoCode("");
        setTotalAmount(totalAmount - totalAmount * 0.1);
        setDiscount(totalAmount * 0.1);
    };
    const handleRemovePromoCode = () => {
        setDiscount("");
        setTotalAmount(25000);
    };
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
                    <p>Total Amount</p>
                    <p>TK 25000</p>
                </div>
                {!discount && (
                    <div className="flex gap-4">
                        <input
                            type="text"
                            className="w-3/4 items-center p-3  text-sm rounded bg-gray-300 outline-none border-none transition-all duration-200 focus:outline-none focus:border-primary focus:border focus:bg-white"
                            name="discount"
                            placeholder="Your Promo Code"
                            onChange={(e) => setPromoCode(e.target.value)}
                        />
                        <button
                            type="button"
                            className="w-1/4 text-primary"
                            onClick={handlePromoCode}
                        >
                            Apply Now
                        </button>
                    </div>
                )}
                {discount && (
                    <div className="flex justify-between my-2">
                        <p>Discount</p>
                        <p className="flex items-center">
                            TK {discount.toFixed(2)}
                            <button
                                className="ml-4 text-red-500"
                                onClick={handleRemovePromoCode}
                            >
                                <RxCrossCircled size={20} />
                            </button>
                        </p>
                    </div>
                )}
            </div>

            <div className="border-b w-full border-primary-light mt-3"></div>
            <div className="p-4 uppercase">
                <div className="flex text-lg justify-between mb-3  font-bold">
                    <p>Pay Now</p>
                    <p>TK {totalAmount.toFixed(2)}</p>
                </div>
                <BtnFull text={text} className="uppercase bg-primary rounded" />
            </div>
        </div>
    );
};

export default CartTotal;
