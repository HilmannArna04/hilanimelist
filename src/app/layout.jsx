import Navbar from "./components/utilities/navbar";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HilAnimeList",
  description: "Webside Anime Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} bg-color-dark ${geistMono.variable} antialiased`} suppressHydrationWarning={true}>
          <Navbar />
        {children}
      </body>
    </html>
  );
}
