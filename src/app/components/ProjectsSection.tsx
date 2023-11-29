import React from "react";
import HeaderMobile from "./HeaderMobile";
import ProjectCard from "./ProjectCard";
import LinkWithIcon from "./LinkWithIcon";

const ProjectsSection = () => {
    const projectItems = [
        {
            href: "https://sgfansite.vercel.app",
            title: "Steins;Gate Fan-Made Site",
            description:
                "Immerses you in the universe of Steins;Gate., a visual novel and anime series that revolves around a group of eccentric individuals who discover a way to send messages to the past, leading to unintended consequences and a complex narrative involving time travel and its consequences.",
            imgsrc: "/images/sgfansite.jpg",
            imgalt: "Steins;Gate Fan-Made Site",
        },
        {
            href: "https://akfansite.vercel.app",
            title: "Arknights Fan-Made Site",
            description:
                "Introduces you to the world of Arknights, a strategic mobile tower defense game featuring anime-style characters, where players deploy operators with unique abilities to defend against waves of enemies in a dystopian world.",
            imgsrc: "/images/akfansite.jpg",
            imgalt: "Arknights Fan-Made Site",
        },
        {
            href: "https://bocchimenu.vercel.app",
            title: "Bocchi the Rock Cafe Menu!",
            description:
                "Showcases a customizable set menu, with food and drink inspired by the characters from Bocchi the Rock!",
            imgsrc: "/images/bocchimenu.jpg",
            imgalt: "Bocchi the Rock Cafe Menu!",
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
            <LinkWithIcon href="/projects" text="See All Projects" />
        </section>
    );
};

export default ProjectsSection;
