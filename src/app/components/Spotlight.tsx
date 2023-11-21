"use client";
import React, { useEffect } from "react";

const Spotlight: React.FC = () => {
    useEffect(() => {
        const spotlight = document.getElementById("spotlight");

        const handlePointerMove = (event: PointerEvent) => {
            const { clientX, clientY } = event;

            spotlight?.animate(
                {
                    left: `${clientX}px`,
                    top: `${clientY}px`,
                },
                { duration: 0, fill: "forwards" }
            );
        };

        window.addEventListener("pointermove", handlePointerMove);

        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
        };
    }, []);

    return (
        <div
            id="spotlight"
            className="pointer-events-none fixed left-1/2 top-1/2 aspect-square w-[64rem] -translate-x-1/2 -translate-y-1/2 transform rounded-full blur-xl xs:hidden lg:flex"
            style={{
                background:
                    "radial-gradient(800px circle, rgba(37, 99, 235, 0.1), transparent 60%)",
            }}
        ></div>
    );
};

export default Spotlight;
