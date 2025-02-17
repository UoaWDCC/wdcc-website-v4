"use client";

import { useEffect, useLayoutEffect, useState } from "react";

import { cn } from "@/libs/utils";

type ContentlistType = { level: number; label: string; id: string }[];

export const TableOfContents = () => {
    const [contents, setContents] = useState<ContentlistType>([]);
    const [current, setCurrent] = useState("");
    const tags = ["h1", "h2", "h3"];
    useLayoutEffect(() => {
        const headers = document.getElementById("blog")?.querySelectorAll(tags.join(","));
        if (!headers) return;

        // console.log(headers);

        let contents: ContentlistType = [];
        for (const header of headers) {
            contents.push({ level: tags.indexOf(header.localName), label: header.textContent || "", id: header.id });
        }
        setContents(contents);

        console.log(contents);

        // find intersection of headers
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setCurrent(entry.target.id);
                    }
                });
            },
            { rootMargin: "-50% 0% -50% 0%" }
        );

        headers.forEach((heading) => observer.observe(heading));

        return () => {
            headers.forEach((heading) => observer.unobserve(heading));
        };
    }, []);

    return (
        <div
            data-current={current}
            className="fixed right-0 top-1/3 flex h-min flex-col gap-2 rounded-xl bg-blue-50 p-4 lg:sticky lg:top-24"
        >
            {contents.map((content) => (
                <strong
                    key={content.label}
                    style={{ marginLeft: content.level * 16 }}
                    className={cn(content.id === current && "bg-blue-brand")}
                >
                    <a href={`#${content.id}`}>{content.label}</a>
                </strong>
            ))}
        </div>
    );
};
