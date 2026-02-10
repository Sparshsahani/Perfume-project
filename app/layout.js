import { Playfair_Display, Inter } from "next/font/google";
import "./globals.scss";
import { MantineProvider } from '@mantine/core';
import Navbar from "../components/Navbar";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400","600","700","800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Perfume — Essence of Elegance",
  description: "Premium perfumes for men & women — handcrafted selections and gift sets.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable}`}>
        <MantineProvider withNormalizeCSS withGlobalStyles>
          <Navbar />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
} 
