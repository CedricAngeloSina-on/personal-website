import React from "react";
import Link from "next/link";
interface NavItemProps {
    id: string;
    title: string;
}

const NavItem: React.FC<NavItemProps> = ({ id, title }) => (
    <Link className="group-visible group flex items-center py-3" href={id}>
        <span className="nav-indicator mr-4 h-px w-8 bg-gray-600 transition-all group-hover:w-16 group-hover:bg-white group-focus-visible:w-16 group-focus-visible:bg-white motion-reduce:transition-none"></span>
        <span className="nav-text text-xs font-bold tracking-widest text-gray-600 group-hover:text-white group-focus-visible:text-white">
            {title}
        </span>
    </Link>
);

export default NavItem;
