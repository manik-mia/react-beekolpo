import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import React from "react";
import Slider from "react-slick";
const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
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
        <div className="bg-[url('/assets/images/bg/testimonial-bg.png')] bg-center bg-cover bg-no-repeat overflow-hidden testimonial">
            <div className="container py-8">
                <div className="py-2 mx-4">
                    <h2 className="text-2xl font-semibold">
                        Our Happy Client Feedbacks
                    </h2>
                    <p className="text-md w-1/2 mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate repudiandae rem deserunt fuga quas nobis quasi
                        deleniti magni nam sapiente.
                    </p>
                </div>
                <Slider {...settings} className="space-x-2 py-8">
                    <div className="bg-white rounded-md p-8">
                        <div className="flex">
                            <Image
                                src="/assets/images/testimonial/t1.png"
                                width={80}
                                height={80}
                                alt="Testimonial Persion"
                            />
                            <div className="ml-4">
                                <h4 className="text-md font-semibold">
                                    John Duo
                                </h4>
                                <p className="text-sm">CEO</p>
                                <div className="rating-star flex mt-2">
                                    <AiFillStar className="text-rating text-sm" />
                                    <AiFillStar className="text-rating text-sm" />
                                    <AiFillStar className="text-rating text-sm" />
                                    <AiFillStar className="text-rating text-sm" />
                                    <AiFillStar className="text-rating text-sm" />
                                </div>
                            </div>
                        </div>
                        <p className="text-justify text-sm mt-2">
                            Mega Dhaka is a sit amet, consectetur adipiscing
                            elit. Non velit convallis lectus vel fames varius
                            viverra risus imperdiet. Urna, elementum bibendum
                            amet diam habitant. Non velit convallis lectus vel
                            fames varius viverra risus imperdiet. Urna, elementu
                            be habitant.
                        </p>
                    </div>
                    <div className="bg-white rounded-md p-8">
                        <div className="flex">
                            <Image
                                src="/assets/images/testimonial/t1.png"
                                width={80}
                                height={80}
                                alt="Testimonial Persion"
                            />
                            <div className="ml-4">
                                <h4 className="text-md font-semibold">
                                    John Duo
                                </h4>
                                <p className="text-sm">CEO</p>
                                <div className="rating-star flex mt-2">
                                    <AiFillStar className="text-rating text-sm" />
                                    <AiFillStar className="text-rating text-sm" />
                                    <AiFillStar className="text-rating text-sm" />
                                    <AiFillStar className="text-rating text-sm" />
                                    <AiFillStar className="text-rating text-sm" />
                                </div>
                            </div>
                        </div>
                        <p className="text-justify text-sm mt-2">
                            Mega Dhaka is a sit amet, consectetur adipiscing
                            elit. Non velit convallis lectus vel fames varius
                            viverra risus imperdiet. Urna, elementum bibendum
                            amet diam habitant. Non velit convallis lectus vel
                            fames varius viverra risus imperdiet. Urna, elementu
                            be habitant.
                        </p>
                    </div>
                    <div className="bg-white rounded-md p-8">
                        <div className="flex">
                            <Image
                                src="/assets/images/testimonial/t1.png"
                                width={80}
                                height={80}
                                alt="Testimonial Persion"
                            />
                            <div className="ml-4">
                                <h4 className="text-md font-semibold">
                                    John Duo
                                </h4>
                                <p className="text-sm">CEO</p>
                                <div className="rating-star flex mt-2">
                                    <AiFillStar className="text-rating text-sm" />
                                    <AiFillStar className="text-rating text-sm" />
                                    <AiFillStar className="text-rating text-sm" />
                                    <AiFillStar className="text-rating text-sm" />
                                    <AiFillStar className="text-rating text-sm" />
                                </div>
                            </div>
                        </div>
                        <p className="text-justify text-sm mt-2">
                            Mega Dhaka is a sit amet, consectetur adipiscing
                            elit. Non velit convallis lectus vel fames varius
                            viverra risus imperdiet. Urna, elementum bibendum
                            amet diam habitant. Non velit convallis lectus vel
                            fames varius viverra risus imperdiet. Urna, elementu
                            be habitant.
                        </p>
                    </div>
                    <div className="bg-white rounded-md p-8">
                        <div className="flex">
                            <Image
                                src="/assets/images/testimonial/t1.png"
                                width={80}
                                height={80}
                                alt="Testimonial Persion"
                            />
                            <div className="ml-4">
                                <h4 className="text-md font-semibold">
                                    John Duo
                                </h4>
                                <p className="text-sm">CEO</p>
                                <div className="rating-star flex mt-2">
                                    <AiFillStar className="text-rating text-sm" />
                                    <AiFillStar className="text-rating text-sm" />
                                    <AiFillStar className="text-rating text-sm" />
                                    <AiFillStar className="text-rating text-sm" />
                                    <AiFillStar className="text-rating text-sm" />
                                </div>
                            </div>
                        </div>
                        <p className="text-justify text-sm mt-2">
                            Mega Dhaka is a sit amet, consectetur adipiscing
                            elit. Non velit convallis lectus vel fames varius
                            viverra risus imperdiet. Urna, elementum bibendum
                            amet diam habitant. Non velit convallis lectus vel
                            fames varius viverra risus imperdiet. Urna, elementu
                            be habitant.
                        </p>
                    </div>
                    <div className="bg-white rounded-md p-8">
                        <div className="flex">
                            <Image
                                src="/assets/images/testimonial/t1.png"
                                width={80}
                                height={80}
                                alt="Testimonial Persion"
                            />
                            <div className="ml-4">
                                <h4 className="text-md font-semibold">
                                    John Duo
                                </h4>
                                <p className="text-sm">CEO</p>
                                <div className="rating-star flex mt-2">
                                    <AiFillStar className="text-rating text-sm" />
                                    <AiFillStar className="text-rating text-sm" />
                                    <AiFillStar className="text-rating text-sm" />
                                    <AiFillStar className="text-rating text-sm" />
                                    <AiFillStar className="text-rating text-sm" />
                                </div>
                            </div>
                        </div>
                        <p className="text-justify text-sm mt-2">
                            Mega Dhaka is a sit amet, consectetur adipiscing
                            elit. Non velit convallis lectus vel fames varius
                            viverra risus imperdiet. Urna, elementum bibendum
                            amet diam habitant. Non velit convallis lectus vel
                            fames varius viverra risus imperdiet. Urna, elementu
                            be habitant.
                        </p>
                    </div>
                    <div className="bg-white rounded-md p-8">
                        <div className="flex">
                            <Image
                                src="/assets/images/testimonial/t1.png"
                                width={80}
                                height={80}
                                alt="Testimonial Persion"
                            />
                            <div className="ml-4">
                                <h4 className="text-md font-semibold">
                                    John Duo
                                </h4>
                                <p className="text-sm">CEO</p>
                                <div className="rating-star flex mt-2">
                                    <AiFillStar className="text-rating text-sm" />
                                    <AiFillStar className="text-rating text-sm" />
                                    <AiFillStar className="text-rating text-sm" />
                                    <AiFillStar className="text-rating text-sm" />
                                    <AiFillStar className="text-rating text-sm" />
                                </div>
                            </div>
                        </div>
                        <p className="text-justify text-sm mt-2">
                            Mega Dhaka is a sit amet, consectetur adipiscing
                            elit. Non velit convallis lectus vel fames varius
                            viverra risus imperdiet. Urna, elementum bibendum
                            amet diam habitant. Non velit convallis lectus vel
                            fames varius viverra risus imperdiet. Urna, elementu
                            be habitant.
                        </p>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Testimonial;
