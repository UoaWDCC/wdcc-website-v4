import { getPayload } from "payload";

import AnimatedText from "@/components/text/AnimatedText";
import { SLUG } from "@/libs/consts/slug";
import { Event } from "@/payload-types";
import payloadConfig from "@/payload.config";

export default async function Home() {
    const payload = await getPayload({ config: payloadConfig });
    const { docs: events } = await payload.find({
        collection: SLUG.EVENTS,
    });
    console.log(events);
    return (
        <div className="grid min-h-dvh place-items-center">
            <AnimatedText
                className="mono overflow-hidden text-[2vw] font-bold"
                text="Web Development & Consulting Club"
            />
            {(events as Event[]).map((event) => (
                <div key={event.id}>
                    <AnimatedText
                        key={event.id}
                        className="mono overflow-hidden text-[2vw] font-bold"
                        text={event.alt}
                    />
                    <img src={event.url} alt={event.alt} />
                </div>
            ))}
        </div>
    );
}
