import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Utilities/Navbar/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Soul Anime List",
  description: "Project Learning NextJs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-color-dark`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
