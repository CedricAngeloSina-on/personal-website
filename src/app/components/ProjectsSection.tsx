import React from "react";
import HeaderMobile from "./HeaderMobile";

const ProjectsSection = () => {
    return (
        <section
            id="projects"
            className="mb-16 scroll-mt-16 text-white md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
            <HeaderMobile title="PROJECTS" />
            <div className="text-gray-400">
                <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam rutrum iaculis neque sollicitudin eleifend. In hac
                    habitasse platea dictumst. Duis fermentum mauris ut ultrices
                    pretium. Quisque non tortor id ipsum accumsan euismod. Nunc
                    semper non massa ac pretium. Donec elit risus, euismod et
                    malesuada ac, gravida quis leo. Nunc sed sodales leo, eget
                    ornare erat. Sed pharetra, augue ac blandit vestibulum,
                    nulla felis accumsan risus, eu elementum libero sapien in
                    metus.
                </p>
                <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam rutrum iaculis neque sollicitudin eleifend. In hac
                    habitasse platea dictumst. Duis fermentum mauris ut ultrices
                    pretium. Quisque non tortor id ipsum accumsan euismod. Nunc
                    semper non massa ac pretium.
                </p>
            </div>
        </section>
    );
};

export default ProjectsSection;
