import React from "react";

import { useRive } from "@rive-app/react-canvas";

// Wrapper component to isolate useRive logic that
// renders the <RiveComponent />
function RiveWrapper({ src, isPlaying }: { src: string; isPlaying: boolean }) {
    const { rive, RiveComponent } = useRive({
        src: src,
        artboard: "Artboard",
        autoplay: true,
    });

    React.useEffect(() => {
        if (rive) {
            if (isPlaying) rive.play();
            else rive.pause();
        }
    }, [isPlaying, rive]);

    return <RiveComponent />;
}

export default RiveWrapper;
