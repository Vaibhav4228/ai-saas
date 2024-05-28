import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import {ClerkProvider} from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Victa Ai Form Builder",
  description: "AI Forms Builder For Developers",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        { children }
        </body>
    </html>
      </ClerkProvider>
  );
}
