import Image from "next/image";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import React from "react";
import Slider from "react-slick";
const TestSlider = () => {
    return (
        <div className="overflow-hidden">
            <h2> Single Item</h2>
            <Glider draggable hasArrows slidesToShow={6} slidesToScroll={1}>
                <Image
                    src="/assets/images/products/p1.png"
                    width="150"
                    height={150}
                    alt="product image"
                    className="mx-2"
                />
                <Image
                    src="/assets/images/products/p1.png"
                    width="150"
                    height={150}
                    alt="product image"
                    className="mx-2"
                />
                <Image
                    src="/assets/images/products/p1.png"
                    width="150"
                    height={150}
                    alt="product image"
                    className="mx-2"
                />
                <Image
                    src="/assets/images/products/p1.png"
                    width="150"
                    height={150}
                    alt="product image"
                    className="mx-2"
                />
                <Image
                    src="/assets/images/products/p1.png"
                    width="150"
                    height={150}
                    alt="product image"
                    className="mx-2"
                />
                <Image
                    src="/assets/images/products/p1.png"
                    width="150"
                    height={150}
                    alt="product image"
                    className="mx-2"
                />
                <Image
                    src="/assets/images/products/p1.png"
                    width="150"
                    height={150}
                    alt="product image"
                    className="mx-2"
                />
                <Image
                    src="/assets/images/products/p1.png"
                    width="150"
                    height={150}
                    alt="product image"
                    className="mx-2"
                />
                <Image
                    src="/assets/images/products/p1.png"
                    width="150"
                    height={150}
                    alt="product image"
                    className="mx-2"
                />
                <Image
                    src="/assets/images/products/p1.png"
                    width="150"
                    height={150}
                    alt="product image"
                    className="mx-2"
                />
                <Image
                    src="/assets/images/products/p1.png"
                    width="150"
                    height={150}
                    alt="product image"
                    className="mx-2"
                />
                <Image
                    src="/assets/images/products/p1.png"
                    width="150"
                    height={150}
                    alt="product image"
                    className="mx-2"
                />
                <Image
                    src="/assets/images/products/p1.png"
                    width="150"
                    height={150}
                    alt="product image"
                    className="mx-2"
                />
            </Glider>
        </div>
    );
};

export default TestSlider;
