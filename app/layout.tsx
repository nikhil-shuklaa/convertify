import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import GA from "@/components/GA";
import { ThemeProvider } from "@/components/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Convertify - Free Unlimited File Converter",
    description: `Unleash your creativity with Convertify – the ultimate online tool for
  unlimited and free multimedia conversion. Transform images, audio, and
  videos effortlessly, without restrictions. Start converting now and
  elevate your content like never before!`,
    creator: "Nikhil Shukla",
    keywords: "online image converter, online video converter, online audio converter, unlimited image converter, unlimited video converter",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <GA GA_MEASUREMENT_ID="G-DNZK38BKBJ" />
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem themes={["light", "dark"]}>
                    <Navbar />
                    <Toaster />
                    <div className="pt-32 min-h-screen lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
