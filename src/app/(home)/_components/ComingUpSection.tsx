import React from "react";

import EventCard from "@/app/events/_components/EventCard";
import { eventsData } from "@/app/events/_data/events.data";

import { Button } from "@/components/primitives/Button";
import Arrow from "@/assets/svg/Arrow";


const ComingUp = () => {
    return (
        <div className="flex flex-col gap-10 items-center justify-center">
            <h2 className="text-3xl font-bold leading-none">
               Coming up
            </h2>
            <p className="text-lg text-blue-700 leading-tight text-center md:w-[80%]">
                There’s always plenty of events scheduled at WDCC - here’s the next few!
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {eventsData.slice(0,3).map((event, i) => (
                    <EventCard key={i} event={event} />
                ))}
            </div>
            <Button variant={{style: "tertiary", color: "dark" }}>See all events <Arrow/> </Button>
        </div>
    );
};

export default ComingUp;
