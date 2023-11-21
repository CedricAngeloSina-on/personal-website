import React from "react";
import HeaderMobile from "./HeaderMobile";

const AboutSection: React.FC = () => {
    return (
        <section
            id="about"
            className="mb-16 scroll-mt-16 text-white md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
            <HeaderMobile title="ABOUT" />
            <div className="text-gray-400">
                <p className="mb-4">
                    With self-learned experience, I've honed my skills in web
                    development, excelling with the{" "}
                    <a
                        className="font-medium text-white hover:text-cyan-500 focus-visible:text-cyan-500"
                        href="https://react.dev/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        React
                    </a>{" "}
                    library and{" "}
                    <a
                        className="font-medium text-white hover:text-sky-500 focus-visible:text-sky-500"
                        href="https://tailwindcss.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Tailwind CSS
                    </a>{" "}
                    for front-end development. I'm proficient in the{" "}
                    <a
                        className="font-medium text-white hover:text-slate-400 focus-visible:text-slate-400"
                        href="https://nextjs.org/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Next.js
                    </a>{" "}
                    framework and utilize{" "}
                    <a
                        className="font-medium text-white hover:text-orange-500 focus-visible:text-orange-500"
                        href="https://www.mysql.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        MySQL
                    </a>{" "}
                    and{" "}
                    <a
                        className="font-medium text-white hover:text-emerald-300 focus-visible:text-emerald-300"
                        href="https://supabase.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Supabase
                    </a>{" "}
                    for databases. Specializing in creating visually appealing
                    and dynamic web applications, I seamlessly integrate both
                    client and server-side scripting for optimal user
                    experiences.
                </p>
                <p className="mb-4">
                    In addition to my web development prowess, I have a passion
                    for data analytics. Proficient in{" "}
                    <a
                        className="font-medium text-white hover:text-yellow-300 focus-visible:text-yellow-300"
                        href="https://www.python.org/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Python
                    </a>{" "}
                    libraries such as{" "}
                    <a
                        className="font-medium text-white hover:text-sky-800 focus-visible:text-sky-800"
                        href="https://numpy.org/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Numpy
                    </a>
                    ,{" "}
                    <a
                        className="font-medium text-white hover:text-violet-600 focus-visible:text-violet-600"
                        href="https://pandas.pydata.org/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Pandas
                    </a>
                    ,{" "}
                    <a
                        className="font-medium text-white hover:text-cyan-700 focus-visible:text-cyan-700"
                        href="https://matplotlib.org/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Matplotlib
                    </a>
                    , and{" "}
                    <a
                        className="font-medium text-white hover:text-blue-800 focus-visible:text-blue-800"
                        href="https://seaborn.pydata.org/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Seaborn
                    </a>
                    , along with expertise in{" "}
                    <a
                        className="font-medium text-white hover:text-sky-300 focus-visible:text-sky-300"
                        href="https://www.tableau.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Tableau
                    </a>
                    , I leverage my analytical skills to extract meaningful
                    insights from diverse datasets.
                </p>
                <p>
                    This dual expertise uniquely positions me at the
                    intersection of web development and data analytics, enabling
                    me to approach challenges with a comprehensive and versatile
                    skill set.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;
