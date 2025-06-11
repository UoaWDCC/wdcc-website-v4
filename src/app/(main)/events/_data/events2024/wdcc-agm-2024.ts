import type { Event } from "@/types/models";
import placeholder from "@/assets/image/600x400.png";

export const wdccAGM2024: Event = {
    title: "WDCC AGM 2024",
    slug: "2024-wdcc-agm",
    time: new Date("2024-09-11T18:30:00"),
    location: "201-440",
    description: "Compete with your friends and peers in our annual Rizz Contest. Prizes will be provided.",
    category: "Social",
    thumbnail: {
        src: placeholder,
        alt: "Placeholder image",
    },
    page: {
        description:
            "🌟WDCC 2024 Annual General Meeting!🌟\n\n🎉 It’s that time of the year again! Join us for this year's AGM, where you’ll have the chance to elect the new leadership team and shape the future of our club 🚀. We will also review what each team has accomplished this year! 🎯 From marketing to events to development – let's celebrate the milestones we've hit and reflect on the amazing growth across the club 🙌.\n\n📅 Date: 11th September\n⏰ Time: 6 - 8 PM\n📍 Location: 201 - 440",
        image: {
            src: "/eventmock/2024_wdcc_x_chisma.png",
            alt: "Image 1",
        },
    },
    partners: [],
};
