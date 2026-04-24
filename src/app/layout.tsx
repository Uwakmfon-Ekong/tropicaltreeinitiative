import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TRCC – Tropical Tree Initiative",
  description:
    "Environmental Conservation · Sustainable Agriculture · Indigenous Knowledge Preservation",
    icons: {
      icon: "/tropslogo.png",
      
    },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
