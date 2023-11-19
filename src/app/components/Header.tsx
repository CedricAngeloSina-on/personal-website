import React from "react";
import NavBar from "./NavBar";
import SocialLinks from "./SocialLinks";
import Link from "next/link";

const Header = () => {
    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="font-extrabold tracking-tight text-blue-600 xs:text-4xl sm:text-5xl">
                    <Link
                        className="group-visible group flex items-center py-3"
                        href="/"
                    >
                        Cedric Angelo
                    </Link>
                </h1>
                <h2 className="font-semibold tracking-tight text-white xs:text-2xl">
                    Freelance Web Developer
                </h2>
                <p className="mt-2 max-w-xs text-lg tracking-tight text-gray-600">
                    Good devs copy, great devs steal
                </p>
                <NavBar />
            </div>
            {/* ICONS */}
            <SocialLinks />
        </header>
    );
};

export default Header;
