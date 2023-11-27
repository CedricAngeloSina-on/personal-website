import React from "react";
import NavBar from "./NavBar";
import SocialLinks from "./SocialLinks";
import Link from "next/link";

const Header = () => {
    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="font-extrabold tracking-tight text-sky-400 xs:text-5xl sm:text-5xl">
                    <Link
                        className="group-visible group flex items-center"
                        href="/"
                    >
                        Cedric Sina-on
                    </Link>
                </h1>
                <h2 className="mt-3 font-semibold tracking-tight text-white xs:text-2xl">
                    Freelance Web Developer
                </h2>
                <p className="mt-2 max-w-xs text-lg tracking-tight text-gray-600">
                    Good devs copy, great devs steal
                </p>
                <NavBar />
            </div>
            <SocialLinks />
        </header>
    );
};

export default Header;
