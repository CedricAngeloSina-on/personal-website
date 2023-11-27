import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Spotlight from "./components/Spotlight";

export const metadata: Metadata = {
    title: "Cedric Sina-on",
    description: "Cedric Angelo Sina-on - Portfolio",
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
                {children}
            </body>
        </html>
    );
}
