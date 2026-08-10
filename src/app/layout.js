import { Bagel_Fat_One, Mulish } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer"
import Navbar from "@/app/components/Navbar"

const bagel = Bagel_Fat_One({
  variable: "--font-bagel",
  subsets: ["latin"],
  weight: "400",
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: "600",
});


export const metadata = {
  title: "Sapphic Softball YYJ",
  description: "An annual women’s/trans/two-spirit/nonbinary inclusive softball tournament in Victoria, B.C.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bagel.variable} ${mulish.variable} h-full antialiased`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
