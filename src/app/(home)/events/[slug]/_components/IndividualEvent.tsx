import Link from "next/link";

import { Event } from "@/types/models";

import ImageFit from "@/components/ImageFit";

const IndividualEvent = ({ event }: { event: Event }) => {
    return (
        <div className="flex grow flex-col py-16">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                <p className="whitespace-pre-line text-md">{event.page.description}</p>
                <ImageFit src={event.page.image.src} alt="" height="500px" width="500px" />
            </div>
            <EventPartners partners={event.partners} />
        </div>
    );
};

const EventPartners = ({ partners }: { partners: Event["partners"] }) => {
    return (
        partners.length > 0 && (
            <div className="mt-8">
                {/* Partner's' if multiple */}
                <h3 className="text-3xl font-semibold">Collab Partner{partners.length > 1 && "s"}</h3>
                <div className="flex flex-wrap gap-4">
                    {partners.map((partner, index) => (
                        <Link href={partner.href} target="_" key={index}>
                            <ImageFit key={partner.alt} src={partner.src} alt="" height="100px" width="300px" />
                        </Link>
                    ))}
                </div>
            </div>
        )
    );
};

export default IndividualEvent;
