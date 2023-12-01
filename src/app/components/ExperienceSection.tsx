import React from "react";
import HeaderMobile from "./HeaderMobile";
import ExperienceCard from "./ExperienceCard";
import LinkWithIcon from "./LinkWithIcon";

const ExperienceSection = () => {
    const experienceItems = [
        {
            period: "DEC 2023 — PRESENT",
            href: "https://www.isatu.edu.ph",
            title: "Project Programmer",
            company: "Iloilo Science and Technology University",
            subtitle: "Back-End Programmer",
            description:
                "Incharge on the back-end and database design for the Integrating Data for Economic Analysis Management System (IDEAMS) for Guimaras Province is an intergovernmental collaboration to accelerate the effective use of data measures to inform the improvement of local economic development programs and service delivery for local governments.",
        },
        {
            period: "FEB — MAY 2023",
            href: "https://www.kabertek.com",
            title: "Junior Web Developer",
            company: "Kabertek Inc.",
            subtitle: "Student Intern",
            description:
                "Tasked with encoding info, always keeping data integrity in check with some solid measures. Kept things hush-hush when dealing with sensitive info and, on the coding side, whipped up some cool modules for established systems using C# in an MVC framework as a junior developer.",
        },
        {
            period: "2022 — 2023",
            href: "https://www.isatu.edu.ph",
            title: "Technical Support",
            company: "Iloilo Science and Technology University",
            subtitle: "Student Assistant",
            description:
                "Assisted professors to support daily classes and activities, contributing to the smooth flow of academic operations. Skillfully managed networking responsibilities, encompassing setup, configuration, and maintenance tasks. Executed system installations and proficiently conducted troubleshooting activities to guarantee optimal PC performance.",
        },
    ];

    return (
        <section
            id="experience"
            className="mb-16 scroll-mt-16 text-white md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
            <HeaderMobile title="EXPERIENCE" />
            <ul className="group/list">
                {experienceItems.map((item, index) => (
                    <li className="mb-12" key={index}>
                        <ExperienceCard
                            period={item.period}
                            href={item.href}
                            title={item.title}
                            company={item.company}
                            subtitle={item.subtitle}
                            description={item.description}
                        />
                    </li>
                ))}
            </ul>
            <LinkWithIcon
                href="/Sina-on, Cedric Angelo Oñate - Resume.pdf"
                text="See Full Résumé"
            />
        </section>
    );
};

export default ExperienceSection;
