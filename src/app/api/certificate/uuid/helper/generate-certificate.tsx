import { ImageResponse } from "next/og";

export const generateCertificate = async () => {
    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "black",
                    padding: "32px",
                }}
            >
                <div
                    style={{
                        fontSize: 30,
                        color: "white",
                        marginTop: "20px",
                    }}
                >
                    PROJECTS
                </div>
                <div
                    style={{
                        fontSize: 40,
                        fontWeight: "bold",
                        color: "white",
                        textAlign: "center",
                    }}
                >
                    CERTIFICATE
                </div>
                <div
                    style={{
                        fontSize: 24,
                        color: "white",
                        marginTop: "20px",
                    }}
                >
                    OF PARTICIPATION
                </div>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <div
                        style={{
                            fontSize: 40,
                            fontWeight: "bold",
                            color: "white",
                            textAlign: "center",
                        }}
                    >
                        PROJECT YOUNITE
                    </div>
                    <div
                        style={{
                            fontSize: 40,
                            fontWeight: "bold",
                            color: "white",
                            textAlign: "center",
                        }}
                    >
                        2024
                    </div>
                </div>
            </div>
        ),
        {
            width: 1024,
            height: 512,
        }
    );
};
