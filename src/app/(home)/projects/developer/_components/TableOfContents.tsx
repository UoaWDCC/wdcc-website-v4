"use client";

import { useLayoutEffect, useState } from "react";

import MenuIcon from "@/assets/svg/MenuIcon";
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
            window.history.pushState(null, "", `#${id}`);
            window.scrollTo({
                top: elementY - offset,
                behavior: "smooth",
            });
        }
    };

    return (
        <div
            data-current={currentId}
            className={cn(
                "right-0 top-1/3 hidden h-min flex-col gap-2 rounded-bl-xl bg-gray-50 p-2 text-sm transition-transform xl:sticky xl:top-24 xl:flex xl:rounded"
            )}
        >
            {/* mobile menu abs*/}
            {/* <div
                className="absolute left-0 top-0 grid size-12 -translate-x-[99%] cursor-pointer place-items-center rounded-l-xl bg-inherit xl:hidden"
                onClick={handleToggleMenu}
            >
                <MenuIcon className="stroke-foreground" />
            </div> */}
            {/* main */}
            {contents.length === 0 && <SimpleLoading className="mx-auto p-4 *:bg-blue-brand" />}
            {contents.map((content) => (
                <a
                    key={content.id}
                    style={{ marginLeft: content.level * 16 }}
                    onClick={() => handleScrollTo(content.id)}
                    className={cn(
                        "cursor-pointer select-none rounded p-0.5 px-2 font-normal transition-colors hover:bg-blue-100",
                        content.id === currentId && "bg-blue-200"
                    )}
                >
                    {content.label}
                </a>
            ))}
        </div>
    );
};
