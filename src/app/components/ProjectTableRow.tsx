import React from "react";

interface TableRowItemProps {
    title: string;
    technologies: string[];
    linktext: string;
    href: string;
}

const ProjectTableRow: React.FC<TableRowItemProps> = ({
    title,
    technologies,
    linktext,
    href,
}) => (
    <tr className="border-b border-slate-300/10 last:border-none">
        <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
            <div>
                <div className="hidden sm:block">
                    <span>{title}</span>
                </div>
                <div className="xs:block sm:hidden">
                    <a
                        className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-400 focus-visible:text-sky-400 sm:hidden"
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span>
                            {" "}
                            <span className="inline-block">
                                {title}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </span>
                        </span>
                    </a>
                </div>
            </div>
        </td>
        <td className="hidden py-4 pr-4 align-top lg:table-cell">
            <ul className="flex -translate-y-1.5 flex-wrap">
                {technologies.map((technology, index) => (
                    <li key={index} className="my-1 mr-1.5">
                        <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-sm font-medium leading-5 text-sky-400">
                            {technology}
                        </div>
                    </li>
                ))}
            </ul>
        </td>
        <td className="hidden py-4 align-top sm:table-cell">
            <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                    <a
                        className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-400 hover:text-sky-400 focus-visible:text-sky-400"
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span>
                            {" "}
                            <span className="inline-block">
                                {linktext}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </span>
                        </span>
                    </a>
                </li>
            </ul>
        </td>
    </tr>
);

export default ProjectTableRow;
