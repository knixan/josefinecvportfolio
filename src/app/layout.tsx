import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LocalizationProvider from "../locales/localization-provider";

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
    <html lang="sv">
      <body className="h-full font-sans m-0 p-0 bg-cover bg-gradient-to-r from-[#3a0ca3] to-[#4cc9f0] text-[#7209b7]">
        <LocalizationProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LocalizationProvider>
      </body>
    </html>
  );
}
