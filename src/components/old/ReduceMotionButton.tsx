import { useReduceMotion } from "@/components/contexts/ReduceMotionContext";
import { Button } from "@/components/primitives/Button";

export default function ReduceMotionButton() {
    const { reduceMotion, action } = useReduceMotion();
    return (
        <div className="fixed bottom-6 z-20 flex w-full items-center justify-center sm:right-12 sm:block sm:w-fit">
            <Button variant={{ style: "secondary", color: "blue" }} onClick={action.toggleReduceMotion}>
                {reduceMotion ? "Enable animations" : "Disable animations"}
            </Button>
        </div>
    );
}
