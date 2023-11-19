"use client";
import React, { useEffect } from "react";
import Link from "next/link";

const NavBar: React.FC = () => {
    const changeNav: IntersectionObserverCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
                // Your existing logic here
                const currentActive = document.querySelector(
                    ".active"
                ) as HTMLElement | null;
                if (currentActive) {
                    currentActive.classList.remove("active");
                }

                const id = entry.target.getAttribute("id");
                const newActive = document.querySelector(
                    `[href="#${id}"]`
                ) as HTMLElement | null;
                if (newActive) {
                    newActive.classList.add("active");
                    newActive.setAttribute("tabindex", "0");
                    if (currentActive) {
                        currentActive.removeAttribute("tabindex");
                    }
                }
            }
        });
    };

    useEffect(() => {
        const options: IntersectionObserverInit = {
            threshold: 0.55,
        };

        const observer = new IntersectionObserver(changeNav, options);

        const sections = document.querySelectorAll("section");
        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <nav className="nav hidden lg:block">
            <ul className="mt-16 w-max">
                <li>
                    <Link
                        className="group-visible group flex items-center py-3"
                        href="#about"
                    >
                        <span className="nav-indicator mr-4 h-px w-8 bg-gray-600 transition-all group-hover:w-16 group-hover:bg-white group-focus-visible:w-16 group-focus-visible:bg-white motion-reduce:transition-none"></span>
                        <span className="nav-text text-xs font-bold tracking-widest text-gray-600 group-hover:text-white group-focus-visible:text-white">
                            ABOUT
                        </span>
                    </Link>
                </li>
                <li>
                    <Link
                        className="group-visible group flex items-center py-3"
                        href="#projects"
                    >
                        <span className="nav-indicator mr-4 h-px w-8 bg-gray-600 transition-all group-hover:w-16 group-hover:bg-white group-focus-visible:w-16 group-focus-visible:bg-white motion-reduce:transition-none"></span>
                        <span className="nav-text text-xs font-bold tracking-widest text-gray-600 group-hover:text-white group-focus-visible:text-white">
                            PROJECTS
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
