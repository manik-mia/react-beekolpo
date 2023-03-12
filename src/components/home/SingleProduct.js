import Image from "next/image";
import React from "react";

const SingleProduct = () => {
    return (
        <div className="bg-[url('/assets/images/bg/single-bg.png')] bg-center bg-cover bg-no-repeat">
            <div className="container grid grid-cols-2 gap-8">
                <div className="content py-6">
                    <h2 className="text-3xl font-bold">New Style Fashion</h2>
                    <p className="text-sm w-5/6 mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate repudiandae rem deserunt fuga quas nobis quasi
                        deleniti magni nam sapiente, distinctio exercitationem
                        consequuntur, vero amet adipisci suscipit ex blanditiis
                        eius assumenda tempore
                    </p>
                    <div className="flex my-4">
                        <h4>
                            <span className="font-bold text-xl">৳ 450.00</span>৳
                            550.00
                        </h4>
                        <button className="ml-8 rounded-3xl bg-primary text-white text-sm py-1 px-2">
                            Add To Cart
                        </button>
                    </div>
                    <p className="text-sm mt-4 text-primary">
                        * This product of the day. wear soft and stay
                        fashionable
                    </p>
                </div>
                <div className="relative overflow-hidden">
                    <Image
                        src="/assets/images/product-rect-2.png"
                        alt="Rectangle Product"
                        width={300}
                        height={300}
                        className="absolute top-0 left-4 z-10"
                    />
                    <Image
                        src="/assets/images/product-rect.png"
                        alt="Rectangle Product"
                        width={300}
                        height={300}
                        className="absolute top-0 left-40"
                    />
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
