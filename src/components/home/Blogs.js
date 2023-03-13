import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsShare } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import Slider from "react-slick";
import BrowseMoreBtn from "../buttons/BrowseMoreBtn";

const Blogs = () => {
    const settings = {
        infinite: true,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="container pb-4">
            <div className="flex items-center justify-between mt-4">
                <h3 className="text-2xl font-bold">Blogs</h3>

                <BrowseMoreBtn link="3" text="Browse All" />
            </div>
            <Slider {...settings} className="space-x-2 py-8 blog-slider">
                <div>
                    <Image
                        src="/assets/images/blog/b1.png"
                        width={350}
                        height={350}
                        alt="Blog Image One"
                        className="rounded"
                    />
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                            <p className="text-sm">Rating: 4.5</p>
                            <div className="rating-star flex ml-4">
                                <AiFillStar className="text-rating text-sm" />
                                <AiFillStar className="text-rating text-sm" />
                                <AiFillStar className="text-rating text-sm" />
                                <AiFillStar className="text-rating text-sm" />
                                <AiFillStar className="text-rating text-sm" />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="relative">
                                <FiMessageSquare className="text-lg" />
                                <span className="absolute -top-2 -right-2 text-white text-[10px] bg-secondary px-1 rounded-full">
                                    2
                                </span>
                            </div>
                            <BsShare className="text-md" />
                        </div>
                    </div>
                    <h4 className="font-bold text-xl my-3">
                        How to order from Beekolpo
                    </h4>
                    <p className="text-md mb-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                    </p>
                    <Link href="#" className="text-secondary text-sm">
                        Continue Reading....
                    </Link>
                </div>
                <div>
                    <Image
                        src="/assets/images/blog/b2.png"
                        width={350}
                        height={350}
                        alt="Blog Image One"
                        className="rounded"
                    />
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                            <p className="text-sm">Rating: 4.5</p>
                            <div className="rating-star flex ml-4">
                                <AiFillStar className="text-rating text-sm" />
                                <AiFillStar className="text-rating text-sm" />
                                <AiFillStar className="text-rating text-sm" />
                                <AiFillStar className="text-rating text-sm" />
                                <AiFillStar className="text-rating text-sm" />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="relative">
                                <FiMessageSquare className="text-lg" />
                                <span className="absolute -top-2 -right-2 text-white text-[10px] bg-secondary px-1 rounded-full">
                                    2
                                </span>
                            </div>
                            <BsShare className="text-md" />
                        </div>
                    </div>
                    <h4 className="font-bold text-xl my-3">
                        How to order from Beekolpo
                    </h4>
                    <p className="text-md mb-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                    </p>
                    <Link href="#" className="text-secondary text-sm">
                        Continue Reading....
                    </Link>
                </div>
                <div>
                    <Image
                        src="/assets/images/blog/b2.png"
                        width={350}
                        height={350}
                        alt="Blog Image One"
                        className="rounded"
                    />
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                            <p className="text-sm">Rating: 4.5</p>
                            <div className="rating-star flex ml-4">
                                <AiFillStar className="text-rating text-sm" />
                                <AiFillStar className="text-rating text-sm" />
                                <AiFillStar className="text-rating text-sm" />
                                <AiFillStar className="text-rating text-sm" />
                                <AiFillStar className="text-rating text-sm" />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="relative">
                                <FiMessageSquare className="text-lg" />
                                <span className="absolute -top-2 -right-2 text-white text-[10px] bg-secondary px-1 rounded-full">
                                    2
                                </span>
                            </div>
                            <BsShare className="text-md" />
                        </div>
                    </div>
                    <h4 className="font-bold text-xl my-3">
                        How to order from Beekolpo
                    </h4>
                    <p className="text-md mb-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                    </p>
                    <Link href="#" className="text-secondary text-sm">
                        Continue Reading....
                    </Link>
                </div>
                <div>
                    <Image
                        src="/assets/images/blog/b1.png"
                        width={350}
                        height={350}
                        alt="Blog Image One"
                        className="rounded"
                    />
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                            <p className="text-sm">Rating: 4.5</p>
                            <div className="rating-star flex ml-4">
                                <AiFillStar className="text-rating text-sm" />
                                <AiFillStar className="text-rating text-sm" />
                                <AiFillStar className="text-rating text-sm" />
                                <AiFillStar className="text-rating text-sm" />
                                <AiFillStar className="text-rating text-sm" />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="relative">
                                <FiMessageSquare className="text-lg" />
                                <span className="absolute -top-2 -right-2 text-white text-[10px] bg-secondary px-1 rounded-full">
                                    2
                                </span>
                            </div>
                            <BsShare className="text-md" />
                        </div>
                    </div>
                    <h4 className="font-bold text-xl my-3">
                        How to order from Beekolpo
                    </h4>
                    <p className="text-md mb-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                    </p>
                    <Link href="#" className="text-secondary text-sm">
                        Continue Reading....
                    </Link>
                </div>
                <div>
                    <Image
                        src="/assets/images/blog/b2.png"
                        width={350}
                        height={350}
                        alt="Blog Image One"
                        className="rounded"
                    />
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                            <p className="text-sm">Rating: 4.5</p>
                            <div className="rating-star flex ml-4">
                                <AiFillStar className="text-rating text-sm" />
                                <AiFillStar className="text-rating text-sm" />
                                <AiFillStar className="text-rating text-sm" />
                                <AiFillStar className="text-rating text-sm" />
                                <AiFillStar className="text-rating text-sm" />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="relative">
                                <FiMessageSquare className="text-lg" />
                                <span className="absolute -top-2 -right-2 text-white text-[10px] bg-secondary px-1 rounded-full">
                                    2
                                </span>
                            </div>
                            <BsShare className="text-md" />
                        </div>
                    </div>
                    <h4 className="font-bold text-xl my-3">
                        How to order from Beekolpo
                    </h4>
                    <p className="text-md mb-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                    </p>
                    <Link href="#" className="text-secondary text-sm">
                        Continue Reading....
                    </Link>
                </div>
            </Slider>
        </div>
    );
};

export default Blogs;
