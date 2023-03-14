import BtnFull from "@/components/buttons/BtnFull";
import CartTotal from "@/components/cart/CartTotal";
import Input from "@/components/inputs/Input";
import Select from "@/components/inputs/Select";
import Textarea from "@/components/inputs/Textarea";
import OrderStep from "@/components/OrderStep";
import Image from "next/image";
import React, { useState } from "react";

const Payment = () => {
    const [gateway, setGatway] = useState("");
    const handleGateway = (value) => {
        setGatway(value);
    };
    const paymentGateways = [
        {
            id: 1,
            name: "bkash",
            image: "/assets/images/payment/bkash.png",
        },
        {
            id: 1,
            name: "nagad",
            image: "/assets/images/payment/nagad.png",
        },
        {
            id: 1,
            name: "rocket",
            image: "/assets/images/payment/rocket.png",
        },
        {
            id: 1,
            name: "visacard",
            image: "/assets/images/payment/visacard.png",
        },
        {
            id: 1,
            name: "master-card",
            image: "/assets/images/payment/master-card.png",
        },
    ];
    return (
        <>
            <div className="bg-gray-100">
                <div className="container">
                    <OrderStep step1 step2 step3 />
                </div>
            </div>
            <form action="">
                <div className="container">
                    <h2 className="text-2xl font-semibold my-4">
                        Choose Your Payment Method
                    </h2>
                </div>
                <div className="container flex my-4 gap-8">
                    <div className="w-2/3">
                        <div className="grid grid-cols-2 gap-4">
                            {paymentGateways &&
                                paymentGateways.map((item) => (
                                    <label
                                        htmlFor={item.name}
                                        className={`flex items-center justify-center w-full h-20 cursor-pointer border-dashed border-2  p-2 rounded-md ${
                                            gateway === item.name
                                                ? "border-primary"
                                                : "border-gray-200"
                                        }`}
                                        key={item.id}
                                    >
                                        <input
                                            type="radio"
                                            name="payment_gateway"
                                            id={item.name}
                                            className="hidden"
                                            value={item.name}
                                            onChange={() =>
                                                handleGateway(item.name)
                                            }
                                        />
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={120}
                                            height={50}
                                        />
                                    </label>
                                ))}
                        </div>
                    </div>
                    <div className="w-2/3">
                        <CartTotal text="Pay Now" applyCoupon />
                    </div>
                </div>
            </form>
        </>
    );
};

export default Payment;
