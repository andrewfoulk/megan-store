"use client";

import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../lib/createEmotionCache";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../lib/theme";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const emotionCache = createEmotionCache();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
          {children}
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}