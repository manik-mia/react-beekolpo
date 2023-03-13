import React from "react";
import GridProduct from "../product/GridProduct";
import BrowseMoreBtn from "../buttons/BrowseMoreBtn";

const LowMOQ = () => {
    return (
        <div className="bg-white">
            <div className="container py-10">
                <div className="flex items-center justify-between my-4">
                    <h3 className="text-2xl font-bold">Low MOQ</h3>
                    <BrowseMoreBtn link="#" text="Browse All" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4">
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
        </div>
    );
};

export default LowMOQ;
