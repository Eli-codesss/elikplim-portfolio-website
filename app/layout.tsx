// app/layout.tsx — FINAL VERSION (copy-paste this)
import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import ReloadFix from "@/components/ReloadFix";

export const metadata = {
  title: "Elikplim Yaa Anumu — Software & QA Engineer",
  description:
    "Full-Stack Developer | Quality Assurance | Networking Specialist",
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans bg-background text-foreground min-h-screen">
        <ThemeProvider defaultTheme="dark">
          <div className=" mx-auto px-6 sm:px-10 lg:px-16">
            <Navbar />
            <ReloadFix />
            <main className="mt-32 lg:mt-40">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
