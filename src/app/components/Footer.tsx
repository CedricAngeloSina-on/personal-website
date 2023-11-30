import React from "react";

const Footer = () => (
    <div className="max-w-md pb-16 text-sm text-gray-600 sm:pb-0">
        <p>
            Coded in{" "}
            <a
                href="https://code.visualstudio.com"
                className="font-medium text-gray-400 hover:text-sky-400 focus-visible:text-sky-400"
                target="_blank"
                rel="noreferrer"
            >
                Visual Studio Code
            </a>
            , built with{" "}
            <a
                href="https://nextjs.org"
                className="font-medium text-gray-400 hover:text-sky-400 focus-visible:text-sky-400"
                target="_blank"
                rel="noreferrer"
            >
                Next.js
            </a>{" "}
            and{" "}
            <a
                href="https://tailwindcss.com"
                className="font-medium text-gray-400 hover:text-sky-400 focus-visible:text-sky-400"
                target="_blank"
                rel="noreferrer"
            >
                Tailwind CSS
            </a>
            , and deployed with{" "}
            <a
                href="https://vercel.com"
                className="font-medium text-gray-400 hover:text-sky-400 focus-visible:text-sky-400"
                target="_blank"
                rel="noreferrer"
            >
                Vercel
            </a>
            . All text is set in the{" "}
            <a
                href="https://vercel.com/font"
                className="font-medium text-gray-400 hover:text-sky-400 focus-visible:text-sky-400"
                target="_blank"
                rel="noreferrer"
            >
                Geist Font
            </a>
            .
        </p>
    </div>
);

export default Footer;
