// import { ReactNode } from "react";
import { Button } from "@/components/primitives/Button";

interface props {
    animEnabled: boolean;
    setAnimEnabled: (a: boolean)=>void;
}

export default function RiveToggleButton({ setAnimEnabled, animEnabled}: props) {
    return (
        <div className="fixed bottom-6 right-12">
            <Button variant={{style: "secondary", color: "purple"}} onClick={() => setAnimEnabled(!animEnabled)}>
                {animEnabled ? "make it stop" : "make it move"}
            </Button>
        </div>
    )

}
