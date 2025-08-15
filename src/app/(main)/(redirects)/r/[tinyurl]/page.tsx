import { redirect } from "next/navigation";

const redirects: Record<string, string> = {
    staging: "https://staging.wdcc.co.nz",
    wdcc: "https://wdcc.co.nz",
    go: "https://go.wdcc.co.nz",
    pass: "https://passport.wdcc.co.nz",
    passport: "https://passport.wdcc.co.nz",
    membership: "https://membership.wdcc.co.nz",
    ami: "https://membership.wdcc.co.nz/sejJBBABIXoePtuQlPkbY",
    miku: "https://www.youtube.com/watch?v=28FVxYQuLOQ",
};

export async function generateStaticParams() {
    // { tinyurl: "staging" } etc
    return Object.keys(redirects).map((key) => ({ tinyurl: key }));
}

/** Redirects - like tinyurl at wdcc.co.nz/r/[...] */
export default async function RedirectPage({ params }: { params: Promise<{ tinyurl: string }> }) {
    const tinyurl = (await params).tinyurl;
    redirect(redirects[tinyurl] ?? `/${tinyurl}`);
}
