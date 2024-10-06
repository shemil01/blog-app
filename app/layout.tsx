import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"

import { Inter as FontSans } from "next/font/google";import "./globals.css";
import { cn } from "@/lib/utils";
import SiteConfig from "@/config/site";
import NavBar from "@/components/NavBar";

// const inter = Inter({
//   subsets: ['latin'],
//   variable: '--font-inter',  // <--------- 👈
// })
// const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

export const metadata: Metadata = {
  title: SiteConfig.title,
  description:SiteConfig.description 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-p-20 scroll-smooth">
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            
        <NavBar/>
        {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
