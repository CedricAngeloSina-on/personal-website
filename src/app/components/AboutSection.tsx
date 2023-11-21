import React from "react";
import HeaderMobile from "./HeaderMobile";
import Link from "next/link";
import Image from "next/image";

const AboutSection: React.FC = () => {
    return (
        <section
            id="about"
            className="mb-16 scroll-mt-16 text-white md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
            <HeaderMobile title="ABOUT" />
            <div className="text-gray-400">
                <p className="mb-4">
                    With six years of progressive experience, I've honed my
                    skills in web development, mastering languages like HTML,
                    CSS, Bootstrap, PHP, JavaScript (including JQuery), and
                    AJAX. I specialize in creating visually appealing and
                    dynamic web applications, seamlessly integrating both client
                    and server-side scripting for optimal user experiences.
                    {/* <a
                        className="font-medium hover:text-teal-300 focus-visible:text-teal-300"
                        href="https://us.mullenlowe.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        advertising agency
                    </a> */}
                </p>
                <p className="mb-4">
                    In addition to my web development prowess, I have a passion
                    for data analytics. Proficient in Python libraries, I
                    leverage my analytical skills to extract meaningful insights
                    from diverse datasets. This dual expertise uniquely
                    positions me at the intersection of web development and data
                    analytics, enabling me to approach challenges with a
                    comprehensive and versatile skill set.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;
