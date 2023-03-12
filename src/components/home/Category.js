import React from "react";
import SingleCategory from "../category/SingleCategory";
import BrowseMoreBtn from "../buttons/BrowseMoreBtn";

const Category = () => {
    return (
        <div className="bg-gray-100 py-10">
            <div className="container">
                <div className="flex items-center justify-between my-4">
                    <div className="flex">
                        <h3 className="text-2xl font-bold">
                            Categoreis Of The Week
                        </h3>
                    </div>
                    <BrowseMoreBtn link="#" text="Browse All" />
                </div>
                <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
                    <SingleCategory />
                    <SingleCategory />
                    <SingleCategory />
                    <SingleCategory />
                    <SingleCategory />
                    <SingleCategory />
                    <SingleCategory />
                    <SingleCategory />
                    <SingleCategory />
                    <SingleCategory />
                    <SingleCategory />
                    <SingleCategory />
                </div>
            </div>
        </div>
    );
};

export default Category;
