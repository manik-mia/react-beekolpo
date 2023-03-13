import React from "react";
import OrderStep from "@/components/OrderStep";
import CartItem from "@/components/cart/CartItem";
import CartTotal from "@/components/cart/CartTotal";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import { VscDebugRestart } from "react-icons/vsc";

const CartPage = () => {
    const carts = [
        {
            id: 1,
            name: "Brand New Watch From Italy",
            product_code: "ID-25455",
            image: "/assets/images/products/p1.png",
            price: 450,
            qty: 1,
        },
        {
            id: 2,
            name: "Brand Bew Bag From UK",
            product_code: "ID-25455",
            image: "/assets/images/products/p1.png",
            price: 550,
            qty: 1,
        },

        {
            id: 3,
            name: "Brand New Smart Watch From Australia",
            product_code: "ID-25455",
            image: "/assets/images/products/p1.png",
            price: 500,
            qty: 1,
        },
    ];
    return (
        <>
            <div className="bg-gray-100">
                <div className="container">
                    <OrderStep step1 />
                </div>
            </div>
            <div className="container mt-4">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-4/6">
                        <form action="">
                            <div className="flex justify-between p-4 bg-gray-100 rounded mb-2 text-sm">
                                <div className="flex items-center gap-4 w-6/12">
                                    <input
                                        type="checkbox"
                                        class=" checked:bg-primary"
                                        name="all"
                                        id="all"
                                    />
                                    <label htmlFor="all" className="">
                                        All items(3)
                                    </label>
                                </div>
                                <div className="w-1/12">Unit Price</div>
                                <div className="w-2/12">Quantity</div>
                                <div className="w-1/12">Final Price</div>
                                <div className="w-2/12 text-right">
                                    Remove All
                                </div>
                            </div>
                            {carts &&
                                carts.map((cart) => (
                                    <CartItem cart={cart} key={cart.id} />
                                ))}
                        </form>
                        <div className="flex items-center justify-between my-4">
                            <Link
                                href="/"
                                className="flex items-center gap-2 p-2 rounded-sm uppercase bg-primary-light text-sm"
                            >
                                <BiArrowBack />
                                <span>Continue Shopping</span>
                            </Link>
                            <Link
                                href="/"
                                className="flex items-center gap-2 p-2 rounded-sm uppercase bg-primary-light text-sm"
                            >
                                <VscDebugRestart />
                                <span>Update Cart</span>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-2/6">
                        <CartTotal text="next to checkout" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartPage;
