import { HTMLMotionProps, MotionProps } from "framer-motion";

export type HTMLAtrributeNoMotion<T extends keyof HTMLElementTagNameMap> = Omit<HTMLMotionProps<T>, keyof MotionProps>;
