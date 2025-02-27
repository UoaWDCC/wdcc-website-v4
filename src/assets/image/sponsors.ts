export const sponsorsGold = ["/sponsors/partly_logo_black.svg"];

export const sponsorsTech = ["/sponsors/amazon_web_services_logo.webp"];

export const sponsorsSilver = [
    "/sponsors/sandfield_wordmark_black.webp",
    "/sponsors/datacom_primary_logo_datacom_blue.webp",
    "/sponsors/ey_horizontal_black.webp",
    "/sponsors/serato_black.webp",
    "/sponsors/kpmg_blue_logo_logo_no_background.webp",
    "/sponsors/janestreet_black.webp",
];

export const sponsorsCommunity = [
    "/sponsors/tidy_charcoal_logo.svg",
    "/sponsors/grant_thornton_logo.webp",
    "/sponsors/beyond_essential_systems.webp",
];

export const sponsors = {
    gold: sponsorsGold,
    tech: sponsorsTech,
    silver: sponsorsSilver,
    community: sponsorsCommunity,
};

export type SponsorTierKeys = keyof typeof sponsors;
