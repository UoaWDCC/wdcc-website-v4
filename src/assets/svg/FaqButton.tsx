interface FaqButtonProps {
    rotate?: boolean;
    className?: string;
}

const FaqButton = ({ rotate, className }: FaqButtonProps) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
        >
            <circle cx="16" cy="16" r="16" fill="url(#paint0_linear_1959_5417)" />
            <g transform={`translate(5 5) ${rotate ? "rotate(45 11 11)" : ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path
                        d="M4.58301 11H17.4164"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M11 4.58301V17.4163"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_1959_5417"
                    x1="32"
                    y1="0.315762"
                    x2="-6.06722"
                    y2="12.1228"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#3A86FF" />
                    <stop offset="1" stop-color="#0B3E8E" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default FaqButton;
