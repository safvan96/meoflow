import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: {
    default: "Meoflow | Endüstriyel Ölçüm ve Kontrol Ekipmanları",
    template: "%s | Meoflow",
  },
  description:
    "Elektromanyetik debimetre, manyetik bypass seviye göstergesi, basınç transmitteri, sıcaklık sensörü ve proses kontrol cihazları. Endüstriyel otomasyon çözümleri.",
  keywords: [
    "elektromanyetik debimetre",
    "manyetik bypass seviye göstergesi",
    "basınç transmitteri",
    "sıcaklık sensörü",
    "PT100",
    "termokupl",
    "seviye sensörü",
    "proses kontrol",
    "endüstriyel otomasyon",
    "debi ölçüm",
    "akış ölçüm",
    "meoflow",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Meoflow",
    title: "Meoflow | Endüstriyel Ölçüm ve Kontrol Ekipmanları",
    description:
      "Elektromanyetik debimetre, manyetik bypass seviye göstergesi ve endüstriyel otomasyon çözümleri.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gray-50 text-gray-900 antialiased">
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
