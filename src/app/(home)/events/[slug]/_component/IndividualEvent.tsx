import React from "react";

import { Event } from "@/types/models";

import ImageFit from "@/components/ImageFit";

const IndividualEvent = ({ event }: { event: Event }) => {
    return (
        <div className="flex flex-col py-16">
            <div className="grid grid-cols-2 gap-16">
                {/* todo: replace with real data soon. payload? */}
                {/* done 🤝*/}
                <p className="whitespace-pre-line text-md">{event.descriptionExtended}</p>
                <ImageFit src={event.image} alt="" height="500px" width="500px" />
            </div>
            {event.collabPartners.length > 0 && (
                <div className="mt-8">
                    {/* todo: add an 's' to the end if multiple */}
                    <h3 className="text-3xl font-semibold">Collab Partners</h3>
                    <div className="flex gap-4">
                        {event.collabPartners.map((partner) => (
                            <ImageFit key={partner} src={partner} alt="" height="100px" width="300px" />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default IndividualEvent;
