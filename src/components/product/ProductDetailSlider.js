import Image from "next/image";
import React, { useState } from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";
const images = [
    "/assets/images/products/p1.png",
    "/assets/images/products/p2.png",
    "/assets/images/products/p1.png",
    "/assets/images/products/p2.png",
    "/assets/images/products/p1.png",
    "/assets/images/products/p2.png",
    "/assets/images/products/p1.png",
    "/assets/images/products/p2.png",
    "/assets/images/products/p1.png",
    "/assets/images/products/p2.png",
    "/assets/images/products/p1.png",
    "/assets/images/products/p2.png",
    "/assets/images/products/p1.png",
];
const ProductDetailSlider = () => {
    const [mainImage, setMainImage] = useState(images[0]);

    return (
        <div>
            <Image
                src={mainImage}
                alt="product name"
                width="500"
                height="500"
            />
            <div className="mt-2">
                <Glider draggable hasArrows slidesToShow={6} slidesToScroll={3}>
                    {images &&
                        images.map((item, index) => (
                            <Image
                                src={item}
                                key={index}
                                width={100}
                                height={100}
                                alt="Product Image"
                                className="mx-1"
                                onClick={() => setMainImage(item)}
                            />
                        ))}
                </Glider>
            </div>
        </div>
    );
};

export default ProductDetailSlider;
