import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Celebration Crew",
  description: "Celebration Crew is a community of designers.",
};

const playFairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dmsans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playFairDisplay.variable} ${dmSans.variable} antialiased scroll-smooth`}>
        <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-primary-50 to-secondary-50 hero-pattern font-dmsans">
          <Navbar />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
