import type { Metadata } from "next";
import Header from "./_components/Header";
import AnimatedBackground from "./_components/AnimatedBackground";
import "./globals.css";
import { Poppins, Josefin_Sans } from "next/font/google";
import CustomCursor from "./_components/CustomCursor";
import { ThemeProvider } from "./context/ThemeContext";
import { JSX } from "react";
import { ProjectProvider } from "./context/ProjectContext";
import { SanityLive } from "@/sanity/lib/live";
import { InfoCvProvider } from "./context/CvContext";
import { SkillsProvider } from "./context/SkillsContext";
import "devicon/devicon.min.css";
const poppins = Poppins({
  weight: ["400", "600"], // السماكات المتاحة
  subsets: ["latin"],
  display: "swap",
});
const josefin = Josefin_Sans({
  weight: "400", // Pacifico عادة يستخدم وزن واحد فقط
  subsets: ["latin"], // الأحرف المطلوبة
  display: "swap", // لتحسين التحميل
});
export const metadata: Metadata = {
  title: "Portfolio",
  description: "Mohammed seghir alaaeddine web developer portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <ThemeProvider>
        <ProjectProvider>
          <head>
            <meta
              name="google-site-verification"
              content="0hF_3rqUgTDlL37-QqwrIyMqgKgKfmQX2iFcmQTcoN8"
            />
          </head>
          <body className={`${poppins.className} relative `}>
            <Header />
            <AnimatedBackground />
            <CustomCursor />
            <SkillsProvider>
              <InfoCvProvider>
                <main className={`${josefin.className} overflow-hidden`}>
                  {children}
                </main>
              </InfoCvProvider>
            </SkillsProvider>
            <SanityLive />
          </body>
        </ProjectProvider>
      </ThemeProvider>
    </html>
  );
}
