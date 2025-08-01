import type { Metadata } from "next";
import "./globals.css";
import Providers from "./Providers"; 

export const metadata: Metadata = {
  title: "My Pottery Store",
  description: "Handmade ceramics store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}