import React from "react";

import GenerateEvents from "@/components/payload/GenerateEvents";
import AnimatedText from "@/components/text/AnimatedText";
import { Event } from "@/payload-types";
import { getAllEvents } from "@/services/actions/events";

export default async function HomePage() {
    const events = (await getAllEvents()) as Event[];

    return (
        <div className="grid min-h-dvh place-items-center">
            <AnimatedText
                className="mono overflow-hidden text-[2vw] font-bold"
                text="Web Development & Consulting Club"
            />
            <div className="flex gap-8">
                <GenerateEvents events={events} />
            </div>
        </div>
    );
}
