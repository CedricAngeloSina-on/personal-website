import React from "react";

interface NavItemProps {
    title: string;
}

const HeaderMobile: React.FC<NavItemProps> = ({ title }) => (
    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-zinc-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:hidden lg:w-full lg:px-0 lg:py-0">
        <h2 className="text-sm font-bold tracking-widest text-white">
            {title}
        </h2>
    </div>
);

export default HeaderMobile;
