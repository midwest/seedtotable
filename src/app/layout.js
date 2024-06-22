import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/app/nav";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Seed to Table Institute",
  description: "Your one stop shop for organic gardening info. Coming Soon",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={"bg-slate-700"}>
        <Nav/>
        {children}</body>
        <Footer/>
        </html>
    );
}

