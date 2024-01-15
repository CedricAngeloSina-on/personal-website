"use client";
import React, { useEffect } from "react";
import NavItem from "./NavItem";

const NavBar: React.FC = () => {
    const changeNav: IntersectionObserverCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
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
            threshold: 0.8,
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

    const navItems = [
        { id: "#about", title: "ABOUT" },
        { id: "#experience", title: "EXPERIENCE" },
        { id: "#projects", title: "PROJECTS" },
    ];

    return (
        <nav className="nav hidden lg:block">
            <ol className="mt-16 w-max">
                {navItems.map((item, index) => (
                    <li key={index}>
                        <NavItem id={item.id} title={item.title} />
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default NavBar;
