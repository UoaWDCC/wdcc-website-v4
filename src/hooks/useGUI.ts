import { useEffect } from "react";
import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";

import { gui } from "@/components/three/globals/gui";

// this hook will only activate if the url hash is #debug
// http://localhost:3000/#debug

export const useGUI = (callback: (gui: GUI) => void) => {
    useEffect(() => {
        if (window.location.hash === "#debug") {
            gui.show();
            return callback(gui);
        }
    }, []);
};
