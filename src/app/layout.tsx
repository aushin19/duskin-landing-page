import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FirebaseAnalytics from "@/components/FirebaseAnalytics";
import StageWise from "@/components/StageWise";

// Optimize font loading
const dmSans = DM_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "DUSKIN | Science-Backed Skincare",
  description: "DUSKIN combines cutting-edge research with potent, clean ingredients to deliver visible results.",
  applicationName: "DUSKIN Skincare",
  keywords: ["skincare", "science", "beauty", "dermatology", "skin health"],
  authors: [{ name: "DUSKIN" }],
  creator: "DUSKIN Skincare",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: 'white',
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${dmSans.className} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="pt-16 flex-grow">
          {children}
        </main>
        <Footer />
        <FirebaseAnalytics />
        {/* StageWise Toolbar - only renders in development */}
        <StageWise />
      </body>
    </html>
  );
}
