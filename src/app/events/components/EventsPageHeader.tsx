import Header from "@/components/primitives/Header";
import Text from "@/components/primitives/Text";

export default function EventsPageHeader() {
    return (
        <div className="mt-10 flex h-48 items-center justify-between bg-white px-36">
            <Header>Such events</Header>
            <Text className="line-clamp-5 max-w-96">
                Many wowMany wowMany wowMany wowMany wowMany wowMany wowMany wowMany wowMany wowMany wowMany wowMany
                wowMany wowMany wowMany wowMany wowMany wowMany wowMany wowMany wowMany wowMany wowMany wowMany wowMany
                wow
            </Text>
        </div>
    );
}
