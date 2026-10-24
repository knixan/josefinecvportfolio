import type { Metadata } from "next";
import { Outfit, Great_Vibes } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LocalizationProvider from "../locales/localization-provider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

export const metadata: Metadata = {
  title: "Josefine Eriksson CV",
  description: "CV for Josefine Eriksson",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv" className={`${outfit.variable} ${greatVibes.variable}`}>
      <body className="h-full font-sans m-0 p-0 bg-background text-foreground antialiased">
        <LocalizationProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LocalizationProvider>
      </body>
    </html>
  );
}
