import React from "react";
import HeaderMobile from "./HeaderMobile";
import ExperienceCard from "./ExperienceCard";
import Link from "next/link";
import Image from "next/image";

const ExperienceSection = () => {
    const experienceItems = [
        {
            period: "2023 — Present",
            href: "https://www.isatu.edu.ph",
            title: "Back-End Web Developer",
            company: "Iloilo Science and Technology University",
            subtitle: "Web Developer",
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
                "Incharge on the back-end and database design for the Integrating Data for Economic Analysis Management System (IDEAMS) for Guimaras Province is an intergovernmental collaboration to accelerate the effective use of data measures to inform the improvement of local economic development programs and service delivery for local governments.",
        },
        {
            period: "2022 — 2023",
            href: "https://www.isatu.edu.ph",
            title: "Technical Support",
            company: "Iloilo Science and Technology University",
            subtitle: "Student Assistant",
            description:
                "Incharge on the back-end and database design for the Integrating Data for Economic Analysis Management System (IDEAMS) for Guimaras Province is an intergovernmental collaboration to accelerate the effective use of data measures to inform the improvement of local economic development programs and service delivery for local governments.",
        },
    ];

    return (
        <section
            id="experience"
            className="mb-16 scroll-mt-16 text-white md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
            <HeaderMobile title="EXPERIENCE" />
            <ol className="group/list">
                {experienceItems.map((item, index) => (
                    <li className="mb-12">
                        <ExperienceCard
                            key={index}
                            period={item.period}
                            href={item.href}
                            title={item.title}
                            company={item.company}
                            subtitle={item.subtitle}
                            description={item.description}
                        />
                    </li>
                ))}
            </ol>
            <div className="mt-12">
                <a
                    className="group inline-flex items-center font-semibold leading-tight text-slate-200"
                    aria-label="View Full Résumé"
                    href="/resume.pdf"
                >
                    <span>
                        <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                            View Full
                        </span>
                        <span className="whitespace-nowrap">
                            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                                Résumé
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </span>
                    </span>
                </a>
            </div>
        </section>
    );
};

export default ExperienceSection;
