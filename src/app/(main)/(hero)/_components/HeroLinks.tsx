import React from "react";
import * as motion from "motion/react-client";
import { Button } from "@/components/primitives/Button";
import { animation } from "@/utils/animations";
import { primarySocial } from "../_data/primarySocial.data";
import { SocialLink } from "./SocialLink";

type HeroLinksProps = {
    memberButton: {
        label: string;
        href: string;
    };
};

export const HeroLinks = ({ memberButton }: HeroLinksProps) => {
    return (
        <motion.div {...animation.slideUp} className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant={{ style: "primary", color: "blue" }} href={memberButton.href}>
                {memberButton.label}
            </Button>
            <div className="flex gap-4">
                {primarySocial.map((social) => (
                    <SocialLink key={social.link} {...social} />
                ))}
            </div>
        </motion.div>
    );
};
