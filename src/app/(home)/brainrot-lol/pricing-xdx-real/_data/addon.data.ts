import { AddonCardType } from "../_components/AddonCards";

export const addonData: { addons: AddonCardType[] } = {
    addons: [
        {
            title: "Discord Poll",
            checklist: { label: "Create 1 (one) poll in the Discord, for a 24 hour period.", checked: true },
            price: 24.99,
        },
        {
            title: "Presidential Handshake",
            checklist: { label: "1x handshake with Chris or Kimberley (your choice who).", checked: true },
            price: 99.99,
        },
        {
            title: "Discord Pass",
            checklist: { label: "Grants you unlimited, lifetime Discord access.", checked: true },
            price: 199.99,
        },
        {
            title: "Presidential Chat",
            checklist: {
                label: "1x private dinner or coffee chat with Chris or Kimberley (your choice who).",
                checked: true,
            },
            price: 2999.99,
            urgent: true,
        },
        {
            title: "Exec Role",
            checklist: {
                label: "Guaranteed executive role in 2026 regardless of your personal talent or ability.",
                checked: true,
            },
            price: 4999.99,
        },
        {
            title: "Autographs",
            checklist: { label: "1x autograph from any WDCC executive or director of your choice.", checked: true },
            price: 35499.994,
            urgent: true,
        },
    ],
};
