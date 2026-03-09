import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700" ],
});

export const metadata: Metadata = {
  title: "Dexter's Web — Formula za vašu online vidljivost",
  description: "Web razvoj, mobilne aplikacije i SEO iz Splita.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body className={spaceGrotesk.variable}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}