import Plus from "@/assets/svg/Plus";
import { cn } from "@/utils/misc";

type FaqButtonProps = {
    rotate?: boolean;
    className?: string;
};

const FaqButton = ({ rotate, className }: FaqButtonProps) => {
    return (
        <div
            className={cn(
                "group grid place-items-center rounded-full bg-linear-to-bl from-blue-400 to-blue-700",
                className
            )}
            data-rotate={rotate}
        >
            <Plus className="size-5 stroke-white transition-transform group-data-[rotate=true]:rotate-[135deg]" />
        </div>
    );
};

export default FaqButton;
