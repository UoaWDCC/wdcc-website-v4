import React from "react";

export type ChecklistType = {
    label: string;
    checked?: boolean;
};

const Checklist = ({ ...item }: ChecklistType) => {
    return (
        <div className="flex gap-4">
            <div className="*:h-6 *:min-w-6">
                {item.checked ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <rect width="26" height="26" rx="13" fill="#80D7B9" />
                        <path d="M11.7627 17.2368L18.9995 10" stroke="#00543B" strokeWidth="3" strokeLinecap="round" />
                        <path
                            d="M11.7627 17.2368L7.99954 13.4736"
                            stroke="#00543B"
                            strokeWidth="3"
                            strokeLinecap="round"
                        />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                        <rect width="27" height="27" rx="13" fill="#FFB0B0" />
                        <path d="M10 18L18 10" stroke="#E63058" strokeWidth="3" strokeLinecap="round" />
                        <path d="M18 18L10 10" stroke="#E63058" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                )}
            </div>
            <p className="text-left">{item.label}</p>
        </div>
    );
};

export default Checklist;
