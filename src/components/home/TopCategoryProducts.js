import Link from "next/link";
import React from "react";
import GridProduct from "../product/GridProduct";
import BrowseMoreBtn from "../buttons/BrowseMoreBtn";

const TopCategoryProducts = () => {
    return (
        <div className="container py-10">
            <div className="flex items-center justify-between my-4">
                <h3 className="text-2xl font-bold">Top Categories Product</h3>

                <div className="categories flex items-center space-x-4">
                    <Link
                        href="#"
                        className="text-primary border-primary border-b-2 font-semibold"
                    >
                        Bags
                    </Link>
                    <Link
                        href="#"
                        className="border-transparent hover:text-primary hover:border-primary border-b-2 font-semibold"
                    >
                        Jewellery
                    </Link>
                    <Link
                        href="#"
                        className="border-transparent hover:text-primary hover:border-primary border-b-2 font-semibold"
                    >
                        Cosmetics
                    </Link>
                    <Link
                        href="#"
                        className="border-transparent hover:text-primary hover:border-primary border-b-2 font-semibold"
                    >
                        Shoes
                    </Link>
                    <Link
                        href="#"
                        className="border-transparent hover:text-primary hover:border-primary border-b-2 font-semibold"
                    >
                        Man Fashion
                    </Link>
                    <Link
                        href="#"
                        className="border-transparent hover:text-primary hover:border-primary border-b-2 font-semibold"
                    >
                        Woman Fashion
                    </Link>
                    <Link
                        href="#"
                        className="border-transparent hover:text-primary hover:border-primary border-b-2 font-semibold"
                    >
                        Gifts
                    </Link>
                    <Link
                        href="#"
                        className="border-transparent hover:text-primary hover:border-primary border-b-2 font-semibold"
                    >
                        Toys
                    </Link>
                    <BrowseMoreBtn link="#" text="Browse All" />
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                <GridProduct />
                <GridProduct />
                <GridProduct />
                <GridProduct />
                <GridProduct />
                <GridProduct />
                <GridProduct />
                <GridProduct />
                <GridProduct />
            </div>
        </div>
    );
};

export default TopCategoryProducts;
