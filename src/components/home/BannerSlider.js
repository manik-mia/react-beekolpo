import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    autoplay: true,
    fade: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full overflow-hidden main-banner">
      <Slider {...settings}>
        <Image
          src="/assets/images/slider/s4.jpeg"
          alt="Slider 1"
          width={1050}
          height={400}
        />
        <Image
          src="/assets/images/slider/s1.jpeg"
          alt="Slider 1"
          width={1050}
          height={400}
        />
        <Image
          src="/assets/images/slider/s2.jpeg"
          alt="Slider 1"
          width={1050}
          height={400}
        />
        <Image
          src="/assets/images/slider/s3.jpeg"
          alt="Slider 1"
          width={1050}
          height={400}
        />
      </Slider>
    </div>
  );
};
export default BannerSlider;
