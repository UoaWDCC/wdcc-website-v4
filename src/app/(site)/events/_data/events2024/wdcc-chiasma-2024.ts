import type { Event } from "@/types/models";

import placeholder from "@/assets/image/600x400.png";

export const wdccChiasma2024: Event = {
    title: "WDCC Chiasma",
    slug: "2024-wdcc-chiasma",
    time: new Date("2025-02-28T11:30:00"),
    location: "201-265",
    description:
        "Join the WDCC Rizz Executives as we explore the intricacies of socialising, dating, and networking as a tech student in 2025.",
    category: "Workshop",
    thumbnail: {
        src: placeholder,
        alt: "Placeholder image",
    },
    page: {
        description:
            "Are you ready to dive into the world of AI and get ahead in your career?\n\nThe AI revolution is already transforming industries and NOW is your chance to be part of it! 🤖✨\nWith 97 million new AI - driven jobs expected by 2025, students with AI expertise are in higher demand than ever! 🔥\n\nJoin us on Thursday 3rd October for AI Unplugged, a WDCC x Chiasma workshop that will break down everything you need to know about AI and its impact on your future endeavours 💡.\n\nWhether you’re looking to leverage AI in your own projects or gain insight into how AI can boost your employability, this event has something for everyone. 🌟\n\nAs always, free dinner is on us! 😋🥟 Make sure to sign up with the link in our bio 🔗, see you there!",
        image: {
            src: "/eventmock/2024_wdcc_x_chisma.png",
            alt: "Image 1",
        },
    },
    partners: [],
};
