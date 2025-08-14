import Arrow from "@/assets/svg/Arrow";
import { StandardPageLayout } from "@/components/layout";
import { Button, Duo } from "@/components/primitives";
import { NestedDiv } from "../_components";
import SponsorPageHeader from "./_components/SponsorPageHeader";

export default function SponsorPage() {
    return (
        <StandardPageLayout>
            <SponsorPageHeader />
            <NestedDiv
                outer="flex w-full items-center justify-center py-20 responsive-fullwidth"
                inner="flex w-[80%] max-w-[1100px] flex-col gap-16 sm:gap-24"
            >
                <Duo>
                    <h3 className="text-2xl font-bold">Why sponsor us?</h3>
                    <p className="whitespace-pre-line">{`Since WDCC's founding in 2019, we have grown to over 1000 members and hosted numerous successful events, making us the leading tech club in Aotearoa New Zealand.`}</p>
                    <p className="whitespace-pre-line">
                        {`Not only do we provide social and educational events for our members to network and learn, but we also offer projects for them to put those skills to practice and gain valuable experience working in a team.`}
                    </p>
                </Duo>
                <Duo imgFirst>
                    <h3 className="text-2xl font-bold">What do you get out of it?</h3>
                    <p className="whitespace-pre-line">{`You totally get the opportunity to put your organisation's name on our website, social media, and event materials, showcasing your support for the tech community and gaining exposure to our members and beyond!`}</p>
                    <p className="whitespace-pre-line">{`We also frequently collaborate directly with our sponsors on events and initiatives, providing even more opportunities for visibility and engagement.`}</p>
                </Duo>
                <Duo>
                    <h3 className="text-2xl font-bold">I&apos;m in, how do I get involved?</h3>
                    <p className="whitespace-pre-line">
                        {`Send us an email at `}
                        <a
                            className="text-blue-600 underline transition-colors hover:text-blue-800"
                            href="mailto:outreach@wdcc.co.nz"
                        >
                            outreach@wdcc.co.nz
                        </a>
                        {`! Our team will be happy to discuss sponsorship opportunities with you.`}
                    </p>
                    <div className="w-auto">
                        <Button variant={{ style: "secondary", color: "yellow" }} href="mailto:outreach@wdcc.co.nz">
                            Send us an email <Arrow />
                        </Button>
                    </div>
                </Duo>

                <div>
                    <h2 className="text-2xl font-bold">Our Current Sponsors</h2>
                    <p className="whitespace-pre-line">
                        {`<Insert sponsors component here? Might need some refactoring> We are grateful to our sponsors for their support, which allows us to continue providing valuable opportunities for our members and the wider tech community.`}
                    </p>
                </div>
            </NestedDiv>
        </StandardPageLayout>
    );
}
