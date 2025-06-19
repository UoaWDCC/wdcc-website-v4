import { Button } from "@/components/primitives/Button";
import { SocialLinkType } from "../_data/primarySocial.data";

export const SocialLink = (props: SocialLinkType) => {
    return (
        <Button
            variant={{ style: "secondary", color: "blue" }}
            className="px-2 [&>svg]:scale-[90%] [&>svg]:fill-blue-700"
            href={props.link}
        >
            {props.icon}
        </Button>
    );
};
