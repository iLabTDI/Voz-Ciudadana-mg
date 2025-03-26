import React from "react";

export const ScrollToSection = ({ sectionId, children, className, ...props }) => {
    const handleClick = () => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <button onClick={handleClick} className={className} {...props}>
            {children}
        </button>
    );
};


