import React, { SVGAttributes } from "react";

const ExitIcon = ({ ...props }: SVGAttributes<HTMLOrSVGElement>) => {
    return (
        <svg {...props} stroke="inherit" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.08887 2.1792L19.9098 20.0001"  stroke-width="4" stroke-linecap="round" />
            <path d="M2.08887 19.8208L19.9098 1.99991"  stroke-width="4" stroke-linecap="round"/>
        </svg>

    );
};

export default ExitIcon;
