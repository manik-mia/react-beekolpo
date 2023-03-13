import React from "react";
import ListProduct from "../product/ListProduct";
import BrowseMoreBtn from "../buttons/BrowseMoreBtn";

const FlashDeal = () => {
    return (
        <div className="container py-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between my-4">
                <div className="flex flex-col md:flex-row">
                    <h3 className="w-full md:w-auto text-2xl font-bold">
                        Mega Flash Deals
                    </h3>
                    <div className="w-full md:w-auto bg-white rounded p-2 md:ml-8 my-2 md:my-0">
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
