"use client";

import { useState } from "react";

import EventCard from "./EventCard";
import { EventCardType } from "@/types/models";

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
                <div className="justify-start items-center gap-[18px] flex">
                    <p className="font-semibold leading-none">Filter by category</p>
                    <div className="justify-start items-center gap-3 flex">
                        <div className="px-6 py-2 bg-slate-200 rounded-[999px] border-2 border-slate-500 justify-start items-start gap-2.5 flex overflow-hidden">
                            <button className="font-semibold leading-none" onClick={filterByCategory("")}>All</button>
                        </div>
                        <div className="px-6 py-2 bg-blue-100 rounded-[999px] border-2 border-blue-400 justify-start items-start gap-2.5 flex overflow-hidden">
                            <button className="font-semibold leading-none" onClick={filterByCategory("Workshop")}>Workshops</button>
                        </div>
                        <div className="px-6 py-2 bg-yellow-100 rounded-[999px] border-2 border-yellow-400 justify-start items-start gap-2.5 flex overflow-hidden">
                            <button className="font-semibold leading-none" onClick={filterByCategory("Competition")}>Competitions</button>
                        </div>
                        <div className="px-6 py-2 bg-purple-100 rounded-[999px] border-2 border-purple-400 justify-start items-start gap-2.5 flex overflow-hidden">
                            <button className="font-semibold leading-none" onClick={filterByCategory("Social")}>Socials</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {filteredEvents.map((event, i) => (
                    <EventCard key={i} event={event} />
                ))}
            </div>
        </div>
    );
}
