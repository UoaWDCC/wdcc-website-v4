import { FaqPage } from "@/payload/payload-types";

export const mockFaqPageData: FaqPage = {
    id: 1,
    info: "Here are some of the most frequently asked questions about our club, answered!",
    sections: [
        {
            id: "67c2b6da3b29733fe0ed432b",
            name: "General",
            faqs: [
                {
                    id: "67c2b6e83b29733fe0ed432c",
                    question: "What is WDCC?",
                    answer: "WDCC, the Web Development and Consulting Club, is a student technology club based in Auckland, New Zealand. We're the largest club of our kind in the country. Our activities, which include competitions, events, workshops, and projects, help jumpstart our members' careers in tech by providing unique and considered opportunities to learn and network.",
                },
                {
                    id: "67c2b7333b29733fe0ed432d",
                    question: "What does WDCC do?",
                    answer: "WDCC does a range of things! Our main activity is WDCC Projects, a series of development projects that sees groups of members work in realistic teams to deliver a genuine, technical product for several external clients throughout the year. Beyond that, we also conduct a wide variety of educational workshops to upskill members, social mixers to bring people together, and competitions to promote student achievement.",
                },
                {
                    id: "67c2b7393b29733fe0ed432e",
                    question: "How can I get involved with WDCC?",
                    answer: "Getting involved is simple - just sign up and come to any of our events, any time! Feel free to follow WDCC on social media, too, to keep informed on what we're doing this week.",
                },
            ],
            colors: {
                tabBg: "bg-blue-200",
                tabCircle: "bg-blue-500",
            },
        },
        {
            id: "67c2b7433b29733fe0ed432f",
            name: "Projects",
            faqs: [
                {
                    id: "67c2b751f31fc4028bea3d8c",
                    question: "What are WDCC Projects?",
                    answer: "WDCC Projects are pro-bono web development projects for external student groups, charities, and othr organisations, worked on by small teams of 10-12 WDCC members. \n\n",
                },
                {
                    id: "67c32fb1c3912d090c110890",
                    question: "How do I apply to join a WDCC Project?",
                    answer: "Project applications are generally conducted at the start of the year - in the first few weeks of Semester One. The process begins with Projects Launch Night (PLN), after which the application links will be shared on this website and on WDCC's social media pages.",
                },
                {
                    id: "67c32ff8c3912d090c110892",
                    question: "How are WDCC Projects different from other personal projects or class projects?",
                    answer: "WDCC Projects are specifically organised and run to mimic a real-world technical team. Unlike course assignments or most personal projects, you'll be working with a large group of peers in an industry-like setting (using standard tools like GitHub, Figma, and Jira) to deliver a project that'll actually be deployed and used by real clients. You'll also benefit from a range of social events dedicated to project members, as well as constant support from a passionate and talented community of peers.",
                },
                {
                    id: "67c330bfc3912d090c110893",
                    question: "How difficult is the application process?",
                    answer: "It's an unfortunate reality that, every year, WDCC Projects receives more applicants than we can actually assign to a project. Our application process is not difficult, though. It typically consists of an application form, followed by an interview from some of your potential project leaders. It's ultimately up to those leaders to decide who they select for their team, so there's no one-size-fits-all solution to getting in: our best advice is to just be yourself, be friendly, and to try your best! Remember that we're always looking for passion and teamwork, not just technical prowess - and we're probably not going to be asking you LeetCode questions.",
                },
            ],
            colors: {
                tabBg: "bg-yellow-200",
                tabCircle: "bg-orange-400",
            },
        },
        {
            id: "67c2b7453b29733fe0ed4330",
            name: "Events",
            faqs: [
                {
                    id: "67c2b7743b29733fe0ed4333",
                    question: "What events do WDCC put on?",
                    answer: "Check out our instagram (www.instagram.com/wdccuoa) - it's where we advertise all our events.",
                },
            ],
            colors: {
                tabBg: "bg-green-200",
                tabCircle: "bg-green-600",
            },
        },
        {
            id: "67c2b78b3b29733fe0ed4335",
            name: "Team",
            faqs: [
                {
                    id: "67c2b78d3b29733fe0ed4336",
                    question: "How do I become part of the WDCC exec team?",
                    answer: "Applications to be a WDCC executive open near the end of the year, so watch this space!",
                },
            ],
            colors: {
                tabBg: "bg-purple-100",
                tabCircle: "bg-purple-500",
            },
        },
    ],
    updatedAt: "2025-03-03T18:30:49.777Z",
    createdAt: "2025-03-01T07:30:43.453Z",
};
