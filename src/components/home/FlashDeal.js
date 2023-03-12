import React from "react";
import ListProduct from "../product/ListProduct";
import BrowseMoreBtn from "../buttons/BrowseMoreBtn";

const FlashDeal = () => {
    return (
        <div className="container py-10">
            <div className="flex items-center justify-between my-4">
                <div className="flex">
                    <h3 className="text-2xl font-bold">Mega Flash Deals</h3>
                    <div className="deal-time bg-white rounded p-2 ml-8">
                        <span className="text-sm">Ends in</span>
                        <span className="bg-primary ml-2 text-white text-sm py-1 px-2 rounded-sm">
                            120 H
                        </span>
                        <span className="mx-1 text-primary text-sm p-1 rounded-sm font-bold">
                            :
                        </span>
                        <span className="bg-primary ml-2 text-white text-sm py-1 px-2 rounded-sm">
                            50 M
                        </span>
                        <span className="mx-1 text-primary text-sm p-1 rounded-sm font-bold">
                            :
                        </span>
                        <span className="bg-primary ml-2 text-white text-sm py-1 px-2 rounded-sm">
                            45 S
                        </span>
                        <span className="mx-1 text-primary text-sm p-1 rounded-sm font-bold">
                            :
                        </span>
                        <span className="bg-primary ml-2 text-white text-sm py-1 px-2 rounded-sm">
                            00
                        </span>
                    </div>
                </div>
                <BrowseMoreBtn link="#" text="Browse All" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
    );
};

export default FlashDeal;
