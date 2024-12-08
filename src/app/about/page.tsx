import StandardPageLayout from "@/components/common/StandardPageLayout";
import execsJson from "@/data/execs.json";
import { Exec } from "@/types/models";

export default function AboutPage() {
    const execs = execsJson as Exec[];

    // feel free to completely delete
    return (
        <StandardPageLayout>
            <span className="text-4xl font-semibold dark:text-white">About Us</span>
            <div className="m-2">
                {execs.map((exec) => (
                    <div key={exec.name} className="bg-wdcc-blue-600 dark:bg-wdcc-navy mb-4 rounded-sm p-4 shadow-md">
                        <h2 className="text-xl font-semibold dark:text-white">{exec.name}</h2>
                        <p className="dark:text-white">{exec.description}</p>
                    </div>
                ))}
                <div className="h-[50rem] w-96 bg-purple-500">Big div to test footer no collapse.</div>
            </div>
        </StandardPageLayout>
    );
}
