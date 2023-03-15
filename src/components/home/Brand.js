import Image from "next/image";
import React from "react";
import Slider from "react-slick";
const Brand = () => {
  const settings = {
    infinite: true,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-primary brand">
      <div className="container py-8">
        <Slider {...settings} className="space-x-2 py-8 px-4">
          <div className="bg-white rounded-md p-8">
            <Image
              src="/assets/images/brand/b1.png"
              alt="Brand Name"
              width={150}
              height={50}
            />
          </div>
          <div className="bg-white rounded-md p-8">
            <Image
              src="/assets/images/brand/b1.png"
              alt="Brand Name"
              width={150}
              height={50}
            />
          </div>
          <div className="bg-white rounded-md p-8">
            <Image
              src="/assets/images/brand/b1.png"
              alt="Brand Name"
              width={150}
              height={50}
            />
          </div>
          <div className="bg-white rounded-md p-8">
            <Image
              src="/assets/images/brand/b1.png"
              alt="Brand Name"
              width={150}
              height={50}
            />
          </div>
          <div className="bg-white rounded-md p-8">
            <Image
              src="/assets/images/brand/b1.png"
              alt="Brand Name"
              width={150}
              height={50}
            />
          </div>
          <div className="bg-white rounded-md p-8">
            <Image
              src="/assets/images/brand/b1.png"
              alt="Brand Name"
              width={150}
              height={50}
            />
          </div>
          <div className="bg-white rounded-md p-8">
            <Image
              src="/assets/images/brand/b1.png"
              alt="Brand Name"
              width={150}
              height={50}
            />
          </div>
          <div className="bg-white rounded-md p-8">
            <Image
              src="/assets/images/brand/b1.png"
              alt="Brand Name"
              width={150}
              height={50}
            />
          </div>
          <div className="bg-white rounded-md p-8">
            <Image
              src="/assets/images/brand/b1.png"
              alt="Brand Name"
              width={150}
              height={50}
            />
          </div>
          <div className="bg-white rounded-md p-8">
            <Image
              src="/assets/images/brand/b1.png"
              alt="Brand Name"
              width={150}
              height={50}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Brand;
