import BtnFull from "@/components/buttons/BtnFull";
import CartTotal from "@/components/cart/CartTotal";
import Input from "@/components/inputs/Input";
import Select from "@/components/inputs/Select";
import Textarea from "@/components/inputs/Textarea";
import OrderStep from "@/components/OrderStep";
import React, { useRef, useState } from "react";

const Checkout = () => {
    const [hide, setHide] = useState(false);
    const checkbox = useRef();
    const handleAddressChange = () => {
        if (checkbox.current.checked) {
            setHide(true);
        } else {
            setHide(false);
        }
    };
    const countries = ["Bangladesh", "Australia", "Canada", "USA", "UK"];
    return (
        <>
            <div className="bg-gray-100">
                <div className="container">
                    <OrderStep step1 step2 />
                </div>
            </div>
            <form action="">
                <div className="container flex mt-4 gap-8 mb-4 md:mb-0">
                    <div className="w-full">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="w-full md:w-1/2">
                                <div className="flex  flex-col md:flex-row justify-between items-center">
                                    <h2 className="uppercase text-lg font-bold mb-2">
                                        Shipping address
                                    </h2>
                                    <div>
                                        <input
                                            type="checkbox"
                                            name=""
                                            id="same-address"
                                            onChange={handleAddressChange}
                                            ref={checkbox}
                                        />
                                        <label
                                            htmlFor="same-address"
                                            className="ml-2"
                                        >
                                            Shipping & Billing Address is same
                                        </label>
                                    </div>
                                </div>
                                <div className="flex justify-between gap-4">
                                    <div className="w-full">
                                        <Input
                                            id="first-name"
                                            name="first_name"
                                            placeholder="First Name *"
                                            type="text"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <Input
                                            id="last-name"
                                            name="last_name"
                                            placeholder="Last Name *"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <Input
                                    id="email"
                                    name="email"
                                    placeholder="Email Address *"
                                    type="email"
                                />
                                <Input
                                    id="phone"
                                    name="phone"
                                    placeholder="Phone Number *"
                                    type="text"
                                />
                                <Select
                                    name="country"
                                    id="country"
                                    data={countries}
                                />
                                <Input
                                    id="town"
                                    name="town"
                                    placeholder="Your Town/City *"
                                    type="text"
                                />
                                <Input
                                    id="state"
                                    name="state"
                                    placeholder="Your State *"
                                    type="text"
                                />
                                <Input
                                    id="address"
                                    name="address"
                                    placeholder="Your Address *"
                                    type="text"
                                />
                                <Input
                                    id="zip_code"
                                    name="zip_code"
                                    placeholder="Your Zip Code/Post Code *"
                                    type="text"
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                {!hide && (
                                    <>
                                        <h2 className="uppercase text-lg font-bold mb-2">
                                            Billing address
                                        </h2>
                                        <div className="flex justify-between gap-4">
                                            <div className="w-full">
                                                <Input
                                                    id="first-name"
                                                    name="first_name"
                                                    placeholder="First Name *"
                                                    type="text"
                                                />
                                            </div>
                                            <div className="w-full">
                                                <Input
                                                    id="last-name"
                                                    name="last_name"
                                                    placeholder="Last Name *"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <Input
                                            id="email"
                                            name="email"
                                            placeholder="Email Address *"
                                            type="email"
                                        />
                                        <Input
                                            id="phone"
                                            name="phone"
                                            placeholder="Phone Number *"
                                            type="text"
                                        />
                                        <Select
                                            name="country"
                                            id="country"
                                            data={countries}
                                        />
                                        <Input
                                            id="town"
                                            name="town"
                                            placeholder="Your Town/City *"
                                            type="text"
                                        />
                                        <Input
                                            id="state"
                                            name="state"
                                            placeholder="Your State *"
                                            type="text"
                                        />
                                        <Input
                                            id="address"
                                            name="address"
                                            placeholder="Your Address *"
                                            type="text"
                                        />
                                        <Input
                                            id="zip_code"
                                            name="zip_code"
                                            placeholder="Your Zip Code/Post Code *"
                                            type="text"
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="w-full">
                            <Textarea
                                id="notes"
                                name="notes"
                                placeholder="Your Notes"
                            />
                            <div className="w-1/2 mx-auto mb-4">
                                <BtnFull text="Procssed to pay" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Checkout;
