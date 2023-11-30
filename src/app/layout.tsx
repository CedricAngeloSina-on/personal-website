import type { Metadata } from "next";
import Head from "next/head";
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
            <Head>
                <meta property="og:image" content="/images/homepage.jpg" />
                <meta
                    property="og:image:alt"
                    content="Cedric Angelo Sina-on - Portfolio"
                />
                <meta name="twitter:image" content="/images/homepage.jpg" />
                <meta
                    property="twitter:image:alt"
                    content="Cedric Angelo Sina-on - Portfolio"
                />
            </Head>
            <body>
                <Spotlight />
                {children}
            </body>
        </html>
    );
}
