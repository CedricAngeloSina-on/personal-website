import Image from "next/image";

import AboutSection from "./components/AboutSection";

export default function Home() {
    return (
        <main className="pt-24 lg:w-1/2 lg:py-24">
            <AboutSection />
            <AboutSection />
            <AboutSection />
            <AboutSection />
        </main>
    );
}
