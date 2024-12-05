import { Button } from "@/components/primitives/Button";
import AnimatedText from "@/components/text/AnimatedText";

export default function Home() {
    return (
        <div className="relative grid min-h-dvh place-items-center">
            <div className="absolute left-0 top-0 size-[500px] rounded-full bg-blue-600 [translate:-50%_-50%]"></div>
            <AnimatedText
                className="mono overflow-hidden text-[2vw] font-bold"
                text="Web Development & Consulting Club"
            />
            <Button set={{ color: "primary" }}>asd</Button>
        </div>
    );
}
