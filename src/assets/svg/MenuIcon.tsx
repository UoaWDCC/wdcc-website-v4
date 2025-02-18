import React, { SVGAttributes } from "react";

const MenuIcon = ({ ...props }: SVGAttributes<HTMLOrSVGElement>) => {
    return (
        <svg {...props} stroke="inherit" width="24" height="22" viewBox="0 0 24 22" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2H22" strokeWidth="4" strokeLinecap="round" />
            <path d="M2 20H22" strokeWidth="4" strokeLinecap="round" />
            <path d="M2 11H22" strokeWidth="4" strokeLinecap="round" />
        </svg>
    );
};

export default MenuIcon;
