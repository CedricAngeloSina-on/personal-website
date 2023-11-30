import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Spotlight from "./components/Spotlight";

export const metadata: Metadata = {
    title: "Cedric Angelo Sina-on",
    description: "Cedric Angelo Sina-on - Portfolio",
    openGraph: {
        title: "Cedric Angelo Sina-on - Portfolio",
        description: "Cedric Angelo Sina-on - Portfolio",
        url: "https://cedricsina-on.vercel.app",
        siteName: "cedricsina-on.vercel.app",
        images: [
            {
                url: "/images/homepage.jpg",
                width: 800,
                height: 600,
            },
            {
                url: "/images/homepage.jpg",
                width: 1800,
                height: 1600,
                alt: "Homepage - Cedric Angelo Sina-on",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "cedricsina-on.vercel.app",
        description: "Cedric Angelo Sina-on - Portfolio",
        creator: "@DegenLasiii",
        images: ["/images/homepage.jpg"],
    },
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
