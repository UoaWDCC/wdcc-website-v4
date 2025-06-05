"use client";

import { useLayoutEffect, useState } from "react";
import { tv, VariantProps } from "tailwind-variants";

import SimpleLoading from "@/components/loading/SimpleLoading";
import { useScroll } from "@/components/scroll/ScrollContext";
import { cn } from "@/libs/utils";

type ContentlistType = { level: number; label: string; id: string }[];

const tableOfContent = tv({
    base: "cursor-pointer rounded-sm p-0.5 px-2 font-normal transition-colors select-none hover:bg-blue-100",
    variants: {
        active: {
            true: "",
        },
        color: {
            yellow: "hover:bg-orange-100",
            blue: "hover:bg-blue-100",
            green: "hover:bg-green-100",
            purple: "hover:bg-purple-100",
        },
    },
    compoundVariants: [
        {
            active: true,
            color: "yellow",
            class: "bg-orange-200",
        },
        {
            active: true,
            color: "blue",
            class: "bg-blue-200",
        },
        {
            active: true,
            color: "green",
            class: "bg-green-200",
        },
        {
            active: true,
            color: "purple",
            class: "bg-purple-200",
        },
    ],
    defaultVariants: {
        color: "blue",
    },
});

export type TableOfContentsProps = {
    variant?: VariantProps<typeof tableOfContent>;
}

export const TableOfContents = ({ variant }: TableOfContentsProps) => {
    const [contents, setContents] = useState<ContentlistType>([]);
    const [currentId, setCurrentId] = useState("");
    const { getScrollContainer, getScrollY } = useScroll();

    useLayoutEffect(() => {
        const tags = ["h1", "h2", "h3"];
        const headers = document.getElementById("blog")?.querySelectorAll(tags.join(","));
        if (!headers) return;

        const contents: ContentlistType = [];
        for (const header of headers) {
            contents.push({ level: tags.indexOf(header.localName), label: header.textContent ?? "", id: header.id });
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
        headers.forEach((heading) => { observer.observe(heading); });

        return () => {
            headers.forEach((heading) => { observer.unobserve(heading); });
        };
    }, []);

    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const elementY = element.getBoundingClientRect().top + getScrollY();
            const offset = window.innerHeight * 0.2;
            window.history.pushState(null, "", `#${id}`);
            getScrollContainer().scrollTo({
                top: elementY - offset,
                behavior: "smooth",
            });
        }
    };

    return (
        <div
            data-current={currentId}
            className={cn(
                "hidden h-min flex-col gap-2 rounded-bl-xl bg-gray-50 p-2 text-sm transition-transform xl:sticky xl:top-24 xl:flex xl:rounded-sm"
            )}
        >
            {/* main */}
            {contents.length === 0 && <SimpleLoading className="mx-auto p-4" variant={{ color: variant?.color }} />}
            {contents.map((content) => (
                <a
                    key={content.id}
                    style={{ marginLeft: content.level * 16 }}
                    onClick={() => { handleScrollTo(content.id); }}
                    className={tableOfContent({ ...variant, active: content.id === currentId })}
                >
                    {content.label}
                </a>
            ))}
        </div>
    );
};
