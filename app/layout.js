import Navbar from "../components/Navbar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "همراه والدین",
  description: "راهنمای تربیت آگاهانه کودک",
};

export default function RootLayout({ children }) {
  return (
    <html
  lang="fa"
  dir="rtl"
  className="h-full antialiased"
>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
