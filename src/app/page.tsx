import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
    return (
        <main className="pt-24 lg:w-1/2 lg:py-24">
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
        </main>
    );
}
