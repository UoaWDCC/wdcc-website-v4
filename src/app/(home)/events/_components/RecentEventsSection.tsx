"use client";

import { useState } from "react";

import { Event } from "@/types/models";

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

    return (
        <div className="flex flex-col gap-4 py-20" id="upcomingEvents">
            <div className="flex flex-col md:flex-row h-10 md:h-auto items-center md:items-end justify-between md:mb-2">
                <h2 className="text-[38px] font-bold leading-10">{title}</h2>
                <EventCategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    filterByCategory={filterByCategory}
                />
            </div>
            <div className="mt-5 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {filteredEvents.map((event, i) => (
                    <EventCard key={i} event={event} />
                ))}
            </div>
        </div>
    );
}
