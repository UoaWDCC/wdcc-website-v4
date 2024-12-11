import React from "react";
import { useProgress } from "@react-three/drei";

const LoadingScreen = () => {
    const progress = useProgress();
    return (
        <div className="fixed z-50 grid size-full place-items-center bg-blue-brand">
            <p>{progress.progress}</p>
        </div>
    );
};

export default LoadingScreen;
