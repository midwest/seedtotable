import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Crypto College",
  description: "Your one stop shop for crypto educational resources. Coming Soon",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body className={"bg-slate-700"}>
      <Navbar />
      {children}</body>
      </html>
  );
}

