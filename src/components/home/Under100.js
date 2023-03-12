import React from "react";
import ListProduct from "../product/ListProduct";
import BrowseMoreBtn from "../buttons/BrowseMoreBtn";

const Under100 = () => {
    return (
        <div className="bg-gray-100 py-10">
            <div className="container">
                <div className="flex items-center justify-between my-4">
                    <h3 className="text-2xl font-bold">Under 100 TK</h3>
                    <BrowseMoreBtn link="#" text="Browse All" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    <ListProduct />
                    <ListProduct />
                    <ListProduct />
                    <ListProduct />
                    <ListProduct />
                    <ListProduct />
                    <ListProduct />
                    <ListProduct />
                    <ListProduct />
                    <ListProduct />
                    <ListProduct />
                </div>
            </div>
        </div>
    );
};

export default Under100;
