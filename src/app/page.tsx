import AnimatedText from "@/components/text/AnimatedText";

export default function Home() {
    return (
        <div className="grid min-h-dvh place-items-center">
            <AnimatedText
                className="mono overflow-hidden text-[2vw] font-bold"
                text="Web Development & Consulting Club"
            />
        </div>
    );
}
