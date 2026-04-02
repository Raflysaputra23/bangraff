import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Rafly — Full-Stack & Mobile Developer",
  description:
    "Personal portfolio of Rafly, a developer focused on efficient solutions and detail-oriented work. Specializing in Mobile Development, Backend Systems, and Network Security.",
  keywords: [
    "portfolio",
    "developer",
    "mobile development",
    "kotlin",
    "jetpack compose",
    "nodejs",
    "golang",
    "java",
    "python",
    "network security",
  ],
  authors: [{ name: "Rafly" }],
  openGraph: {
    title: "Rafly — Full-Stack & Mobile Developer",
    description:
      "Personal portfolio of Rafly, a developer focused on efficient solutions and detail-oriented work.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${poppins.variable}`}>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
