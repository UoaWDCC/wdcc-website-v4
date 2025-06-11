export const pricingData = {
    cards: [
        {
            header: "try before you buy",
            plan: {
                title: "WDCC Free",
                desc: "For new students or visitors looking to try out the WDCC experience.",
            },
            checklists: [
                { label: "Free events", checked: true },
                { label: "Free food", checked: true },
                { label: "Educational workshops", checked: true },
                { label: "Access to premium events and workshops", checked: false },
                { label: "Ability to chat in the Discord", checked: false },
                { label: "Date Chris and Kimberley", checked: false },
            ],
            pricing: 0,
            variant: { style: "free" as const },
        },
        {
            header: "best value",
            plan: {
                title: "WDCC Standard",
                desc: "For the smart student looking to level up their CS/SE skills in a quality environment.",
                note: "Everything in Free, plus...",
            },
            checklists: [
                { label: "Premium events", checked: true },
                { label: "Premium food", checked: true },
                { label: "Priority exec application (nepotism free)", checked: true },
                { label: "1v1 educational workshops", checked: true },
                { label: "Up to 5 Discord messages per day", checked: true },
                { label: "WDCC recruitment benefits", checked: false },
                { label: "Date Chris and Kimberley", checked: false },
            ],
            pricing: 15.99,
            variant: { style: "standard" as const },
        },
        {
            header: "most popular!",
            plan: {
                title: "WDCC Pro",
                desc: "For discerning, talented students who expect the best of themselves and others.",
                note: "Everything in Standard, plus...",
            },
            checklists: [
                { label: "Luxury food", checked: true },
                { label: "Super priority exec application (nepotism included)", checked: true },
                { label: "2-chair tall chair at an event", checked: true },
                { label: "Monthly armed strikes", checked: true },
                { label: "Unlimited Discord messages", checked: true },
                { label: "LeetCode Premium", checked: true },
                { label: "1x FAANG Interview (annually) (auto-reject)", checked: true },
                { label: "1x Referral to company of choice (interview not guaranteed)", checked: true },
                { label: "Your name on our website", checked: true },
                { label: "One hand-shake with Chris or Kimberley after 3 months (saves $99.99!)", checked: true },
                { label: "Date Chris and Kimberley", checked: false },
            ],
            pricing: 49.99,
            mostPopular: true,
            variant: { style: "pro" as const },
        },
    ],
};
