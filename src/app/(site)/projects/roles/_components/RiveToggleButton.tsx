// import { ReactNode } from "react";
import { Button } from "@/components/primitives/Button";

interface props {
    animEnabled: boolean;
    setAnimEnabled: (a: boolean)=>void;
}

export default function RiveToggleButton({ setAnimEnabled, animEnabled}: props) {
    return (
        <div className="fixed z-20 bottom-6 w-full flex justify-center items-center sm:w-fit sm:block sm:right-12">
            <Button variant={{style: "secondary", color: "purple"}} onClick={() => setAnimEnabled(!animEnabled)}>
                {animEnabled ? "make it stop" : "make it move"}
            </Button>
        </div>
    )

}
