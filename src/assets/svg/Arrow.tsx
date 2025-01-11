import React, { SVGAttributes } from "react";

const Arrow = ({ ...props }: SVGAttributes<HTMLOrSVGElement>) => {
    return (
        <svg
            {...props}
            width="11"
            height="10"
            viewBox="0 0 11 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "inline" }}
        >
            <g>
                <path
                    d="M8.408 6.192L4.296 2.096L5.544 0.783999L10.104 5.248L8.408 6.192ZM0.024 6.144V4.336H8.824V6.144H0.024ZM5.496 9.648L4.248 8.336L8.424 4.256L10.104 5.248L5.496 9.648Z"
                    fill="currentColor"
                />
            </g>
        </svg>
    );
};

export default Arrow;
