import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KD1313 | Kingdom of Driftwood",
  description: "Kingdom 1313, Kingdom of Driftwood: public recruitment site and member command center for Rise of Kingdoms players.",
  metadataBase: new URL("https://kd1313.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
