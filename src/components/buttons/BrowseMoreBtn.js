import Link from "next/link";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const BrowseMoreBtn = ({ link, text }) => {
    return (
        <Link
            href={link}
            className="flex items-center text-xs border border-gray-500 rounded-3xl px-3 py-1 hover:text-white hover:bg-primary hover:border-primary"
        >
            {text} <MdArrowForwardIos className="ml-2" />
        </Link>
    );
};

export default BrowseMoreBtn;
