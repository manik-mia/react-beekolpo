import Image from "next/image";
import React from "react";

const AdsBanner = () => {
    return (
        <div className="container pb-8 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-2">
                <Image
                    src="/assets/images/banner/b1.png"
                    alt="Banner One"
                    width={420}
                    height={220}
                />
                <Image
                    src="/assets/images/banner/b2.png"
                    alt="Banner One"
                    width={420}
                    height={220}
                />
                <Image
                    src="/assets/images/banner/b3.png"
                    alt="Banner One"
                    width={420}
                    height={220}
                />
            </div>
        </div>
    );
};

export default AdsBanner;
