import Link from "next/link";
import React from "react";

const SocialLoginBtn = ({ link, icon }) => {
    return (
        <Link
            href={link}
            className="px-4 py-2 border-2 rounded bg-primary text-white border-primary transition-all duration-300"
        >
            <span className="text-md">{icon}</span>
        </Link>
    );
};

export default SocialLoginBtn;
