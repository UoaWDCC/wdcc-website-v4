import React from "react";

import { useProgress } from "@react-three/drei";

const LoadingScreen = () => {
    const progress = useProgress();
    return (
        <div className="bg-blue-brand fixed z-50 grid size-full place-items-center">
            <p>{progress.progress}</p>
        </div>
    );
};

export default LoadingScreen;
