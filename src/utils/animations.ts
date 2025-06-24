import { MotionProps } from "motion/react";
import { ease } from "./ease";

export const fadeopacity = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

export const animations = {
    slideUp: { animate: { y: [64, 0] }, transition: { duration: 2, ease: ease.outQuint } },
    slideUp_xl: { animate: { y: [96, 0] }, transition: { duration: 2, ease: ease.outQuint } },
} as const satisfies Record<string, MotionProps>;

export type AnimationKey = keyof typeof animations;

export const animation: Record<AnimationKey, MotionProps> = animations;
