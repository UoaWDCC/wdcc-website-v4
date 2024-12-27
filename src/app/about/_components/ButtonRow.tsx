import { Button } from "@/components/primitives/Button";
import { cn } from "@/libs/utils";

interface ButtonRowProps {
    className?: string;
}

export default function ButtonRow({ className }: ButtonRowProps) {
    return (
        <div className={cn("flex items-start gap-3", className)}>
            <Button set={{ type: "primary", color: "white" }} className="font-semibold">
                Meet the team
            </Button>
            <Button set={{ type: "icon", color: "blue" }} className="font-semibold">
                Frequently asked questions
            </Button>
        </div>
    );
}
