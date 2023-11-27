import React from "react";
import Link from "next/link";

interface LinkItemProps {
    href: string;
    text: string;
}

const LinkWithIcon: React.FC<LinkItemProps> = ({ href, text }) => (
    <div className="mt-12">
        <Link
            className="group inline-flex items-center font-semibold leading-tight text-white"
            href={href}
        >
            <span>
                <span className="whitespace-nowrap">
                    <span className="border-b border-transparent pb-px transition group-hover:border-sky-400 motion-reduce:transition-none">
                        {text}
                    </span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </span>
            </span>
        </Link>
    </div>
);

export default LinkWithIcon;
