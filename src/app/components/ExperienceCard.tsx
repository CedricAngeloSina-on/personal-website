import React from "react";
interface ExperienceItemProps {
    period: string;
    href: string;
    title: string;
    company: string;
    subtitle: string;
    description: string;
}

const ExperienceCard: React.FC<ExperienceItemProps> = ({
    period,
    href,
    title,
    company,
    subtitle,
    description,
}) => (
    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-950/50 lg:group-hover:drop-shadow-lg"></div>
        <header className="z-10 mb-2 mt-1 text-xs font-semibold tracking-wide text-gray-600 sm:col-span-2">
            {period}
        </header>
        <div className="z-10 sm:order-2 sm:col-span-6">
            <h3 className="font-medium leading-snug text-white">
                <div>
                    <a
                        className="group/link inline-flex items-baseline text-base font-medium leading-tight text-white hover:text-sky-400 focus-visible:text-sky-400"
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                            {title} •{" "}
                            <span className="inline-block">
                                {company}
                                <span className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </span>
                            </span>
                        </span>
                    </a>
                </div>
                <div className="text-base text-gray-600">{subtitle}</div>
            </h3>
            <p className="mt-2 text-sm leading-normal text-gray-400">
                {description}
            </p>
        </div>
    </div>
);

export default ExperienceCard;
