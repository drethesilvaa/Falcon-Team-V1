import { ReactNode } from "react";
import "../styles/main.css";
import type { Metadata } from "next";
import { Roboto, Source_Code_Pro, Inter, Ubuntu } from "next/font/google";
import Layout from "@/components/globals/Layout";
import GoogleAdsense from "@/components/google/GoogleAdSense";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source-code-pro",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-inter",
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});

const fonts = [roboto, sourceCodePro, inter, ubuntu];

export const metadata: Metadata = {
  title: "Falcon Team - Website",
  description:
    "With Falcon Team, it's possible to have the best transfer services from a highly experienced team in personal and high-risk protection. Discreet and professional staff guarantees privacy, safety, and tailored experiences for their guests, from business executives to high-asset individuals. We professionally support our customers during trips around landmarks in Portugal in a safe and immersive way. See Portugal with no hassle-Have your journey in Portugal planned in every detail with a taste for an unforgettable experience with Falcon Team.",
  icons: "/images/favicon.png",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={fonts.map((font) => font.variable).join(" ")}>
        <Layout>{children}</Layout>
      </body>
      <GoogleAdsense pId="4038932100311065" />
    </html>
  );
}
