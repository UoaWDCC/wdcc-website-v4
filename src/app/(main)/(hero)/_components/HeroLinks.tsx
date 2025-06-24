import React from "react";
import * as motion from "motion/react-client";
import { Button } from "@/components/primitives/Button";
import { animation } from "@/utils/animations";
import { primarySocial } from "../_data/primarySocial.data";
import { SocialLink } from "./SocialLink";

export const HeroLinks = () => {
    return (
        <motion.div {...animation.slideUp} className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
                variant={{ style: "primary", color: "blue" }}
                href="https://docs.google.com/forms/d/e/1FAIpQLSf9p1n1GpuuFxXbhx_7iWDQkDqRpxVDAjUOeyyzYeavC6d48A/viewform?usp=sharing"
            >
                Become a member for 2025
            </Button>
            <div className="flex gap-4">
                {primarySocial.map((social) => (
                    <SocialLink key={social.link} {...social} />
                ))}
            </div>
        </motion.div>
    );
};
