import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Innventure",
    description: "Adventure Begins at Check-In",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}