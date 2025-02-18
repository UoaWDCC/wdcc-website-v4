"use client";

import { useLayoutEffect, useState } from "react";

import SimpleLoading from "@/components/loading/SimpleLoading";
import { cn } from "@/libs/utils";

type ContentlistType = { level: number; label: string; id: string }[];

export const TableOfContents = () => {
    const [contents, setContents] = useState<ContentlistType>([]);
    const [currentId, setCurrentId] = useState("");
    const tags = ["h1", "h2", "h3"];
    useLayoutEffect(() => {
        const headers = document.getElementById("blog")?.querySelectorAll(tags.join(","));
        if (!headers) return;

        let contents: ContentlistType = [];
        for (const header of headers) {
            contents.push({ level: tags.indexOf(header.localName), label: header.textContent || "", id: header.id });
        }

        setContents(contents);
        setCurrentId(contents[0].id);

        // find intersection of headers
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setCurrentId(entry.target.id);
                    }
                });
            },
            // invisible trigger at top 20% of viewport with a 5% tolerance
            { rootMargin: "-20% 0% -75% 0%" }
        );

        // register all headers
        headers.forEach((heading) => observer.observe(heading));

        return () => {
            headers.forEach((heading) => observer.unobserve(heading));
        };
    }, []);

    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const elementY = element.getBoundingClientRect().top + window.pageYOffset;
            const offset = window.innerHeight * 0.2;
            window.scrollTo({
                top: elementY - offset,
                behavior: "smooth",
            });
        }
    };

    return (
        <div
            data-current={currentId}
            className="fixed right-0 top-1/3 flex h-min flex-col gap-2 rounded-xl bg-gray-50 p-4 lg:sticky lg:top-24"
        >
            <strong className="whitespace-nowrap px-8 text-center text-lg font-bold">table of contents</strong>
            <hr />
            {contents.length === 0 && <SimpleLoading className="mx-auto p-4 *:bg-blue-brand" />}
            {contents.map((content) => (
                <a
                    key={content.id}
                    style={{ marginLeft: content.level * 16 }}
                    onClick={() => handleScrollTo(content.id)}
                    className={cn(
                        "cursor-pointer select-none rounded p-0.5 px-2 font-semibold transition-colors hover:bg-blue-100",
                        content.id === currentId && "bg-blue-200"
                    )}
                >
                    {content.label}
                </a>
            ))}
        </div>
    );
};
