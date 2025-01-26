import { HTMLMotionProps, MotionProps } from "motion/react";

export type HTMLAtrributeNoMotion<T extends keyof HTMLElementTagNameMap> = Omit<HTMLMotionProps<T>, keyof MotionProps>;
