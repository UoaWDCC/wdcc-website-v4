import StandardPageLayout from "@/components/layout/pagelayouts/StandardPageLayout";
import Link from "next/link";

export default function BrainrotLol() {
    return (
        <StandardPageLayout navColor="light">
            <div className="my-44 flex flex-col gap-6">
                <h1 className="text-center text-2xl font-bold">brainrot-lol</h1>
                <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border-2 border-blue-400 px-12 py-10">
                    <p className="text-md">Several independent pages share the brainrot-lol subroute.</p>
                    <div className="flex flex-wrap gap-4">
                        <Link
                            className="rounded-xl bg-gray-50 px-5 py-2 font-semibold transition duration-300 hover:bg-gray-100"
                            href="/brainrot-lol/pricing-xdx-real"
                        >
                            WDCC Pricing
                        </Link>
                        <Link
                            className="rounded-xl bg-gray-50 px-5 py-2 font-semibold text-pink-700 transition duration-300 hover:bg-gray-100"
                            href="/brainrot-lol/dating-compatibility-club"
                        >
                            Web Dating & Compatibility Club
                        </Link>
                        <Link
                            className="rounded-xl bg-gray-50 px-5 py-2 font-semibold text-orange-700 transition duration-300 hover:bg-gray-100"
                            href="/brainrot-lol/wine-drinking-champagne-club"
                        >
                            Wine Drinking & Champagne Club
                        </Link>
                    </div>
                </div>
                <p className="mt-8 text-center text-sm text-red-600">
                    brainrot-lol pages are <strong>joke pages</strong> created by the internal tech team.
                </p>
            </div>
        </StandardPageLayout>
    );
}
