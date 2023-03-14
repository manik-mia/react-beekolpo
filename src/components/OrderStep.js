import React from "react";

const OrderStep = ({ step1, step2, step3, step4 }) => {
    return (
        <div className="py-10 w-9/12 mx-auto">
            <div className="flex gap-1">
                <div className="flex flex-col justify-center items-center w-1/4">
                    <h5
                        className={`relative flex items-center justify-center rounded-full  border-2  px-[14px] py-[6px] after:absolute after:top-[15px] after:left-[37px] after:content-[''] after:w-[198px]  after:h-2  ${
                            step1
                                ? "bg-primary border-primary text-white after:bg-primary"
                                : "border-primary-light after:bg-primary-light"
                        }`}
                    >
                        1
                    </h5>

                    <p className="mt-2 uppercase">Shopping Cart</p>
                </div>
                <div className="flex flex-col justify-center items-center w-1/4">
                    <h5
                        className={`relative flex items-center justify-center rounded-full  border-2  px-[14px] py-[6px] after:absolute after:top-[15px] after:left-[37px] after:content-[''] after:w-[198px]  after:h-2  ${
                            step2
                                ? "bg-primary border-primary text-white after:bg-primary"
                                : "border-primary-light after:bg-primary-light"
                        }`}
                    >
                        2
                    </h5>

                    <p className="mt-2 uppercase">checkout</p>
                </div>

                <div className="flex flex-col justify-center items-center w-1/4">
                    <h5
                        className={`relative flex items-center justify-center rounded-full  border-2  px-[14px] py-[6px] after:absolute after:top-[15px] after:left-[37px] after:content-[''] after:w-[198px]  after:h-2  ${
                            step3
                                ? "bg-primary border-primary text-white after:bg-primary"
                                : "border-primary-light after:bg-primary-light"
                        }`}
                    >
                        2
                    </h5>

                    <p className="mt-2 uppercase">payment</p>
                </div>

                <div className="flex flex-col justify-center items-center w-1/4">
                    <h5
                        className={`relative flex items-center justify-center rounded-full  border-2  px-[14px] py-[6px] ${
                            step4
                                ? "bg-primary border-primary text-white "
                                : "border-primary-light "
                        }`}
                    >
                        2
                    </h5>

                    <p className="mt-2 uppercase">order confirmed</p>
                </div>
            </div>
        </div>
    );
};

export default OrderStep;
