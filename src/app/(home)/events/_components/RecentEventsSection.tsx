"use client";

import { useState } from "react";
import { Event } from "@/types/models";
import { EmptyListPlaceholder } from "@/components/EmptyListPlaceholder";
import { Category } from "../_data/events.data";
import EventCard from "./EventCard";
import EventCategoryFilter from "./EventCategoryFilter";

interface RecentEventsProps {
    title: string;
    categories: Category[];
    events: Event[];
}

export default function RecentEventsSection({ title, categories, events }: RecentEventsProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const filterByCategory = (category: string) => () => {
        setSelectedCategory(category);
    };

    const filteredEvents =
        selectedCategory !== "All" ? events.filter((event) => event.category === selectedCategory) : events;

    const TWO_MONTHS_AGO = new Date(Date.now() - 1000 * 60 * 60 * 24 * 60);
    const recentEvents = filteredEvents
        .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())
        .filter(event => new Date(event.time) > TWO_MONTHS_AGO);

    return (
        <div className="flex flex-col gap-4 py-20" id="upcomingEvents">
            <div className="flex flex-col md:flex-row h-10 md:h-auto items-center md:items-end justify-between md:mb-2">
                {/* id for navbar link */}
                <h2 id="recent" className="text-[38px] font-bold leading-10">{title}</h2>
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
                <EmptyListPlaceholder>No events in the last 2 months</EmptyListPlaceholder>
            )}
        </div>
    );
}