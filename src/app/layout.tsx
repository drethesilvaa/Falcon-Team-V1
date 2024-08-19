import {ReactNode} from "react";
import "../styles/main.css";
import type {Metadata} from "next";
import {Roboto, Source_Code_Pro, Inter, Ubuntu} from "next/font/google";
import Layout from "@/components/globals/Layout";

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
   title: "Falcon",
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
   icons: "/images/favicon.png",
};

export default function RootLayout({children}: {children: ReactNode}) {
   return (
      <html lang="en">
         <body className={fonts.map((font) => font.variable).join(" ")}>
            <Layout>{children}</Layout>
         </body>
      </html>
   );
}
