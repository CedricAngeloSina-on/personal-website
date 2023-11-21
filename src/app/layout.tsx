import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Header from "./components/Header";
import Spotlight from "./components/Spotlight";

export const metadata: Metadata = {
    title: "Cedric Angelo - Portfolio",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`scroll-smooth bg-zinc-900 ${GeistSans.className}`}
        >
            <body>
                <Spotlight />
                <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
                    <div className="lg:flex lg:justify-between">
                        <Header />
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
