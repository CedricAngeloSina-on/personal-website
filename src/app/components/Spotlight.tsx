"use client";
import React, { useEffect } from "react";

const Spotlight: React.FC = () => {
    useEffect(() => {
        const spotlight = document.getElementById("spotlight");

        const handlePointerMove = (event: PointerEvent) => {
            const { clientX, clientY } = event;

            spotlight?.animate({
                left: `${clientX}px`,
                top: `${clientY}px`,
            });
        };

        window.addEventListener("pointermove", handlePointerMove);

        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
        };
    }, []);

    return null;
};

export default Spotlight;
