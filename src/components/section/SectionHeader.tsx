import React, { ReactNode } from "react";

const SectionHeader = ({ children }: { children: ReactNode }) => {
    return <h2 className="text-center text-3xl font-semibold text-blue-700">{children}</h2>;
};

export default SectionHeader;
