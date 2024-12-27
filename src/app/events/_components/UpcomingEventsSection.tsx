"use client";

import { useState } from "react";

import EventCard from "./EventCard";
import { EventCardType } from "@/types/models";
import EventCategoryFilter from "./EventCategoryFilter";

interface UpcomingEventsProps {
    upcomingEvents: EventCardType[];
}

export default function UpcomingEventsSection({ upcomingEvents }: UpcomingEventsProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    const filterByCategory = (category: string) => () => {
        setSelectedCategory(category);
    }

    const filteredEvents = selectedCategory ? upcomingEvents.filter(event => event.category === selectedCategory) : upcomingEvents;

    return (
        <div className="px-36 py-20">
            <div className="h-10 flex justify-between items-end">
                <h2 className="text-[38px] font-bold leading-10">Upcoming Events</h2>
                <EventCategoryFilter filterByCategory={filterByCategory} />
            </div>
            <div className="mt-5 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {filteredEvents.map((event, i) => (
                    <EventCard key={i} event={event} />
                ))}
            </div>
        </div>
    );
}
