import BtnFull from "@/components/buttons/BtnFull";
import OrderStep from "@/components/OrderStep";
import React from "react";

const OrderPlaced = () => {
    return (
        <>
            <div className="bg-gray-100">
                <div className="container">
                    <OrderStep step1 step2 step3 step4 />
                </div>
            </div>
            <div className="bg-primary-light py-4">
                <div className="container">
                    <div className="w-2/3 mx-auto px-4 py-8 border-2 border-primary border-dotted rounded-md text-center">
                        <button className="text-md bg-black text-white uppercase py-2 px-6 rounded-full mb-2">
                            Order Complete
                        </button>
                        <h2 className="text-primary font-bold text-2xl">
                            Thank You John Deo! Your order has been received
                        </h2>
                        <p className="mt-2 text-md">
                            A copy of order has been sent to example@mail.com
                        </p>
                        <p className="mt-1 text-md">
                            Call us 9:00 AM - 7 PM for any information
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderPlaced;
