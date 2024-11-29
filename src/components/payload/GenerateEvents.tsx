import React from "react";

import { ImageSkeleton } from "@/components/image/ImageSkeleton";
import { SuspenseImage } from "@/components/image/SuspenseImage";
import { Event } from "@/payload-types";
import AnimatedText from "../text/AnimatedText";

const GenerateEvents = async ({ events }: { events: Event[] }) => {
    return (
        <>
            {(events as Event[]).map((event) => (
                <div key={event.id} className="w-96 rounded-md border p-4">
                    <AnimatedText
                        key={event.id}
                        className="mono overflow-hidden text-[2vw] font-bold"
                        text={event.alt}
                    />
                    <div className="overflow-hidden rounded-md">
                        {event.url && (
                            <SuspenseImage
                                fallback={<ImageSkeleton width={event.width!} height={event.height!} />}
                                src={event.url}
                                alt={event.alt}
                                width={event.width!}
                                height={event.height!}
                            />
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};

export default GenerateEvents;
