import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter as FontSans } from "next/font/google"; // Correctly import FontSans
import "./globals.css";
import { cn } from "@/lib/utils";
import SiteConfig from "@/config/site";
import NavBar from "@/components/NavBar";

// Apply the font as a variable
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans", // CSS variable for the font
});

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-p-20 scroll-smooth", fontSans.variable)}>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
