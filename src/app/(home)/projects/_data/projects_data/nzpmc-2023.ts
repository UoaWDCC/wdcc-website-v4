import type { Project } from "@/types/models";

export const nzpmc2023: Project = {
    name: { title: "NZPMC Exam Portal", extended: "NZPMC Exam Portal" },
    description:
        "The NZPMC Exam Portal allows students to sign up, log in, and sit online exams for the New Zealand Physics and Maths Competition (NZPMC). ",
    icon: undefined,
    year: "2023",
    client: "New Zealand Physics and Maths Competition",
    technologies: ["ViteJs", "Typescript"],
    slug: "2024-NZPMC",
    brief: {
        description:
            "The NZPMC Exam Portal allows students to sign up, log in, and sit online exams for the New Zealand Physics and Maths Competition (NZPMC). After an exam has been completed and marked, students should also be able to see their exam results. Admin functionality includes creating exams, creating questions, assigning exams to students, and releasing marks.",
        image: undefined,
    },
    team: {
        techlead: { name: "John Chen" },
        manager: { name: "Nate Williamson" },
        members: [
            { name: "Eugene Chua", role: "engineer" },
            { name: "Aaron Rodrigues", role: "engineer" },
            { name: "Kevin Cheung", role: "engineer" },
            { name: "Sophie Lee", role: "engineer" },
            { name: "Erica Ngin", role: "engineer" },
            { name: "Alex Kim", role: "engineer" },
            { name: "Benson Cho", role: "engineer" },
        ],
    },
};
