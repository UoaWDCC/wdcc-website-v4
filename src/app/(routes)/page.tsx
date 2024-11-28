import React from "react";
import { CollectionSlug, getPayload } from "payload";

import { ImageSkeleton } from "@/components/image/ImageSkeleton";
import { SuspenseImage } from "@/components/image/SuspenseImage";
import AnimatedText from "@/components/text/AnimatedText";
import { SLUG } from "@/libs/consts/slug";
import { Event } from "@/payload-types";
import payloadConfig from "@/payload.config";

export default async function Home() {
    const payload = await getPayload({ config: payloadConfig });
    const { docs: events } = await payload.find({
        collection: SLUG.EVENTS as CollectionSlug,
    });
    return (
        <div className="grid min-h-dvh place-items-center">
            <AnimatedText
                className="mono overflow-hidden text-[2vw] font-bold"
                text="Web Development & Consulting Club"
            />
            <div className="flex gap-8">
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
            </div>
        </div>
    );
}
