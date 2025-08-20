import { generateCertificate } from "./helper/generate-certificate";

export async function GET() {
    return generateCertificate();
}
