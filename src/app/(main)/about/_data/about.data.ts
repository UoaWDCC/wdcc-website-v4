import { AboutPage } from "@/types/pages/AboutPage";
import placeholder from "@/assets/image/600x400.png";
import endImageSrc from "@/assets/image/industry-night-1.png";

export const aboutData: AboutPage = {
    header: {
        title: `About Us`,
        content: `The Web Development and Consulting Club is Aotearoa New Zealand’s largest student technology club. Read more about our history, goals, and achievements - as well as the people that help make it all happen.`,
        // buttons labels/links are currently hardcoded into the page header
    },
    genInfo: {
        firstPart: `Founded in 2019, WDCC - the Web Development and Consulting Club - helps promote the learning and practice of software development and its related skills and activities.`,
        secondPart: `We conduct workshops, events, and organise real-world projects that help equip tomorrow’s talent.`,
        image: placeholder,
        imageAlt: `placeholder image...for now`,
    },
    whyJoin: {
        title: `Why Join WDCC?`,
        content: `WDCC (Web Development & Consulting Club Incorporated) is a not-for-profit organisation, founded by two students at the University of Auckland.\n\nWDCC aims to bridge the gap between university knowledge and real-world industry practices. We run projects with real-world clients that solve real-world problems, generally for NFP organisations or other student clubs who don't have the funding to fund a solution themselves.\n\nProjects could also be to develop own open-source tools to better support the development community. To help our members and the wider student community improve their skills and gain more benefits from the projects, we also hold workshops that help to upskill.`,
        image: placeholder,
        imageAlt: `placeholder image...for now`,
    },
    clubStory: {
        title: `The WDCC story`,
        content: `WDCC Lore here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis condimentum orci et congue. Donec at sagittis sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac dolor eu odio sagittis aliquet.\n\nUt et sapien eget ligula tincidunt mollis a eget justo. Curabitur sapien sem, malesuada in augue in, pretium convallis arcu. In luctus nibh leo, a rutrum augue imperdiet non. Nam vehicula ex nec ante porta imperdiet.\n\nNullam fermentum justo ut scelerisque cursus. Nulla ac massa in nulla varius dictum. Mauris interdum, eros id volutpat rutrum, libero quam posuere felis, vitae semper lacus metus a orci.`,
        image: placeholder,
        imageAlt: `placeholder image...for now`,
    },
    ourPeople: {
        title: `Our People`,
        content: `WDCC’s 973 executives and 12,329,900 members help make our events and goals happen, and help shape the character and personality of our club.`,
        image: placeholder,
        imageAlt: `placeholder image...for now`,
    },
    quoteSection: {
        quote: `You should totally join WDCC because we have two co-presidents Chris and Kimberley and they're really hot but also we have a shit ton of projects which are really cool and means that you can learn stuff like React :)))))))), Next XDDDDDDDDDD, Express :PPPPPPPPPPPPP, and all the other web technologies that may be relevant to web development and stuff.`,
        author: `A member of the tech team`,
        subscript: `(identity withheld)`,
    },
    endImage: {
        image: endImageSrc,
        imageAlt: `Industry Night 2021 or something idk`,
    },
};
