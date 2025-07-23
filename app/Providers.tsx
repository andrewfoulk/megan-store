"use client";

import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../lib/createEmotionCache";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/cart/CartDrawer";
import theme from "../lib/theme";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "../components/Navbar";
import { useState } from "react";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const emotionCache = createEmotionCache();

export default function Providers({ children }: { children: React.ReactNode }) {
  const [cartOpen, setCartOpen] = useState(false);
  const toggleCart = () => setCartOpen((o) => !o);
  
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={`${geistSans.variable} ${geistMono.variable}`}>
          <CartProvider>
            <Navbar onCartClick={toggleCart} />
            <CartDrawer open={cartOpen} onClose={toggleCart} />
            {children}
          </CartProvider>
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}