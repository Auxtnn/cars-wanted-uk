import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Nunito } from "next/font/google";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const inter = Nunito({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: {
    default: "Car Rental",
    template: "%s",
  },
  description: "Car rental",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
