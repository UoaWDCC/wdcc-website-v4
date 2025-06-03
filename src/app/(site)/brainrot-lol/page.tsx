import StandardPageLayout from "@/components/layout/StandardPageLayout";
import Link from "next/link";

export default function BrainrotLol() {

    return (
        <StandardPageLayout navColor="light">
            <div className="my-44 flex flex-col gap-6">
                <h1 className="text-2xl font-bold text-center">brainrot-lol</h1>
                <div
                    className="flex flex-col gap-6 border-2 border-blue-400 rounded-2xl px-12 py-10 items-center justify-center">
                    <p className="text-md">Several independent pages share the brainrot-lol subroute.</p>
                    <div className="flex flex-wrap gap-4">
                        <Link
                            className="px-5 py-2 bg-gray-50 font-semibold rounded-xl transition duration-300 hover:bg-gray-100"
                            href="/brainrot-lol/pricing-xdx-real">WDCC Pricing</Link>
                        <Link
                            className="px-5 py-2 bg-gray-50 font-semibold text-pink-700 rounded-xl transition duration-300 hover:bg-gray-100"
                            href="/brainrot-lol/dating-compatibility-club">Web Dating & Compatibility Club</Link>
                        <Link
                            className="px-5 py-2 bg-gray-50 font-semibold text-orange-700 rounded-xl transition duration-300 hover:bg-gray-100"
                            href="/brainrot-lol/wine-drinking-champagne-club">Wine Drinking & Champagne Club</Link>
                    </div>
                </div>
                <p className="text-sm text-red-600 text-center mt-8">brainrot-lol pages are <strong>joke pages</strong> created by the internal tech team.</p>
            </div>
        </StandardPageLayout>
    );
}
