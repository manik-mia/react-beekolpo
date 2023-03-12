import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleCategory = () => {
    return (
        <div className="bg-white rounded-md text-center p-2 transition-all duration-200 hover:shadow-xl">
            <Link href="#">
                <Image
                    src="/assets/images/categories/c1.png"
                    alt="Category Name"
                    height={150}
                    width={150}
                    className="rounded-full mx-auto p-2"
                />
                <h4>Womens Fashion</h4>
            </Link>
        </div>
    );
};

export default SingleCategory;
