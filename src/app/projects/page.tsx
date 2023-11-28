import React from "react";
import Link from "next/link";
import ProjectTableRow from "../components/ProjectTableRow";
import supabase from "../utils/supabase";

export const revalidate = 0;

export default async function Projects() {
    const { data } = await supabase.from("projects").select().order("id");
    const projectRowItems = data;

    return (
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div className="lg:py-24">
                <header>
                    <Link
                        className="group mb-2 inline-flex items-center font-semibold leading-tight text-sky-400"
                        href="/"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        Cedric Sina-on
                    </Link>
                </header>

                <h1 className="font-extrabold tracking-tight text-white xs:text-4xl sm:text-5xl">
                    All Projects
                </h1>
                <table className="mt-12 w-full border-collapse text-left">
                    <thead className="border-b border-white/10 px-6 py-5">
                        <tr>
                            <th className="py-4 pr-8 text-base font-semibold text-white">
                                Project
                            </th>
                            <th className="hidden py-4 pr-8 text-base font-semibold text-white sm:table-cell">
                                Made at
                            </th>
                            <th className="hidden py-4 pr-8 text-base font-semibold text-white lg:table-cell">
                                Built with
                            </th>
                            <th className="hidden py-4 pr-8 text-base font-semibold text-white sm:table-cell">
                                Link
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {projectRowItems?.map((projectItem) => (
                            <ProjectTableRow
                                key={projectItem.id}
                                title={projectItem.title}
                                company={projectItem.company}
                                technologies={projectItem.technologies}
                                linktext={projectItem.linktext}
                                href={projectItem.href}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
