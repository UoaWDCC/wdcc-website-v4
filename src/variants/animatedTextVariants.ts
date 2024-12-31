import { easeOutQuad } from "@/libs/ease";

export const textVariantDefault = {
    initial: {
        y: "2vw",
        opacity: 0,
    },
    animate: {
        y: "0.01vw",
        opacity: 1,
        transition: { type: "smooth", duration: 0.5, ease: easeOutQuad },
    },
};
