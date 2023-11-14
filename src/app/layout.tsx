import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import NavBar from "./components/NavBar";
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
                <div
                    id="spotlight"
                    className="fixed left-1/2 top-1/2 aspect-square w-[64rem] -translate-x-1/2 -translate-y-1/2 transform rounded-full blur-xl"
                    style={{
                        background:
                            "radial-gradient(800px circle, rgba(29, 78, 216, 0.15), transparent 80%)",
                    }}
                >
                    <Spotlight />
                </div>

                <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
                    <div className="lg:flex lg:justify-between lg:gap-4">
                        <NavBar />
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
