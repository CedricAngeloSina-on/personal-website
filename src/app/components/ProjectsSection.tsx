import React from "react";
import HeaderMobile from "./HeaderMobile";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
    const projectItems = [
        {
            href: "https://bocchimenu.vercel.app",
            title: "Bocchi the Rock Cafe Menu!",
            description:
                "Showcases a customizable set menu, with food and drink inspired by the characters from Bocchi the Rock!",
            imgsrc: "/images/bocchimenu.jpg",
            imgalt: "Bocchi the Rock Cafe Menu",
        },
    ];

    return (
        <section
            id="projects"
            className="mb-16 scroll-mt-16 text-white md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
            <HeaderMobile title="PROJECTS" />
            <ul className="group/list">
                {projectItems.map((item, index) => (
                    <li className="mb-12" key={index}>
                        <ProjectCard
                            href={item.href}
                            title={item.title}
                            description={item.description}
                            imgsrc={item.imgsrc}
                            imgalt={item.imgsrc}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsSection;
