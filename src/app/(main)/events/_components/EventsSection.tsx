"use client";

import { EmptyListPlaceholder } from "@/components/old/EmptyListPlaceholder";
import { Event } from "@/types/models/Event";
import { useState } from "react";
import { Category } from "../_data/events.data";
import EventCard from "./EventCard";
import EventCategoryFilter from "./EventCategoryFilter";

type EventsSectionProps = {
    title?: string;
    categories: Category[];
    events: Event[];
    displayAll?: boolean;
};

export default function EventsSection({ title, categories, events, displayAll = false }: EventsSectionProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const filterByCategory = (category: string) => () => {
        setSelectedCategory(category);
    };

    const TWO_MONTHS_AGO = new Date(Date.now() - 1000 * 60 * 60 * 24 * 60);

    const filteredEvents =
        selectedCategory !== "All" ? events.filter((event) => event.category === selectedCategory) : events;
    const sortedEvents = filteredEvents.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
    const recentEvents = displayAll
        ? sortedEvents
        : sortedEvents.filter((event) => new Date(event.time) > TWO_MONTHS_AGO);

    return (
        <div className="flex flex-col gap-4 py-20">
            <div className="flex h-10 flex-col items-center justify-between md:mb-2 md:h-auto md:flex-row md:items-end">
                {/* id for navbar link */}
                <h2 id="recent" className="text-[38px] leading-10 font-bold">
                    {title}
                </h2>
                <EventCategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    filterByCategory={filterByCategory}
                />
            </div>
            {recentEvents.length ? (
                <div className="mt-5 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {recentEvents.map((event, i) => (
                        <EventCard key={i} event={event} />
                    ))}
                </div>
            ) : (
                <EmptyListPlaceholder>
                    {displayAll ? `No events found` : `No events in the last 2 months`}
                </EmptyListPlaceholder>
            )}
        </div>
    );
}
