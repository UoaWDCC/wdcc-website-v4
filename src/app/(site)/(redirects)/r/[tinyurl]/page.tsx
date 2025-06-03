import { redirect } from "next/navigation";

const redirects: { [key: string]: string } = {
    staging: "https://staging.wdcc.co.nz",
    wdcc: "https://wdcc.co.nz",
    go: "https://go.wdcc.co.nz",
    pass: "https://passport.wdcc.co.nz",
    passport: "https://passport.wdcc.co.nz",
    check: "https://membership.wdcc.co.nz",
    membership: "https://membership.wdcc.co.nz",
    checker: "https://membership.wdcc.co.nz",
    miku: "https://www.youtube.com/watch?v=28FVxYQuLOQ",
};

export default async function RedirectPage({ params }: { params: Promise<{ tinyurl: string }> }) {
    const tinyurl = (await params).tinyurl;
    redirect(redirects[tinyurl] ?? `/${tinyurl}`);
}
