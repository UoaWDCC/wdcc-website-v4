// import { ReactNode } from "react";
import { Button } from "@/components/primitives/Button";

type props = {
    animEnabled: boolean;
    setAnimEnabled: (a: boolean) => void;
};

export default function RiveToggleButton({ setAnimEnabled, animEnabled }: props) {
    return (
        <div className="fixed bottom-6 z-20 flex w-full items-center justify-center sm:right-12 sm:block sm:w-fit">
            <Button
                variant={{ style: "secondary", color: "purple" }}
                onClick={() => {
                    setAnimEnabled(!animEnabled);
                }}
            >
                {animEnabled ? "make it stop" : "make it move"}
            </Button>
        </div>
    );
}
