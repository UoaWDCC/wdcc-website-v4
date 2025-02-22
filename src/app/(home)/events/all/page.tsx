import React from "react";

import { Event } from "@/types/models";

import StandardPageLayout from "@/components/layout/StandardPageLayout";

import EventCard from "../_components/EventCard";
import { eventsData } from "../_data/events.data";

const page = () => {
    return (
        <StandardPageLayout>
            <div className="my-24 flex w-full flex-col">
                <div className="grid gap-6 lg:grid-cols-2">
                    {eventsData.eventsGrid.events.map((event, index) => (
                        <EventCard event={event} key={index} />
                    ))}
                </div>
            </div>
        </StandardPageLayout>
    );
};

export default page;
