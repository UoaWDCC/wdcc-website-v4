import React, { ReactNode } from "react";

const SectionDescription = ({ children }: { children: ReactNode }) => {
    return <p className="w-[clamp(300px,100%,800px)] px-4 text-center text-lg">{children}</p>;
};

export default SectionDescription;
