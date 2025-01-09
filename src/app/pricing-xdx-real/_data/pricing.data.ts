export type pricingType = {
    header: string;
    plan: {
        title: string;
        description?: string;
    };
    values: {
        label: string;
        notIncluded?: boolean; // default true
    }[];
    pricing: number;
    mostPopular?: boolean;
};

export const pricingData: pricingType[] = [
    {
        header: "try before you buy",
        plan: {
            title: "WDCC Free",
        },
        values: [
            { label: "Free events" },
            { label: "Free food" },
            { label: "Educational workshops" },
            { label: "Access to premium events and workshops", notIncluded: true },
            { label: "Ability to chat in the Discord", notIncluded: true },
            { label: "Date Chris and Kimberley", notIncluded: true },
        ],
        pricing: 0,
    },
    {
        header: "best value",
        plan: {
            title: "WDCC Standard",
            description: "Everything in Free, plus...",
        },
        values: [
            { label: "Premium events" },
            { label: "Premium food" },
            { label: "Priority exec application (nepotism free)" },
            { label: "1v1 educational workshops" },
            { label: "Up to 5 Discord messages per day" },
            { label: "WDCC recruitment benefits", notIncluded: true },
            { label: "Date Chris and Kimberley", notIncluded: true },
        ],
        pricing: 15.99,
    },
    {
        header: "most popular!",
        plan: {
            title: "WDCC Pro",
            description: "Everything in Standard, plus...",
        },
        values: [
            { label: "Luxury food" },
            { label: "Super priority exec" },
            { label: "application (nepotism included)" },
            { label: "2-chair tall chair at an event" },
            { label: "Monthly armed strikes" },
            { label: "Unlimited Discord messages" },
            { label: "LeetCode Premium" },
            { label: "1x FAANG Interview (annually) (auto-reject)" },
            { label: "1x Referral to company of choice (interview not guaranteed)" },
            { label: "Your name on our website" },
            { label: "One hand-shake with Chris or Kimberley after 3 months (saves $99.99!)" },
            { label: "Date Chris and Kimberley", notIncluded: true },
        ],
        pricing: 49.99,
        mostPopular: true,
    },
];
