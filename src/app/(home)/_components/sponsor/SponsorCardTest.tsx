import ImageFit, { ImageFitProps } from "@/components/ImageFit";
import { cn } from "@/libs/utils";

export const SponsorCardTest = ImageFit;

interface SponsorCardTest2Props extends ImageFitProps {
    color: string;
}

export const SponsorCardTest2 = ({ color, ...image }: SponsorCardTest2Props) => {
    return (
        <div className="relative overflow-hidden rounded-xl bg-white p-4 px-8 shadow-lg">
            <div className={cn("absolute left-0 top-0 h-1 w-full bg-yellow-brand", color)} />
            <div className={cn("absolute bottom-0 left-0 h-1 w-full bg-yellow-brand", color)} />
            <ImageFit {...image} />
        </div>
    );
};
